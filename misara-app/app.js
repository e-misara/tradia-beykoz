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
    geojsonIl: null,   // MU-02 M1: il polygon seti (81 il)
    orumcek: null,     // MU-02 M4: 3-ekran veri
    sekme: 'harita',   // harita | orumcek-turkiye | orumcek-bolge | orumcek-kuyruk
    secim: { il: null, ilce: null, mahalle: null },
  };

  // ─── M4 Örümcek ─────────────────────────────────────
  async function orumcekCek() {
    try {
      state.orumcek = await apiCek('orumcek');
      return true;
    } catch (e) { return false; }
  }

  function orumcekRender() {
    const o = state.orumcek;
    const gov = document.querySelector('#orumcek-gov');
    const bas = document.querySelector('#orumcek-baslik');
    if (!o || o.veri_yok) {
      gov.innerHTML = '<div class="veri-yok">ÖRÜMCEK VERİSİ YOK<div class="veri-yok-alt">orumcek.json üretilmemiş. orumcek_derle.py çalıştır.</div></div>';
      return;
    }
    if (state.sekme === 'orumcek-turkiye') return orumcekTurkiye(o, gov, bas);
    if (state.sekme === 'orumcek-bolge') return orumcekBolge(o, gov, bas);
    if (state.sekme === 'orumcek-kuyruk') return orumcekKuyruk(o, gov, bas);
  }

  const esc = (x) => (x === null || x === undefined) ? '' :
    String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const yaz = (x, bos = '—') => (x === null || x === undefined || x === '') ? bos : esc(x);

  function orumcekTurkiye(o, gov, bas) {
    const t = o.ekran_1_turkiye || {};
    const il = t.il_doluluk || {}, d = t.ilce_doluluk || {};
    const k = o.kuyruk || {};
    bas.textContent = `M4 · TÜRKİYE · ${yaz(t.bolge_sayi)} ilçe · KUYRUK ${yaz(t.kuyruk_hucre_sayi)} hücre`;
    const kart = (v, e, cls='') => `<div class="m4-kart"><div class="m4-rakam ${cls}">${yaz(v)}</div><div class="m4-etiket">${e}</div></div>`;
    const dag = t.kuyruk_durum_dagilim || {};
    gov.innerHTML = `
      <div class="m4-ozet">
        ${kart(il.dolu,'Dolu il')}${kart(il.kismi,'Kısmi il')}${kart(il.sifir,'Boş il')}${kart(d.dolu,'Dolu ilçe')}
        ${kart(dag['DOLU']||0,'Dolu hücre (KUYRUK)')}${kart(dag['ERİŞİLEMEDİ']||0,'Erişilemedi')}${kart(dag['BOŞ']||0,'Boş hücre')}
        ${kart(t.bugun_kapanan_hucre,'Bugün kapanan hücre')}
      </div>
      <div class="m4-kart m4-tile-genis">
        <div class="m4-etiket">DUYGUSAL FİYATLAMA göstergesi (bölge)</div>
        <div class="m4-rakam m4-rakam-small">${yaz((t.duygusal_fiyatlama||{}).deger, 'ölçülmedi')}</div>
        <div class="m4-etiket">sahip: ${yaz((t.duygusal_fiyatlama||{}).sahip)}</div>
      </div>
      <div class="m4-not">
        <strong>Ağ ölçüsü:</strong> ${yaz(t.hucre_formul)}<br>
        <strong>Bugün kapanan:</strong> ${yaz(t.bugun_kapanan_not)}<br>
        <strong>Açık vakalar:</strong> ${(t.oncelik_1_bolgeler||[]).map(esc).join(' · ') || '—'}<br>
        <strong>Kaynak:</strong> <code>motor/KUYRUK.json</code> (Vezir, güncelleme ${yaz(k.guncelleme)}) → <code>veri/orumcek.json</code> · kesit ${yaz(o.kesit_utc)}
      </div>
      <div class="m4-acik-borc"><strong>Açık borçlar:</strong>
        <ul>${(o.acik_borclar||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`;
  }

  function orumcekBolge(o, gov, bas) {
    const bolgeler = o.ekran_2_bolgeler || {};
    const adlar = Object.keys(bolgeler);
    if (!adlar.length) { gov.innerHTML = '<div class="veri-yok">KUYRUK\'ta bölge yok</div>'; return; }
    if (!state.m4Bolge || !bolgeler[state.m4Bolge]) state.m4Bolge = adlar[0];
    const b = bolgeler[state.m4Bolge];
    const sy = b.sayac_16 || {};
    bas.textContent = `M4 · BÖLGE · ${state.m4Bolge} · 16 kök: ${sy['DOLU']||0} dolu · ${sy['ERİŞİLEMEDİ']||0} erişilemedi · ${sy['BOŞ']||0} boş`;
    let html = '<div class="m4-bolge-sec">' + adlar.map(a =>
      `<button class="m4-bolge-btn ${a===state.m4Bolge?'m4-bolge-aktif':''}" data-bolge="${esc(a)}">${esc(a)}</button>`).join('') + '</div>';
    html += '<table class="m4-tablo"><thead><tr><th>Kök</th><th>Soru (düz Türkçe)</th><th>Sorumlu departmanlar</th><th>Durum</th><th>Kanıt</th><th>Kaynak · tarih</th></tr></thead><tbody>';
    (b.satirlar||[]).forEach(r => {
      const dcls = m4DurumSinif(r.durum);
      html += `<tr class="m4-satir" title="${esc(r.ozet || '')}">
        <td><span class="m4-soru-id">${esc(r.kok)}</span> ${esc(r.ad)}</td>
        <td>${esc(r.soru)}</td>
        <td>${(r.arz_cc||[]).map(esc).join(', ') || '—'}</td>
        <td><span class="m4-rozet ${dcls}">${esc(r.durum)}</span>${r.cc ? ' · '+esc(r.cc) : ''}</td>
        <td>${yaz(r.kanit_sinifi)}</td>
        <td class="m4-kaynak">${yaz(r.kaynak)}${r.tarih ? ' · '+esc(r.tarih) : ''}<div class="m4-ozet-satir">${yaz(r.ozet,'')}</div></td>
      </tr>`;
    });
    html += '</tbody></table>';
    html += `<div class="m4-not"><strong>Ölçek notu:</strong> ${yaz((o.kuyruk||{}).olcek_notu)}<br>
      <strong>640 adres sayımı:</strong> ${yaz(b.adres_640_sayim)}</div>`;
    gov.innerHTML = html;
    gov.querySelectorAll('.m4-bolge-btn').forEach(btn => btn.addEventListener('click', () => {
      state.m4Bolge = btn.dataset.bolge; orumcekRender();
    }));
  }

  function m4DurumSinif(d) {
    const D = (d || '').toUpperCase();
    if (D === 'DOLU') return 'm4-dolu';
    if (D === 'ERİŞİLEMEDİ' || D === 'ERISILEMEDI') return 'm4-erisilemedi';
    if (D === 'KUYRUKTA') return 'm4-kuyruk';
    if (D === 'KOŞUYOR' || D === 'KOSUYOR') return 'm4-kosuyor';
    return 'm4-bos';
  }

  function orumcekKuyruk(o, gov, bas) {
    const k = o.ekran_3_canli_kuyruk || {};
    const kos = k.kosuyor || [], bit = k.bugun_biten || [], tak = k.takili || [];
    bas.textContent = `M4 · CANLI KUYRUK · koşuyor ${kos.length} · bugün biten ${bit.length} · takılı ${tak.length}`;
    const liste = (arr, f, bos) => arr.length ? '<ul class="m4-liste">' + arr.map(f).join('') + '</ul>' : `<div class="veri-yok-alt">${bos}</div>`;
    const vs = k.vezir_saglik || {};
    let html = '';
    html += `<div class="m4-bolum"><h3>KOŞAN İŞLER</h3>${liste(kos, x => `<li><code>${yaz(x.pid)}</code> · ${yaz(x.sure)} · ${yaz(x.komut)}</li>`, 'şu an koşan iş yok')}</div>`;
    html += `<div class="m4-bolum"><h3>BUGÜN BİTEN (son 24 saat · 02_CC_STATE)</h3>${liste(bit, x => `<li><code>${yaz(x.dosya)}</code> · ${yaz(x.mtime_utc)} · ${yaz(x.boyut)} bayt</li>`, 'son 24 saatte bildirim yok')}</div>`;
    html += `<div class="m4-bolum"><h3>3 GÜNDÜR TAKILI</h3>${liste(tak, x => `<li class="m4-takili"><strong>${yaz(x.ad)}</strong> · ${yaz(x.detay)} · ${yaz(x.zaman)}</li>`, 'takılı iş yok')}</div>`;
    html += `<div class="m4-bolum"><h3>VEZİR SAĞLIK ŞERİDİ</h3>
      ${liste(vs.kirmizi||[], x => `<li class="m4-takili">${esc(x)}</li>`, 'kırmızı yok')}
      ${liste(vs.sari||[], x => `<li class="m4-sari">${esc(x)}</li>`, 'sarı yok')}
      <div class="m4-not">kaynak: ${yaz(vs.kaynak)}</div></div>`;
    html += `<div class="m4-bolum"><h3>VEZİR SAPMA ŞERİDİ</h3><div class="veri-yok-alt">${yaz((k.vezir_sapma||{}).durum)} — ${yaz((k.vezir_sapma||{}).not)}</div></div>`;
    html += `<div class="m4-not">30 sn'de yenilenir · kesit ${yaz(o.kesit_utc)}</div>`;
    gov.innerHTML = html;
  }

  // Sekme değişimi
  function sekmeDegistir(yeniSekme) {
    state.sekme = yeniSekme;
    const haritaEk = document.querySelector('#harita-ekran');
    const orumcekEk = document.querySelector('#orumcek-ekran');
    if (yeniSekme === 'harita') {
      haritaEk.classList.remove('gizli');
      orumcekEk.classList.add('gizli');
    } else {
      haritaEk.classList.add('gizli');
      orumcekEk.classList.remove('gizli');
      orumcekRender();
    }
    document.querySelectorAll('.sekme').forEach(b => {
      b.classList.toggle('sekme-aktif', b.dataset.sekme === yeniSekme);
    });
  }

  // MU-02 M1: SVG projeksiyon (Türkiye BBOX equirectangular)
  // BBOX: lng 25.67-44.83 · lat 35.82-42.11
  const SVG_W = 900, SVG_H = 340;
  const BBOX = { minLng: 25.67, maxLng: 44.83, minLat: 35.82, maxLat: 42.11 };
  function projectLng(lng) {
    return (lng - BBOX.minLng) / (BBOX.maxLng - BBOX.minLng) * SVG_W;
  }
  function projectLat(lat) {
    // y ekseni ters (yukarı = küçük y)
    return (BBOX.maxLat - lat) / (BBOX.maxLat - BBOX.minLat) * SVG_H;
  }
  // Il adı normalleştir (GeoJSON "Afyon" → Cografya "Afyonkarahisar")
  const IL_ALIAS = { "Afyon": "Afyonkarahisar" };
  function ilAdNorm(ad) { return IL_ALIAS[ad] || ad; }

  // GeoJSON polygon → SVG path 'd' üret
  function polygonYolu(coords, isMulti) {
    // coords: Polygon = [ring, ring, ...], MultiPolygon = [Polygon, Polygon, ...]
    const polys = isMulti ? coords : [coords];
    const parcalar = [];
    for (const poly of polys) {
      for (const ring of poly) {
        let d = "";
        for (let i = 0; i < ring.length; i++) {
          const [lng, lat] = ring[i];
          const x = projectLng(lng).toFixed(1);
          const y = projectLat(lat).toFixed(1);
          d += (i === 0 ? "M" : "L") + x + "," + y;
        }
        d += "Z";
        parcalar.push(d);
      }
    }
    return parcalar.join(" ");
  }

  // ─── API ────────────────────────────────────────────
  // Üç ayrı hata: fetch (network) · syntax (JSON bozuk) · schema (uyuşmazlık)
  class FetchHatasi extends Error { constructor(m){super(m); this.tur="FETCH";} }
  class JsonHatasi   extends Error { constructor(m){super(m); this.tur="JSON";}  }
  class SemaHatasi   extends Error { constructor(m, aranan, mevcut){
    super(m); this.tur="SEMA"; this.aranan=aranan; this.mevcut=mevcut;
  } }

  async function apiCek(yol) {
    let r;
    try {
      r = await fetch("/api/" + yol, { cache: "no-store" });
    } catch (e) {
      throw new FetchHatasi("Ağ/sunucu erişilemez: " + e.message);
    }
    if (!r.ok) throw new FetchHatasi("HTTP " + r.status + " · " + yol);
    const gov = await r.text();
    try { return JSON.parse(gov); }
    catch (e) { throw new JsonHatasi("JSON bozuk (" + yol + "): " + e.message); }
  }

  function veriYok(veri) {
    return veri && veri.veri_yok === true;
  }

  // Şema koruyucu: aranan yolu döndürür, yoksa SemaHatasi fırlatır.
  function alan(obj, yol, mevcutKokler) {
    const parcalar = yol.split(".");
    let n = obj;
    for (const p of parcalar) {
      if (n == null || typeof n !== "object" || !(p in n)) {
        throw new SemaHatasi(
          "Şema uyuşmazlığı — aranan: " + yol,
          yol,
          mevcutKokler || (n && typeof n === "object" ? Object.keys(n) : [])
        );
      }
      n = n[p];
    }
    return n;
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

    // Türkiye seviyesi — MU-02 M1: SVG polygon harita
    if (!s.il) {
      const iller = g.iller;
      const geo = state.geojsonIl;
      // Panel başlığını güncelle
      const panelT = document.querySelector("#sol-harita .panel-t");
      if (panelT) panelT.textContent = "HARİTA · 81 İL POLYGON";
      // Fallback: geojson yoksa eski düğüm-liste
      if (!geo || !geo.features) {
        const html = '<div class="dugum-liste">' +
          Object.entries(iller).map(([slug, il]) => {
            const dcls = durumSinif(il.durum);
            return `<div class="dugum" data-tur="il" data-slug="${slug}">
              <div class="dugum-ad">${il.ad}</div>
              <div class="dugum-alt">${il.ilce_sayi ?? 0} ilçe</div>
              <span class="dugum-durum ${dcls}">${il.durum || "ISKELET"}</span>
            </div>`;
          }).join("") + "</div>";
        $("#harita-icerik").innerHTML = html;
        $$("#harita-icerik .dugum").forEach((el) => {
          el.addEventListener("click", () => {
            const slug = el.dataset.slug;
            state.secim.il = g.iller[slug].ad;
            state.secim.ilSlug = slug;
            state.secim.ilce = null;
            state.secim.mahalle = null;
            haritaAc(); kartCiz(); kirilim_guncelle();
          });
        });
        return;
      }

      // SVG polygon harita üret
      let svg = `<svg id="turkiye-svg" viewBox="0 0 ${SVG_W} ${SVG_H}" xmlns="http://www.w3.org/2000/svg" aria-label="Türkiye il haritası">`;
      // 81 il polygon
      for (const f of geo.features) {
        const gadi = f.properties.name;
        const norm = ilAdNorm(gadi);
        const il = iller[norm];
        const durum = il ? il.durum : "SIFIR";
        const dcls = durumSinif(durum);
        const isMulti = f.geometry.type === "MultiPolygon";
        const d = polygonYolu(f.geometry.coordinates, isMulti);
        const rk = (il && (il.basin_sayisi || 0) + (il.ilan_sayisi || 0)) || 0;
        svg += `<path class="il-yol ${dcls}" data-slug="${norm}" data-ad="${gadi}" d="${d}">
                  <title>${gadi} · ${durum} · ${rk.toLocaleString("tr")} kayıt</title>
                </path>`;
      }
      // Renk lejandı (SVG içinde sağ-üst)
      svg += `<g class="lejant" transform="translate(${SVG_W - 130}, 12)">
        <rect x="0" y="0" width="120" height="72" rx="4" fill="#151515" stroke="#333"/>
        <text x="8" y="14" fill="#ccc" font-size="10" font-family="sans-serif">Doluluk</text>
        <rect x="8" y="20" width="12" height="10" class="durum-tam"/>
        <text x="26" y="29" fill="#ccc" font-size="10" font-family="sans-serif">DOLU</text>
        <rect x="8" y="36" width="12" height="10" class="durum-pilot"/>
        <text x="26" y="45" fill="#ccc" font-size="10" font-family="sans-serif">KISMI</text>
        <rect x="8" y="52" width="12" height="10" class="durum-iskelet"/>
        <text x="26" y="61" fill="#ccc" font-size="10" font-family="sans-serif">SIFIR</text>
      </g>`;
      svg += "</svg>";
      $("#harita-icerik").innerHTML = svg;

      // İl polygon tıklama
      $$("#turkiye-svg .il-yol").forEach((yol) => {
        yol.addEventListener("click", () => {
          const slug = yol.dataset.slug;
          const il = g.iller[slug];
          if (!il) { bildir(`${slug} coğrafyada yok — sınır adı: ${yol.dataset.ad}`); return; }
          state.secim.il = il.ad;
          state.secim.ilSlug = slug;
          state.secim.ilce = null;
          state.secim.mahalle = null;
          haritaAc(); kartCiz(); kirilim_guncelle();
        });
      });
      return;
    }

    // İl seviyesi (ilçe-liste)
    if (s.il && !s.ilce) {
      const il = g.iller[s.ilSlug];
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
            const mhSay = ilce.mahalle_sayi ?? (Array.isArray(ilce.mahalleler) ? ilce.mahalleler.length : 0);
            return `<div class="dugum" data-tur="ilce" data-slug="${slug}">
              <div class="dugum-ad">${ilce.ad}</div>
              <div class="dugum-alt">${mhSay} mahalle${ilce.pilot ? " · pilot" : ""}</div>
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

    // İlçe seviyesi (mahalle-liste) — mahalleler ARRAY (list of {ad,durum,not})
    if (s.il && s.ilce) {
      const il = g.iller[s.ilSlug];
      const ilce = il.ilceler[s.ilceSlug];
      const mahList = Array.isArray(ilce.mahalleler) ? ilce.mahalleler : [];
      if (!mahList.length) {
        $("#harita-icerik").innerHTML =
          `<div class="veri-yok">${ilce.ad} — MAHALLE LİSTESİ BOŞ
            <div class="veri-yok-alt">Bu ilçe için mahalle-bazlı ingest henüz kurulmadı. Kartal pilot (20 mahalle).</div>
          </div>`;
        return;
      }
      const html =
        '<div class="dugum-liste">' +
        mahList
          .map((mah, idx) => {
            const dcls = durumSinif(mah.durum);
            return `<div class="dugum" data-tur="mahalle" data-slug="${idx}">
              <div class="dugum-ad">${mah.ad}</div>
              <div class="dugum-alt">${mah.not || ""}</div>
              <span class="dugum-durum ${dcls}">${mah.durum || "TASLAK"}</span>
            </div>`;
          })
          .join("") +
        "</div>";
      $("#harita-icerik").innerHTML = html;
      $$("#harita-icerik .dugum").forEach((el) => {
        el.addEventListener("click", () => {
          const idx = parseInt(el.dataset.slug, 10);
          const mah = mahList[idx];
          state.secim.mahalle = mah.ad;
          state.secim.mahalleSlug = idx;
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
    if (D.includes("TAM"))    return D.includes("LAUNCH") ? "durum-launch" : "durum-tam";
    if (D.includes("DOLU"))   return "durum-tam";
    if (D.includes("KISMI"))  return "durum-pilot";
    if (D.includes("PILOT")) return "durum-pilot";
    if (D.includes("TASLAK") || D.includes("İSKELET") || D.includes("ISKELET")) return "durum-taslak";
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

    // Türkiye seviye (özet) — cografya.json GERÇEK şema: toplam + pilot + iller (kökte)
    if (!s.il) {
      const toplam = g.toplam || {};
      const pilot = g.pilot || {};
      const ilSay = g.iller ? Object.keys(g.iller).length : 0;
      $("#kart-icerik").innerHTML = `
        <div class="kart-h1">TÜRKİYE · Portföy</div>
        <div class="kart-etiket">Kapsam</div>
        <div class="kart-rakam-satir">
          <div class="kart-rakam"><div class="kart-rakam-val">${toplam.il_sayi ?? ilSay}</div><div class="kart-rakam-lbl">Toplam İl</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${toplam.ilce_sayi ?? "—"}</div><div class="kart-rakam-lbl">Toplam İlçe</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${toplam.dolu_il ?? "—"}</div><div class="kart-rakam-lbl">Dolu İl</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${toplam.kismi_il ?? "—"}</div><div class="kart-rakam-lbl">Kısmi İl</div></div>
        </div>
        <div class="kart-metin">
          Bir il seç (soldaki liste).<br>
          <strong>Aktif pilot:</strong> ${pilot.il || "—"} / ${pilot.ilce || "—"} · <strong>${pilot.mahalle_sayi ?? "?"}</strong> mahalle.<br>
          <strong>Kural:</strong> ${pilot.ilce || "Kartal"} çalışmadan 81 ile açılmaz.
        </div>
        <div class="kart-kaynak">Kaynak: <code>veri/cografya.json</code> · Kesit: ${g.kesit_utc || "—"}</div>
      `;
      return;
    }

    // İl seviye
    if (s.il && !s.ilce) {
      const il = g.iller[s.ilSlug];
      const fmt = (n) => (typeof n === "number" ? n.toLocaleString("tr") : "—");
      $("#kart-icerik").innerHTML = `
        <div class="kart-h1">${il.ad}</div>
        <div class="kart-etiket">Durum · ${il.durum || "ISKELET"} · kod ${il.kod || "—"}</div>
        <div class="kart-rakam-satir">
          <div class="kart-rakam"><div class="kart-rakam-val">${il.ilce_sayi ?? 0}</div><div class="kart-rakam-lbl">İlçe</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${fmt(il.ilan_sayisi)}</div><div class="kart-rakam-lbl">İlan</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${fmt(il.basin_sayisi)}</div><div class="kart-rakam-lbl">Basın</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${fmt(il.ced_sayisi)}</div><div class="kart-rakam-lbl">ÇED</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${fmt(il.plan_sayisi)}</div><div class="kart-rakam-lbl">Plan</div></div>
        </div>
        <div class="kart-metin">Bir ilçe seç (soldaki liste).</div>
        <div class="kart-kaynak">Kaynak: <code>veri/cografya.json#iller.${s.ilSlug}</code> · Son tarama: ${il.son_tarama || "—"}</div>
      `;
      return;
    }

    // İlçe seviye
    if (s.ilce && !s.mahalle) {
      const il = g.iller[s.ilSlug];
      const ilce = il.ilceler[s.ilceSlug];
      const fmt = (n) => (typeof n === "number" ? n.toLocaleString("tr") : "—");
      const mhSay = ilce.mahalle_sayi ?? (Array.isArray(ilce.mahalleler) ? ilce.mahalleler.length : 0);
      // İlk render — rakamlar cografya.json'dan
      $("#kart-icerik").innerHTML = `
        <div class="kart-h1">${ilce.ad} · ${il.ad}</div>
        <div class="kart-etiket">Durum · ${ilce.durum || "ISKELET"} · kod ${ilce.kod || "—"}${ilce.pilot ? " · PİLOT" : ""}</div>
        <div class="kart-rakam-satir">
          <div class="kart-rakam"><div class="kart-rakam-val">${mhSay}</div><div class="kart-rakam-lbl">Mahalle</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${fmt(ilce.ilan_sayisi)}</div><div class="kart-rakam-lbl">İlan</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${fmt(ilce.basin_sayisi)}</div><div class="kart-rakam-lbl">Basın</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${fmt(ilce.ced_sayisi)}</div><div class="kart-rakam-lbl">ÇED</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${fmt(ilce.plan_sayisi)}</div><div class="kart-rakam-lbl">Plan</div></div>
        </div>
        <div id="a-ozet-yeri" class="kart-metin"><em>A özeti yükleniyor…</em></div>
        <div id="b-ozet-yeri" class="kart-metin"></div>
        <div class="kart-kaynak">Kaynak: <code>veri/cografya.json#iller.${s.ilSlug}.ilceler.${s.ilceSlug}</code> · Son tarama: ${ilce.son_tarama || "—"}</div>
      `;
      // A/B özet dosyalarını statik path'ten al (varsa)
      ozetYukle(s.il, s.ilce);
      return;
    }

    // Mahalle seviye
    if (s.mahalle) {
      const il = g.iller[s.ilSlug];
      const ilce = il.ilceler[s.ilceSlug];
      const mahList = Array.isArray(ilce.mahalleler) ? ilce.mahalleler : [];
      const mah = mahList[s.mahalleSlug] || { ad: s.mahalle, durum: "TASLAK", not: "" };
      $("#kart-icerik").innerHTML = `
        <div class="kart-h1">${mah.ad} · ${ilce.ad} / ${il.ad}</div>
        <div class="kart-etiket">Durum · ${mah.durum || "TASLAK"}</div>
        ${mah.not ? `<div class="kart-metin"><strong>Not:</strong> ${mah.not}</div>` : ""}
        <div class="kart-metin">Mahalle-bazlı ingest bu ilçe için henüz kurulmadı. İlçe A özetine geri dönmek için kırılımdan <em>${ilce.ad}</em>'a tıklayın.</div>
        <div class="kart-kaynak">Kaynak: <code>veri/cografya.json#iller.${s.ilSlug}.ilceler.${s.ilceSlug}.mahalleler[${s.mahalleSlug}]</code></div>
      `;
      return;
    }
  }

  // ─── A / B özet dosyası yükle (ilçe kartı için) ─────────
  async function ozetYukle(il, ilce) {
    const encIl = encodeURIComponent(il);
    const encIlce = encodeURIComponent(ilce);
    const aYer = $("#a-ozet-yeri");
    const bYer = $("#b-ozet-yeri");
    if (!aYer) return;
    // A
    try {
      const rA = await fetch(`/veri/ozet/${encIl}/${encIlce}_A.json`, { cache: "no-store" });
      if (!rA.ok) throw new Error("A ✗ · " + rA.status);
      const a = await rA.json();
      const r = a.rakamlar || {};
      const enY = (a.en_yogun_2_mahalle || []).map(x => `${x.mahalle} %${x.pay_yuzde}`).join(" · ");
      aYer.innerHTML = `
        <div class="kart-h2">A · Ana Özet</div>
        <div class="kart-metin">${a.metin || "—"}</div>
        <div class="kart-metin"><strong>Yeni 30g:</strong> ${(r.yeni_30g||0).toLocaleString("tr")} kayıt · <strong>Etiketli:</strong> ${r.toplam_mahalleli_etiket ?? "—"}</div>
        ${enY ? `<div class="kart-metin"><strong>En yoğun mahalle:</strong> ${enY}</div>` : ""}
        ${(a.eksikler || []).length ? `<div class="kart-metin"><strong>Eksikler:</strong><ul style="margin-left:18px;margin-top:4px">${a.eksikler.map(e => `<li>${e}</li>`).join("")}</ul></div>` : ""}
        <div class="kart-kaynak">Kaynak: <code>veri/ozet/${il}/${ilce}_A.json</code> · Kesit: ${a.kesit_utc || "—"}</div>
      `;
    } catch (e) {
      aYer.innerHTML = `<div class="veri-yok">A özeti yok<div class="veri-yok-alt">${e.message}</div></div>`;
    }
    // B
    try {
      const rB = await fetch(`/veri/ozet_B/${encIl}/${encIlce}_B.json`, { cache: "no-store" });
      if (!rB.ok) throw new Error("B ✗ · " + rB.status);
      const b = await rB.json();
      const gozlem = (b.onemli_bulgular || []).map(x => `<li>${x}</li>`).join("");
      bYer.innerHTML = `
        <div class="kart-h2">B · Derin Özet</div>
        ${(b.anlati || []).map(p => `<div class="kart-metin">${p}</div>`).join("")}
        ${gozlem ? `<div class="kart-metin"><strong>Önemli bulgular:</strong><ul style="margin-left:18px;margin-top:4px">${gozlem}</ul></div>` : ""}
        ${b.eksik_notu ? `<div class="kart-metin"><em>${b.eksik_notu}</em></div>` : ""}
        <div class="kart-b-tarih">B son yazım: ${b.son_yazim_utc || "—"}</div>
        <div class="kart-kaynak">Kaynak: <code>veri/ozet_B/${il}/${ilce}_B.json</code></div>
      `;
    } catch (e) {
      bYer.innerHTML = `<div class="veri-yok" style="margin-top:6px">B derin özet yok<div class="veri-yok-alt">${e.message}</div></div>`;
    }
  }

  // ─── CC şeridi + hedef ──────────────────────────────
  // DURUM.json'da cc_seridi/hedef anahtarları YOK. Karşılık: cografya + sistem + ozet_motoru + havuz özeti.
  function ccSeritCiz() {
    const d = state.durum;
    if (!d || veriYok(d)) {
      $("#cc-serit-icerik").innerHTML =
        '<div class="veri-yok">DURUM.json YOK</div>';
      $("#hedef-mesafe").textContent = "?";
      return;
    }
    // Hedef bandı = coğrafya kapsama
    const c = d.cografya || {};
    $("#hedef-mesafe").textContent =
      `${c.dolu_il ?? "?"}/${c.il_sayi ?? "?"} il · ${c.dolu_ilce ?? "?"}/${c.ilce_sayi ?? "?"} ilçe · pilot ${c.pilot_il || "—"}/${c.pilot_ilce || "—"} (${c.pilot_mahalle_sayi ?? "?"} mh)`;

    // Şerit: sistem sağlığı + havuz + özet motoru + üretici → satırlar
    const s = d.sistem || {};
    const h = d.havuz || {};
    const m = d.ozet_motoru || {};
    const satirlar = [
      { ad: "◆ CC-Hafıza (üretici)", alt: d.uretici || "—", saga: d.standing || "" },
      { ad: "◆ Sistem", alt: `disk %${s.mac_disk_kullanim_yuzde ?? "?"} · TT-HAFIZA ${s.tt_hafiza_mount || "?"}`, saga: `db ${s.db_sha_kisa || "?"}` },
      { ad: "◆ Coğrafya", alt: `${c.dolu_il}D · ${c.kismi_il}K · ${c.sifir_il}0`, saga: `il` },
      { ad: "◆ Coğrafya · ilçe", alt: `${c.dolu_ilce}D · ${c.kismi_ilce}K · ${c.sifir_ilce}0`, saga: `ilçe` },
      { ad: "◆ Havuz", alt: `ulusal ham ${(h.ulusal_ham_kayit||0).toLocaleString("tr")}`, saga: `kanonik ${(h.ulusal_kanonik_alt_sinir||0).toLocaleString("tr")}` },
      { ad: "◆ Özet motoru", alt: `A: ${m.a_uretilen_sayi ?? "?"} · B: ${m.b_yazilan_sayi ?? "?"}`, saga: m.b_tetikleyici ? "B-tetik: aktif" : "—" },
      { ad: "◆ Standing", alt: d.standing || "—", saga: `kesit ${(d.kesit_utc || "").slice(0,10)}` },
    ];
    $("#cc-serit-icerik").innerHTML = satirlar.map(x => `
      <div class="cc-satir">
        <div>
          <div class="cc-ad">${x.ad}</div>
          <div class="cc-sprint">${x.alt}</div>
        </div>
        <div class="cc-sess">${x.saga}</div>
      </div>`).join("");
  }

  // ─── Patron görev kartı ─────────────────────────────
  // Gerçek şema: d.patron_gorev.acik_borclar[] + son_sahibinden_beslemesi + gun_gecti + bekleyen_il_sayisi
  function patronCiz() {
    const d = state.durum;
    if (!d || veriYok(d) || !d.patron_gorev) {
      $("#patron-icerik").innerHTML =
        '<div class="veri-yok">GÖREV KARTI YOK<div class="veri-yok-alt">DURUM.json içinde patron_gorev anahtarı bulunamadı.</div></div>';
      return;
    }
    const g = d.patron_gorev;
    const acik = Array.isArray(g.acik_borclar) ? g.acik_borclar : [];
    const gorevler = Array.isArray(g.gorevler) ? g.gorevler : [];
    const gorevlerHtml = gorevler.map((x, i) => `
      <div class="gorev-satir">
        <span class="gorev-sira">${x.sira ?? i + 1}</span>
        <div>
          <div class="gorev-metin">${x.gorev || x.metin || ""}</div>
          <div class="gorev-etki">${x.etki || ""}</div>
        </div>
      </div>`).join("");
    const acikHtml = acik.map((x, i) => `
      <div class="gorev-satir">
        <span class="gorev-sira">${i + 1}</span>
        <div>
          <div class="gorev-metin">${x}</div>
          <div class="gorev-etki">açık borç</div>
        </div>
      </div>`).join("");
    const ust = `
      <div class="gorev-satir" style="border-bottom:1px solid #333">
        <span class="gorev-sira">·</span>
        <div>
          <div class="gorev-metin">Son sahibinden beslemesi: <strong>${g.son_sahibinden_beslemesi_utc || "—"}</strong> · <strong>${g.gun_gecti ?? "?"}g</strong> önce</div>
          <div class="gorev-etki">Bekleyen il: ${g.bekleyen_il_sayisi ?? "?"} · Disk: ${g.harici_disk_durumu || "—"}</div>
        </div>
      </div>`;
    $("#patron-icerik").innerHTML = ust + (gorevlerHtml || acikHtml || '<div class="veri-yok">Aktif görev/borç yok</div>');
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

  // ─── Hata görüntüle (3 durum ayrımı) ────────────────
  function hataGoster(hedefEl, e) {
    let baslik = "Hata";
    let alt = e.message || String(e);
    if (e.tur === "FETCH") baslik = "Ağ/sunucu hatası";
    else if (e.tur === "JSON") baslik = "JSON bozuk";
    else if (e.tur === "SEMA") {
      baslik = "Şema uyuşmazlığı";
      const mevcut = (e.mevcut && e.mevcut.length) ? e.mevcut.join(", ") : "—";
      alt = `Aranan yol: <code>${e.aranan}</code> · Mevcut kök anahtarlar: <code>${mevcut}</code>`;
    } else if (!e.tur) {
      // JS runtime (TypeError, ReferenceError…) — şema/veri kaynaklı olması muhtemel
      baslik = "Uygulama iç hatası";
    }
    hedefEl.innerHTML =
      `<div class="veri-yok">${baslik}<div class="veri-yok-alt">${alt}</div></div>`;
  }

  // ─── Başlat ─────────────────────────────────────────
  async function baslat() {
    // 1) Meta — sunucu ayakta mı?
    try { await metaCek(); }
    catch (e) { hataGoster($("#kart-icerik"), e); return; }

    // 2) Veri
    let c, d;
    try { [c, d] = await Promise.all([apiCek("cografya"), apiCek("durum")]); }
    catch (e) { hataGoster($("#kart-icerik"), e); return; }
    state.cografya = c;
    state.durum = d;

    // 2a-ex) M4 Örümcek + sekme bağla
    await orumcekCek();
    document.querySelectorAll('.sekme').forEach(b => {
      b.addEventListener('click', () => sekmeDegistir(b.dataset.sekme));
    });
    // 30 sn'de bir örümcek yenile (sadece aktif örümcek sekmesinde render)
    setInterval(async () => {
      if (state.sekme && state.sekme.startsWith('orumcek')) {
        if (await orumcekCek()) orumcekRender();
      }
    }, 30000);

    // 2b) MU-02 M1: il.geojson yükle (statik — sunucu.py otomatik serve eder)
    // Başarısızlıkta düğüm-liste fallback devreye girer (kritik değil)
    try {
      const gr = await fetch("/veri/geojson/il.geojson", { cache: "force-cache" });
      if (gr.ok) state.geojsonIl = await gr.json();
    } catch (e) {
      // sessiz — fallback: düğüm-liste
    }

    // 3) Şema koruyucu — cografya kök anahtarları
    if (!c.iller) {
      hataGoster($("#kart-icerik"),
        new SemaHatasi("cografya.json içinde 'iller' anahtarı yok", "iller", Object.keys(c)));
      return;
    }

    // 3b) URL hash deep-link: #/İl · #/İl/İlçe · #/İl/İlçe/mahalle_idx
    // Örn. #/İstanbul/Kartal → başlangıçta Kartal ilçe kartını yükler
    try {
      const m = (window.location.hash || "").match(/^#\/([^/]+)(?:\/([^/]+))?(?:\/(\d+))?/);
      if (m) {
        const ilSlug = decodeURIComponent(m[1]);
        const ilceSlug = m[2] ? decodeURIComponent(m[2]) : null;
        const mahIdx = m[3] ? parseInt(m[3], 10) : null;
        if (c.iller[ilSlug]) {
          state.secim.il = c.iller[ilSlug].ad;
          state.secim.ilSlug = ilSlug;
          if (ilceSlug && c.iller[ilSlug].ilceler[ilceSlug]) {
            state.secim.ilce = c.iller[ilSlug].ilceler[ilceSlug].ad;
            state.secim.ilceSlug = ilceSlug;
            if (mahIdx != null) {
              const list = c.iller[ilSlug].ilceler[ilceSlug].mahalleler;
              if (Array.isArray(list) && list[mahIdx]) {
                state.secim.mahalle = list[mahIdx].ad;
                state.secim.mahalleSlug = mahIdx;
              }
            }
          }
        }
      }
    } catch (e) { /* hash bozuk → sessiz */ }

    // 4) Render
    try {
      haritaAc();
      kartCiz();
      ccSeritCiz();
      patronCiz();
      kirilim_guncelle();
    } catch (e) {
      hataGoster($("#kart-icerik"), e);
    }
  }

  baslat();
})();
