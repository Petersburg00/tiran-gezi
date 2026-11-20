/* Lombardiya & Lugano Gezi Rehberi — uygulama */
(function () {
  "use strict";

  const PLACES = window.PLACES, PLANS = window.PLANS, CATS = window.CATS, CITIES = window.CITIES, IMG = window.IMAGES || {}, STORIES = window.STORIES || [];
  const byId = Object.fromEntries(PLACES.map(p => [p.id, p]));

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = n => n.toLocaleString("tr-TR", { maximumFractionDigits: 2 });

  // ── depolama (güvenli) ──
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* yok say */ } }
  };

  // ── mesafe ──
  function hav(a, b) {
    const R = 6371000, t = x => x * Math.PI / 180;
    const dLa = t(b.lat - a.lat), dLo = t(b.lng - a.lng);
    const h = Math.sin(dLa / 2) ** 2 + Math.cos(t(a.lat)) * Math.cos(t(b.lat)) * Math.sin(dLo / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function travel(m) {
    const road = m * 1.3;
    if (road < 2600) return { mode: "walk", min: Math.max(1, Math.round(road / 80)), txt: `${Math.max(1, Math.round(road / 80))} dk yürüme` };
    const min = Math.round(road / 1000 / (road > 15000 ? 65 : 28) * 60) + 3;
    return { mode: "car", min, txt: `araçla ≈${min < 60 ? min + " dk" : (Math.floor(min / 60) + " sa " + (min % 60 ? (min % 60) + " dk" : ""))}` };
  }
  const cityName = p => (CITIES[p.city] || {}).name || "";
  const kmTxt = m => m < 1000 ? `${Math.round(m / 10) * 10} m` : `${(m / 1000).toFixed(m < 10000 ? 1 : 0).replace(".", ",")} km`;

  // ── Google Haritalar ──
  const gq = p => p.gq || `${p.name}, ${cityName(p)}`;
  const gSearch = p => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gq(p))}`;
  const gDir = p => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(gq(p))}`;
  // Bir günün duraklarını sırayla (art arda tekrarları atarak) döndürür
  function dayStops(d) {
    const out = [];
    d.steps.forEach(s => { const p = byId[s[1]]; if (p && (!out.length || out[out.length - 1].p.id !== p.id)) out.push({ p, s }); });
    return out;
  }
  // Google Maps yol tarifi linkleri: bir linkte en fazla 10 nokta (başlangıç + 8 ara + varış). Fazlası parçalara bölünür.
  function routeLinks(d, mode) {
    const pts = dayStops(d).map(x => x.p), links = [];
    if (pts.length < 2) return pts.length ? [{ url: gSearch(pts[0]), from: 1, to: 1 }] : [];
    for (let i = 0; i < pts.length - 1; i += 9) {
      const part = pts.slice(i, i + 10);
      const mid = part.slice(1, -1).map(p => encodeURIComponent(gq(p))).join("%7C");
      links.push({
        url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(gq(part[0]))}&destination=${encodeURIComponent(gq(part[part.length - 1]))}${mid ? "&waypoints=" + mid : ""}&travelmode=${mode || d.mode || "driving"}`,
        from: i + 1, to: i + part.length
      });
    }
    return links;
  }
  // KML: Google Haritalarım (My Maps) içe aktarma için. Her gün ayrı klasör (katman).
  const xml = s => String(s ?? "").replace(/[<>&'"]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]));
  const kmlColor = hex => { const h = hex.replace("#", ""); return "ff" + h.slice(4, 6) + h.slice(2, 4) + h.slice(0, 2); };
  function kmlDoc(name, folders) {
    const styles = folders.map((f, i) => `<Style id="s${i}"><IconStyle><color>${kmlColor(f.color)}</color><scale>1.1</scale><Icon><href>https://maps.google.com/mapfiles/kml/paddle/wht-blank.png</href></Icon></IconStyle></Style>`).join("");
    const body = folders.map((f, i) => `<Folder><name>${xml(f.name)}</name>${f.items.map(it => `<Placemark><name>${xml(it.name)}</name><description>${xml(it.desc)}</description><styleUrl>#s${i}</styleUrl><Point><coordinates>${it.p.lng},${it.p.lat},0</coordinates></Point></Placemark>`).join("")}</Folder>`).join("");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>${xml(name)}</name>${styles}${body}</Document></kml>`;
  }
  function planFolders(pl, onlyDay) {
    return pl.days.map((d, di) => ({ d, di })).filter(x => onlyDay == null || x.di === onlyDay).map(({ d, di }) => ({
      name: `${di + 1}. ${d.d} · ${d.t}`, color: DAY_COLORS[di % DAY_COLORS.length],
      items: dayStops(d).map((x, i) => ({ p: x.p, name: `${i + 1}. ${x.s[0]} ${x.p.name}`, desc: `${x.s[2]}\n${x.p.price.txt} · ${x.p.hours}\n${gSearch(x.p)}` }))
    }));
  }
  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }
  const slug = s => s.toLowerCase().replace(/[çÇ]/g, "c").replace(/[ğĞ]/g, "g").replace(/[ıİ]/g, "i").replace(/[öÖ]/g, "o").replace(/[şŞ]/g, "s").replace(/[üÜ]/g, "u").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  function csvFor(pl, onlyDay) {
    const q = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = [["Gün", "Sıra", "Saat", "Yer", "Not", "Ücret", "Enlem", "Boylam", "Google Haritalar"]];
    pl.days.forEach((d, di) => { if (onlyDay != null && di !== onlyDay) return; dayStops(d).forEach((x, i) => rows.push([`${di + 1}. ${d.d}`, i + 1, x.s[0], x.p.name, x.s[2], x.p.price.txt, x.p.lat, x.p.lng, gSearch(x.p)])); });
    return "﻿" + rows.map(r => r.map(q).join(",")).join("\n");
  }

  // ── ikonlar ──
  const I = {
    grid: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    dome: '<path d="M5 20V12a7 7 0 0 1 14 0v8M3 20h18M12 5V2M9 20v-4a3 3 0 0 1 6 0v4"/>',
    museum: '<path d="M3 9 12 4l9 5M4 20h16M6 10v8M10 10v8M14 10v8M18 10v8"/>',
    mountain: '<path d="m2 20 7-12 4 6 3-4 6 10z"/>',
    lake: '<path d="M3 14c2 0 2 1.5 4.5 1.5S10 14 12 14s2.5 1.5 4.5 1.5S19 14 21 14M3 18.5c2 0 2 1.5 4.5 1.5S10 18.5 12 18.5s2.5 1.5 4.5 1.5 2.5-1.5 4.5-1.5M5 11l4-6 3 4 2-2 4 4"/>',
    bag: '<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
    frame: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="m6 17 4-5 3 3 2-2 3 4M15.5 9.5h.01"/>',
    sun: '<circle cx="12" cy="14" r="4"/><path d="M12 4v3M4.9 7.9l2.1 2.1M19.1 7.9 17 10M2 18h20M3 14h2M19 14h2"/>',
    food: '<path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10M17 3c-2 0-3 3-3 6s1 4 3 4v8"/>',
    ticket: '<path d="M3 8a2 2 0 0 0 0 4v0 4h18v-4a2 2 0 0 1 0-4V4H3zM14 4v16" transform="translate(0 2) scale(1 .85)"/>',
    bus: '<path d="M5 17V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v11zM5 11h14M7 20v-3M17 20v-3"/><circle cx="8.5" cy="14" r=".6"/><circle cx="15.5" cy="14" r=".6"/>',
    car: '<path d="M4 16v-4l2-5h12l2 5v4zM4 16v2M20 16v2M4 12h16"/><circle cx="7.5" cy="14" r=".8"/><circle cx="16.5" cy="14" r=".8"/>',
    glass: '<path d="M6 3h12l-6 8zM12 11v9M8 21h8M8.2 6h7.6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    hourglass: '<path d="M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9"/>',
    money: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
    walk: '<circle cx="13" cy="4" r="1.6"/><path d="m9 21 2-6 3 3v3M8 12l2-4 4 1 2 4M10 8l1 7"/>',
    house: '<path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z"/>',
    plane: '<path d="M2 16l20-6-2-2-7 2-5-6H6l3 7-5 1-2-2H1l1 6z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M19 19v2H6"/>',
    route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8a3.5 3.5 0 0 0 0-7H8a3.5 3.5 0 0 1 0-7h8"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 19h16"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>'
  };
  const svg = (k, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra}>${I[k]}</svg>`;
  const starSolid = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="m12 2 3 6.3 6.9 1-5 4.8 1.2 6.9L12 17.8 5.9 21l1.2-6.9-5-4.8 6.9-1z"/></svg>';
  const gmLogo = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#EA4335" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>';

  const CAT_COLOR = { bergamo: "#B3541E", avm: "#C2185B", milano: "#4B4B55", como: "#0E7C86", lugano: "#2F7D4F", museum: "#7B4FB8", view: "#2F7D4F", food: "#D9364F", night: "#3B3B98", top: "#FF385C", free: "#00A699" };
  const mainCat = p => p.city || p.cats[0];
  const catIcon = c => (CATS.find(x => x.id === c) || {}).icon || "pin";

  // ── görseller: Wikipedia küçük resimleri (çalışma anında bulunur, önbelleğe alınır) ──
  const IMG_KEY = "ig_img_v2";
  const imgCache = store.get(IMG_KEY, {});
  Object.entries(imgCache).forEach(([k, v]) => { if (v && !IMG[k]) IMG[k] = v; });
  function photo(p, cls = "") {
    const src = IMG[p.id];
    const c = CAT_COLOR[mainCat(p)] || "#888";
    const fb = `<div class="ph-fallback ${cls}" data-pid="${p.id}" data-cls="${cls}" style="background:linear-gradient(135deg,${c},${c}bb)">${svg(catIcon(mainCat(p)))}</div>`;
    if (src) return `<img class="${cls}" src="${esc(src)}" alt="${esc(p.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML=this.dataset.fb" data-fb="${esc(fb)}">`;
    return fb;
  }
  function refreshPhotos() {
    $$(".ph-fallback[data-pid]").forEach(el => { const p = byId[el.dataset.pid]; if (p && IMG[p.id]) el.outerHTML = photo(p, el.dataset.cls || ""); });
  }
  async function wikiThumbs(host, titles) {
    const url = `https://${host}/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=960&titles=${titles.map(encodeURIComponent).join("|")}`;
    const r = await fetch(url); const j = await r.json(); const q = j.query || {};
    const map = {}; titles.forEach(t => { map[t] = t; });
    (q.normalized || []).forEach(n => Object.keys(map).forEach(k => { if (map[k] === n.from) map[k] = n.to; }));
    (q.redirects || []).forEach(n => Object.keys(map).forEach(k => { if (map[k] === n.from) map[k] = n.to; }));
    const thumb = {}; Object.values(q.pages || {}).forEach(pg => { if (pg.thumbnail) thumb[pg.title] = pg.thumbnail.source; });
    const out = {}; titles.forEach(t => { out[t] = thumb[map[t]] || ""; }); return out;
  }
  async function wikiSearchThumb(host, query) {
    const url = `https://${host}/w/api.php?action=query&format=json&origin=*&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=960`;
    const r = await fetch(url); const j = await r.json();
    const pg = Object.values((j.query || {}).pages || {})[0]; return (pg && pg.thumbnail && pg.thumbnail.source) || "";
  }
  async function loadImages() {
    const need = PLACES.filter(p => !IMG[p.id] && !(p.id in imgCache));
    if (!need.length) return;
    try {
      const wikiP = need.filter(p => p.wiki);
      for (let i = 0; i < wikiP.length; i += 20) {
        const chunk = wikiP.slice(i, i + 20);
        const res = await wikiThumbs("en.wikipedia.org", chunk.map(p => p.wiki));
        chunk.forEach(p => { if (res[p.wiki]) { IMG[p.id] = res[p.wiki]; imgCache[p.id] = res[p.wiki]; } });
      }
      // Bulunamayanlar için İtalyanca Wikipedia'da arama (sadece yerler, restoranlar hariç)
      for (const p of need.filter(p => p.wiki && !IMG[p.id])) {
        const u = await wikiSearchThumb("it.wikipedia.org", p.gq || p.name).catch(() => "");
        imgCache[p.id] = u; if (u) IMG[p.id] = u;
      }
      need.filter(p => !p.wiki).forEach(p => { imgCache[p.id] = ""; });
      store.set(IMG_KEY, imgCache);
    } catch (e) { /* çevrimdışı ya da engelli: yedek renkler kalır */ }
    refreshPhotos();
  }

  function pillLabel(p) {
    const chf = (p.price.txt || "").match(/CHF\s?[\d.,]+/);
    if (p.price.eur > 0) return chf ? chf[0] : `${fmt(p.price.eur)} €`;
    if (p.price.eur === 0) return p.cats.includes("avm") ? "AVM" : "Ücretsiz";
    return p.cats.includes("food") ? "Yemek" : (p.cats.includes("night") ? "Akşam" : "Bilgi");
  }
  const priceShort = p => p.price.eur > 0 ? pillLabel(p) : "";

  // ── durum ──
  const QS = new URLSearchParams(location.search);
  let curCat = CATS.some(c => c.id === QS.get("kat")) ? QS.get("kat") : "all", curSort = "score", hotId = null;

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // ── görünümler ──
  let planMapReady = false;
  function show(view) {
    $$(".view").forEach(v => v.classList.toggle("active", v.id === "view-" + view));
    $$(".tabs button").forEach(b => b.classList.toggle("active", b.dataset.view === view));
    window.scrollTo({ top: 0 });
    if (view === "explore") setTimeout(() => map.invalidateSize(), 50);
    if (view === "plans") { if (!planMapReady) initPlanMap(); setTimeout(() => { planMap.invalidateSize(); drawPlan(); }, 60); }
    if (view === "read") renderRead();
    store.set("ig_view", view);
  }
  $$("[data-view]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); show(b.dataset.view); }));

  // ── kategori şeridi ──
  $("#catbar").innerHTML = CATS.map(c => `<button class="cat${c.id === curCat ? " active" : ""}" data-cat="${c.id}" role="tab">${svg(c.icon)}<span>${esc(c.label)}</span></button>`).join("");
  $("#catbar").addEventListener("click", e => {
    const b = e.target.closest(".cat"); if (!b) return;
    curCat = b.dataset.cat;
    $$(".cat").forEach(x => x.classList.toggle("active", x === b));
    renderList(true);
  });
  $("#sort").addEventListener("change", e => { curSort = e.target.value; renderList(false); });

  const CITY_ORDER = ["bergamo", "avm", "milano", "como", "lugano"];
  function filtered() {
    const arr = PLACES.filter(p => {
      if (curCat === "all") return true;
      if (curCat === "free") return p.price.eur === 0;
      return p.cats.includes(curCat);
    });
    const sorters = {
      score: (a, b) => b.score - a.score || CITY_ORDER.indexOf(a.city) - CITY_ORDER.indexOf(b.city),
      city: (a, b) => CITY_ORDER.indexOf(a.city) - CITY_ORDER.indexOf(b.city) || b.score - a.score,
      price: (a, b) => (a.price.eur ?? 9999) - (b.price.eur ?? 9999) || b.score - a.score
    };
    return arr.sort(sorters[curSort]);
  }

  function cardHTML(p) {
    const badge = p.status ? `<span class="pill-badge warn">Dikkat</span>` : (p.score >= 5 ? `<span class="pill-badge">Kaçırmayın</span>` : "");
    const priceLine = p.price.eur > 0 ? `<b>${esc(pillLabel(p))}</b> kişi başı${p.price.note ? ` · <span class="muted">${esc(p.price.note)}</span>` : ""}` : `<b>${esc(p.price.txt)}</b>`;
    const sc = p.score ? `<span class="rate">${starSolid}${p.score}.0</span>` : "";
    return `<div class="card" data-id="${p.id}" tabindex="0">
      <div class="ph">${photo(p)}${badge}
        <a class="gm-btn" href="${gSearch(p)}" target="_blank" rel="noopener" data-gm aria-label="Google Haritalar'da aç ve kaydet" title="Google Haritalar'da aç / kaydet">${gmLogo}</a>
      </div>
      <div class="meta">
        <div class="t1"><span class="nm">${esc(p.name)}</span>${sc}</div>
        <div class="t2">${esc(p.local)}</div>
        <div class="t3">${esc(cityName(p))} · ${esc(p.dur)}</div>
        <div class="t4">${priceLine}</div>
      </div>
    </div>`;
  }

  function renderList(refit) {
    const arr = filtered();
    const cat = CATS.find(c => c.id === curCat);
    $("#listTitle").textContent = curCat === "all" ? "Gezilecek yerler" : cat.label;
    $("#listSub").innerHTML = `${arr.length} yer · ücretler kişi başı · <button class="lnk" id="exportAll">${svg("download", 'width="14" height="14"')} Bu listeyi Google Haritalar'a aktar</button>`;
    $("#grid").innerHTML = arr.length ? arr.map(cardHTML).join("") : `<p class="empty">Bu kategoride yer yok.</p>`;
    drawMarkers(arr, refit);
  }

  // ── kart etkileşimleri ──
  $("#grid").addEventListener("click", e => {
    if (e.target.closest("[data-gm]")) { e.stopPropagation(); return; }
    const c = e.target.closest(".card"); if (c) openDetail(c.dataset.id);
  });
  $("#grid").addEventListener("keydown", e => { if (e.key === "Enter") { const c = e.target.closest(".card"); if (c) openDetail(c.dataset.id); } });
  $("#grid").addEventListener("mouseover", e => { const c = e.target.closest(".card"); setHot(c ? c.dataset.id : null); });
  $("#grid").addEventListener("mouseleave", () => setHot(null));
  $("#listSub").addEventListener("click", e => { if (e.target.closest("#exportAll")) openExportList(); });

  // ── harita (keşfet) ──
  const OFM_ATTR = '<a href="https://openfreemap.org" target="_blank">OpenFreeMap</a> &copy; <a href="https://www.openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>';
  function addBase(m) {
    let ok = false;
    try {
      const c = document.createElement("canvas");
      const webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
      if (webgl && L.maplibreGL && window.maplibregl) {
        L.maplibreGL({ style: "https://tiles.openfreemap.org/styles/liberty", attribution: OFM_ATTR }).addTo(m);
        ok = true;
      }
    } catch (e) { ok = false; }
    if (!ok) {
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", { attribution: "Tiles &copy; Esri", maxZoom: 16 }).addTo(m);
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16 }).addTo(m);
    }
  }
  const allBounds = () => L.latLngBounds(PLACES.map(p => [p.lat, p.lng]));
  const map = L.map("map", { zoomControl: true, minZoom: 6, maxZoom: 18 }).setView([45.75, 9.3], 9);
  addBase(map);
  map.zoomControl.setPosition("topright");
  const zoomClass = () => map.getContainer().classList.toggle("zfar", map.getZoom() < 14);
  map.on("zoomend", zoomClass); zoomClass();

  // şehir etiketleri
  Object.entries(CITIES).forEach(([id, c]) => {
    if (id === "avm") return;
    L.marker([c.lat, c.lng], { icon: L.divIcon({ className: "pmi", iconSize: [0, 0], html: `<div class="city-m">${esc(c.name)}</div>` }), interactive: false, zIndexOffset: -100 }).addTo(map);
  });

  const markers = {};
  const markerLayer = L.layerGroup().addTo(map);
  function drawMarkers(arr, refit) {
    markerLayer.clearLayers();
    Object.keys(markers).forEach(k => delete markers[k]);
    arr.forEach(p => {
      const dotty = !(p.price.eur > 0) && p.score < 5;
      const cls = ["pm", p.price.eur === 0 ? "free" : "", dotty ? "dotty" : "", p.cats.includes("food") ? "food" : "", p.cats.includes("avm") ? "prac" : ""].join(" ");
      const m = L.marker([p.lat, p.lng], { icon: L.divIcon({ className: "pmi", iconSize: [0, 0], html: `<div class="${cls}">${esc(pillLabel(p))}</div>` }), riseOnHover: true });
      m.bindPopup(`<div class="mini" data-open="${p.id}">${photo(p)}<div class="mb"><b>${esc(p.name)}</b><span class="muted">${esc(p.short)}</span><a class="mini-gm" href="${gSearch(p)}" target="_blank" rel="noopener">${gmLogo} Google Haritalar'da aç</a></div></div>`, { maxWidth: 260, minWidth: 260, autoPanPadding: [40, 40] });
      m.on("mouseover", () => { const c = $(`.card[data-id="${p.id}"]`); if (c) c.classList.add("hl"); });
      m.on("mouseout", () => { const c = $(`.card[data-id="${p.id}"]`); if (c) c.classList.remove("hl"); });
      m.addTo(markerLayer); markers[p.id] = m;
    });
    if (refit && arr.length) map.fitBounds(L.latLngBounds(arr.map(p => [p.lat, p.lng])), { padding: [50, 50], maxZoom: 15 });
  }
  map.on("popupopen", e => {
    const el = e.popup.getElement().querySelector("[data-open]");
    if (el) el.addEventListener("click", ev => { if (ev.target.closest("a")) return; openDetail(el.dataset.open); });
  });
  function setHot(id) {
    if (hotId === id) return;
    if (hotId && markers[hotId]) { markers[hotId].getElement()?.querySelector(".pm")?.classList.remove("hot"); markers[hotId].setZIndexOffset(0); }
    hotId = id;
    if (id && markers[id]) { markers[id].getElement()?.querySelector(".pm")?.classList.add("hot"); markers[id].setZIndexOffset(1000); }
  }

  // mobil harita düğmesi
  $("#mapToggle").addEventListener("click", () => {
    const pane = $("#mapPane"); const on = !pane.classList.contains("show");
    pane.classList.toggle("show", on);
    $("#mapToggle span").textContent = on ? "Listeyi göster" : "Haritayı göster";
    if (on) setTimeout(() => map.invalidateSize(), 30);
  });

  // ── modal ──
  function openModal(html) {
    $("#modalBody").innerHTML = html;
    const md = $("#modal"); md.classList.add("open"); md.setAttribute("aria-hidden", "false");
    $(".modal-card").scrollTop = 0;
    document.body.style.overflow = "hidden";
  }
  function closeDetail() { const md = $("#modal"); md.classList.remove("open"); md.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }

  // ── detay ──
  function storiesWith(id) { return STORIES.filter(s => s.places.includes(id)); }
  function plansWith(id) { return PLANS.filter(pl => pl.days.some(d => d.steps.some(s => s[1] === id))); }
  function openDetail(id) {
    const p = byId[id]; if (!p) return;
    const pls = plansWith(id);
    openModal(`
      ${photo(p, "hero")}
      <div class="mb-in">
        <h2 id="mTitle">${esc(p.name)}</h2>
        <div class="sub">${esc(p.local)} · ${esc(cityName(p))}</div>
        <div class="facts">
          ${p.score ? `<span class="fact red">★ ${p.score}/5 öneri</span>` : ""}
          <span class="fact">${esc(p.price.txt)}</span>
          <span class="fact">${esc(p.dur)}</span>
          <span class="fact">${esc(cityName(p))}</span>
        </div>
        ${p.status ? `<div class="warnbox">⚠️ <span>${esc(p.status)}</span></div>` : ""}
        <div class="actions top">
          <a class="btn primary" href="${gSearch(p)}" target="_blank" rel="noopener">${gmLogo} Google Haritalar'da aç / kaydet</a>
          <a class="btn" href="${gDir(p)}" target="_blank" rel="noopener">${svg("route", 'width="18" height="18"')} Yol tarifi</a>
        </div>
        <div class="hr"></div>
        <div class="infogrid">
          <div class="ig">${svg("money")}<div><b>Giriş ücreti</b><span>${esc(p.price.txt)}${p.price.note ? " · " + esc(p.price.note) : ""}</span></div></div>
          <div class="ig">${svg("clock")}<div><b>Saatler</b><span>${esc(p.hours)}</span></div></div>
          <div class="ig">${svg("hourglass")}<div><b>Ayırmanız gereken süre</b><span>${esc(p.dur)}</span></div></div>
          <div class="ig">${svg("pin")}<div><b>Bölge</b><span>${esc(cityName(p))} · ${esc(p.local)}</span></div></div>
        </div>
        <div class="hr"></div>
        <div class="prose">
          <h3>Tarihçe</h3><p>${esc(p.history)}</p>
          <h3>Neden önemli?</h3><p>${esc(p.why)}</p>
          <h3>İpuçları</h3><p>${esc(p.tips)}</p>
        </div>
        ${storiesWith(p.id).length ? `<h3>Bu yerin hikâyesini okuyun</h3><div class="storylinks">${storiesWith(p.id).map(st => `<button class="slink" data-story="${st.id}">${svg("book", 'width="16" height="16"')}<span><b>${esc(st.title)}</b><small>${esc(st.era)} · ${st.read} dk okuma</small></span></button>`).join("")}</div>` : ""}
        ${pls.length ? `<h3>Bu yer şu planlarda</h3><div class="inplans">${pls.map(pl => `<span class="tagp" style="background:${pl.color}">${esc(pl.name)}</span>`).join("")}</div>` : ""}
        <div class="actions">
          <button class="btn ghost" data-mmap="${p.id}">Sitedeki haritada göster</button>
        </div>
      </div>`);
  }
  $("#modal").addEventListener("click", e => {
    if (e.target.closest("[data-close]")) return closeDetail();
    const so = e.target.closest("[data-story]"); if (so) return openStory(so.dataset.story);
    const pl = e.target.closest("[data-place]"); if (pl) return openDetail(pl.dataset.place);
    const sv = e.target.closest("[data-saved]");
    if (sv) { const id = sv.dataset.saved; saved[id] = true; store.set("ig_saved", saved); setTimeout(() => { sv.closest(".sv-row")?.classList.add("done"); updateSavedCount(); }, 400); return; }
    const tg = e.target.closest("[data-untick]");
    if (tg) { delete saved[tg.dataset.untick]; store.set("ig_saved", saved); tg.closest(".sv-row")?.classList.remove("done"); updateSavedCount(); return; }
    const ex = e.target.closest("[data-export]");
    if (ex) return doExport(ex.dataset.export, ex.dataset.scope);
    const mm = e.target.closest("[data-mmap]");
    if (mm) {
      const p = byId[mm.dataset.mmap]; closeDetail(); show("explore");
      if (!markers[p.id]) { curCat = "all"; $$(".cat").forEach(x => x.classList.toggle("active", x.dataset.cat === "all")); renderList(false); }
      if (window.innerWidth <= 950) { $("#mapPane").classList.add("show"); $("#mapToggle span").textContent = "Listeyi göster"; }
      setTimeout(() => { map.invalidateSize(); map.setView([p.lat, p.lng], 16); markers[p.id] && markers[p.id].openPopup(); }, 80);
    }
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDetail(); });

  // ── Google Haritalar'a aktarma ──
  let saved = store.get("ig_saved", {});
  const GUIDE = `
    <details class="guide"><summary>Google Haritalarım'a (My Maps) nasıl aktarılır?</summary>
      <ol>
        <li>Yukarıdan <b>KML dosyasını indirin</b>. Telefonda indirilenler klasörüne ya da Dosyalar'a kaydedilir.</li>
        <li>Tarayıcıda <a href="https://www.google.com/maps/d/" target="_blank" rel="noopener">google.com/maps/d</a> adresini açın (Google Haritalarım). Telefonda sayfa açılmazsa tarayıcı menüsünden <b>Masaüstü sitesi</b>'ni seçin.</li>
        <li><b>+ Yeni harita oluştur</b> → sol paneldeki <b>İçe aktar</b> → indirdiğiniz dosyayı seçin.</li>
        <li>Her gün ayrı renkte ve sırayla numaralı gelir. Haritaya bir ad verin (ör. "İtalya Gezisi").</li>
        <li>Google Haritalar uygulamasında <b>Kaydedilenler → Haritalar</b> sekmesinde bu harita görünür; gezerken açık tutabilirsiniz.</li>
      </ol>
      <p class="small muted">CSV de My Maps'e aynı şekilde aktarılır: konum için "Enlem" ve "Boylam", başlık için "Yer" sütununu seçin. Excel/Google E-Tablolar'da da açılır.</p>
    </details>`;
  function updateSavedCount() {
    $$("[data-savecount]").forEach(el => { const ids = el.dataset.savecount.split(","); el.textContent = `${ids.filter(i => saved[i]).length}/${ids.length} kaydedildi`; });
  }
  function saveListHTML(groups, title) {
    const allIds = [...new Set(groups.flatMap(g => g.items.map(p => p.id)))];
    return `
      <h3>${svg("bookmark", 'width="18" height="18"')} Google Haritalar listesine kaydet</h3>
      <p class="small muted">Google, listelere dışarıdan toplu ekleme izni vermiyor; ama her yer tek dokunuş: <b>Aç</b>'a basın → Google Haritalar'da yer açılır → <b>Kaydet</b> → ilk seferde <b>Yeni liste</b> ("${esc(title)}") → sonraki yerlerde aynı listeyi seçin. Hangilerini kaydettiğinizi bu sayfa hatırlar. <span class="pill-count" data-savecount="${allIds.join(",")}"></span></p>
      ${groups.map(g => `<div class="sv-group"><b class="sv-h" style="color:${g.color || "inherit"}">${esc(g.name)}</b>
        ${g.items.map((p, i) => `<div class="sv-row${saved[p.id] ? " done" : ""}"><span class="sv-no" style="background:${g.color || "#222"}">${i + 1}</span><span class="sv-nm">${esc(p.name)}<small>${esc(p.local)}</small></span>
          <a class="btn sm" href="${gSearch(p)}" target="_blank" rel="noopener" data-saved="${p.id}">${gmLogo} Aç</a><button class="sv-tick" data-untick="${p.id}" title="İşareti kaldır">✓</button></div>`).join("")}</div>`).join("")}`;
  }
  let exportCtx = null;
  function openExportPlan(dayIndex) {
    const pl = PLANS.find(p => p.id === curPlan);
    exportCtx = { type: "plan", pl, day: dayIndex };
    const days = pl.days.map((d, di) => ({ d, di })).filter(x => dayIndex == null || x.di === dayIndex);
    const scope = dayIndex == null ? "plan" : String(dayIndex);
    openModal(`<div class="mb-in">
      <div class="eyebrow">Google Haritalar'a aktar</div>
      <h2 id="mTitle">${esc(pl.name)}${dayIndex != null ? ` · ${esc(pl.days[dayIndex].d)}` : ""}</h2>
      <p class="muted">Üç yol var: rotayı doğrudan yol tarifi olarak açmak, Google Haritalarım'a tek dosyayla bütün planı aktarmak ya da yerleri kendi listenize kaydetmek.</p>
      <h3>${svg("route", 'width="18" height="18"')} 1. Rotayı Google Haritalar'da aç</h3>
      ${days.map(({ d, di }) => `<div class="rt-row"><span class="dn" style="background:${DAY_COLORS[di]}">${di + 1}</span><div><b>${esc(d.d)}</b><small>${esc(d.t)}</small></div><div class="rt-btns">${routeLinks(d).map((l, k, a) => `<a class="btn sm" href="${l.url}" target="_blank" rel="noopener">${gmLogo} ${a.length > 1 ? `Bölüm ${k + 1} (${l.from}–${l.to})` : "Rotayı aç"}</a>`).join("")}</div></div>`).join("")}
      <p class="small muted">Google bir linkte en fazla 10 durağa izin veriyor; uzun günler bölümlere ayrıldı. Uygulamada açılınca "Başlat" ile navigasyona geçebilirsiniz.</p>
      <h3>${svg("download", 'width="18" height="18"')} 2. Bütün planı Google Haritalarım'a aktar</h3>
      <div class="row gap wrap">
        <button class="btn primary" data-export="kml" data-scope="${scope}">${svg("download", 'width="18" height="18"')} KML indir (My Maps)</button>
        <button class="btn" data-export="csv" data-scope="${scope}">CSV indir</button>
      </div>
      ${GUIDE}
      <div class="hr"></div>
      ${saveListHTML(days.map(({ d, di }) => ({ name: `${di + 1}. ${d.d}`, color: DAY_COLORS[di], items: dayStops(d).map(x => x.p) })), "İtalya Gezisi")}
    </div>`);
    updateSavedCount();
  }
  function openExportList() {
    const arr = filtered();
    exportCtx = { type: "list", arr };
    const groups = CITY_ORDER.map(c => ({ name: CITIES[c].name, color: CAT_COLOR[c], items: arr.filter(p => p.city === c) })).filter(g => g.items.length);
    openModal(`<div class="mb-in">
      <div class="eyebrow">Google Haritalar'a aktar</div>
      <h2 id="mTitle">${esc(curCat === "all" ? "Tüm yerler" : CATS.find(c => c.id === curCat).label)} (${arr.length})</h2>
      <p class="muted">Bütün yerleri şehir şehir renkli katmanlarla Google Haritalarım'a aktarın ya da tek tek kendi listenize kaydedin.</p>
      <div class="row gap wrap">
        <button class="btn primary" data-export="kml" data-scope="list">${svg("download", 'width="18" height="18"')} KML indir (My Maps)</button>
        <button class="btn" data-export="csv" data-scope="list">CSV indir</button>
      </div>
      ${GUIDE}
      <div class="hr"></div>
      ${saveListHTML(groups, "İtalya Gezisi")}
    </div>`);
    updateSavedCount();
  }
  function doExport(kind, scope) {
    if (!exportCtx) return;
    if (exportCtx.type === "list") {
      const groups = CITY_ORDER.map(c => ({ name: CITIES[c].name, color: CAT_COLOR[c], items: exportCtx.arr.filter(p => p.city === c).map(p => ({ p, name: p.name, desc: `${p.short}\n${p.price.txt} · ${p.hours}\n${gSearch(p)}` })) })).filter(g => g.items.length);
      if (kind === "kml") download("italya-gezi-yerler.kml", kmlDoc("İtalya Gezisi · Yerler", groups), "application/vnd.google-earth.kml+xml");
      else {
        const q = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
        const rows = [["Şehir", "Yer", "Açıklama", "Ücret", "Saatler", "Enlem", "Boylam", "Google Haritalar"]].concat(exportCtx.arr.map(p => [cityName(p), p.name, p.short, p.price.txt, p.hours, p.lat, p.lng, gSearch(p)]));
        download("italya-gezi-yerler.csv", "﻿" + rows.map(r => r.map(q).join(",")).join("\n"), "text/csv;charset=utf-8");
      }
    } else {
      const pl = exportCtx.pl, day = scope === "plan" ? null : Number(scope);
      const base = `italya-gezi-${pl.id}${day != null ? "-gun" + (day + 1) : ""}`;
      if (kind === "kml") download(base + ".kml", kmlDoc(`İtalya Gezisi · ${pl.name}${day != null ? " · " + pl.days[day].d : ""}`, planFolders(pl, day)), "application/vnd.google-earth.kml+xml");
      else download(base + ".csv", csvFor(pl, day), "text/csv;charset=utf-8");
    }
    toast("Dosya indirildi. Şimdi Google Haritalarım'da İçe aktar'ı kullanın");
  }

  // ── planlar ──
  let planMap, planLayer, curPlan = QS.get("plan") || store.get("ig_plan", "klasik"), curDay = null;
  if (!PLANS.find(p => p.id === curPlan)) curPlan = "klasik";
  const DAY_COLORS = ["#FF385C", "#C2185B", "#3B3B98", "#0E7C86", "#2F7D4F"];
  const DAY_SHORT = ["Ct", "Pz", "Pt", "Sa", "Ça"];
  function initPlanMap() {
    planMap = L.map("planMap", { minZoom: 6, maxZoom: 18 }).setView([45.75, 9.3], 9);
    addBase(planMap);
    planMap.zoomControl.setPosition("topright");
    planLayer = L.layerGroup().addTo(planMap);
    planMapReady = true;
  }
  function planCost(pl) {
    const seen = new Set(); let sum = 0, unknown = 0;
    pl.days.forEach(d => d.steps.forEach(s => {
      const p = byId[s[1]]; if (!p || seen.has(p.id) || p.cats.includes("food") || p.status) return; seen.add(p.id);
      if (p.price.eur > 0) sum += p.price.eur; else if (p.price.eur == null) unknown++;
    }));
    return { sum: Math.round(sum), unknown, count: seen.size };
  }
  function stepRow(s, i, color, prev) {
    const p = byId[s[1]] || {};
    let leg = "";
    if (prev && byId[prev[1]] && p.lat && prev[1] !== s[1]) {
      const m = hav(byId[prev[1]], p), t = travel(m);
      leg = `<div class="leg">${svg(t.mode === "walk" ? "walk" : "car")} ${kmTxt(m)} · ${t.txt}</div>`;
    }
    return `${leg}<li class="step${p.status ? " st-warn" : ""}" data-step="${esc(s[1])}">
      <span class="tm">${esc(s[0])}</span>
      <span class="no" style="background:${color}">${i + 1}</span>
      <span class="tx">${esc(s[2])}<small>${esc(p.name || "")}${p.status ? " · ⚠️ " + esc(p.status.split(":")[0]) : ""}</small></span>
      <span class="pr">${p.price ? esc(priceShort(p)) : ""}</span></li>`;
  }
  function renderPlans() {
    $("#planPicker").innerHTML = PLANS.map(pl => `<button class="pcard${pl.id === curPlan ? " active" : ""}" data-plan="${pl.id}">
      <span class="tg" style="color:${pl.color}">${esc(pl.tag)}</span><b>${esc(pl.name)}</b><span>${esc(pl.desc)}</span></button>`).join("");
    const pl = PLANS.find(p => p.id === curPlan);
    const c = planCost(pl);
    const fixedBlock = (title, sub, steps, icon) => `<div class="day fixed"><div class="dayh"><span class="dn" style="background:#222">${svg(icon, 'width="16" height="16"')}</span><div><b>${title}</b><span>${sub}</span></div></div>
      <ol class="steps">${steps.map((s, i) => `<li class="step"><span class="tm">${esc(s[0])}</span><span class="no" style="background:#222">${i + 1}</span><span class="tx">${esc(s[2])}</span><span></span></li>`).join("")}</ol></div>`;
    $("#planBody").innerHTML = `
      <h2 style="margin-top:0">${esc(pl.name)}</h2>
      <p class="muted">${esc(pl.desc)}</p>
      <div class="plan-sum">
        <div class="sumbox"><small>Giriş ücretleri (kişi başı)</small><b>≈${fmt(c.sum)} €</b></div>
        <div class="sumbox"><small>2 kişi toplam giriş</small><b>≈${fmt(c.sum * 2)} €</b></div>
        <div class="sumbox"><small>Gezilecek nokta</small><b>${c.count}</b></div>
      </div>
      <div class="gm-export">
        <div class="gm-ex-t">${gmLogo}<div><b>Bu planı Google Haritalar'a aktar</b><span>Gün gün rota linki, Google Haritalarım (My Maps) için KML/CSV, yerleri listenize kaydetme</span></div></div>
        <button class="btn primary" data-expplan>Aktar</button>
      </div>
      <div class="note"><b>Önemli:</b> Pazartesi Milano'da <b>Son Akşam Yemeği, Pinacoteca di Brera ve Sforza Kalesi müzeleri kapalı</b>; planlar buna göre kuruldu (Duomo, La Scala, Fondazione Prada, Poldi Pezzoli açık). Como'daki villaların çoğu Kasım sonunda kapalı: <b>Villa del Balbianello</b>'nun 24 Kasım'da açık olduğunu teyit edip rezervasyon yapın. Lugano İsviçre'de: fiyatlar CHF, Noel pazarı 26 Kasım'da açılıyor.</div>
      <div class="dayfilter" id="dayFilter">${["Tümü"].concat(pl.days.map((d, i) => DAY_SHORT[i])).map((t, i) => `<button data-dayf="${i - 1}" class="${(curDay == null && i === 0) || curDay === i - 1 ? "on" : ""}" ${i ? `style="--dc:${DAY_COLORS[i - 1]}"` : ""}>${t}</button>`).join("")}</div>
      ${fixedBlock("Cumartesi 21 Kasım · öğle", "Varış", window.FIXED.arrival, "plane")}
      ${pl.days.map((d, di) => `<div class="day" id="day-${di}"><div class="dayh"><span class="dn" style="background:${DAY_COLORS[di]}">${di + 1}</span><div><b>${esc(d.d)}</b><span>${esc(d.t)}</span></div>
          <div class="day-acts"><a class="btn sm" href="${routeLinks(d)[0] ? routeLinks(d)[0].url : "#"}" target="_blank" rel="noopener" title="Google Haritalar'da rota">${gmLogo}<span class="hide-s">Rota</span></a><button class="btn sm ghost" data-expday="${di}" title="Bu günü aktar">${svg("download", 'width="16" height="16"')}</button></div></div>
        ${routeLinks(d).length > 1 ? `<div class="rt-parts">Google tek linkte 10 durak gösteriyor: ${routeLinks(d).map((l, k) => `<a href="${l.url}" target="_blank" rel="noopener">Bölüm ${k + 1} (${l.from}–${l.to})</a>`).join(" · ")}</div>` : ""}
        <ol class="steps">${d.steps.map((s, i) => stepRow(s, i, DAY_COLORS[di], d.steps[i - 1])).join("")}</ol></div>`).join("")}
      ${fixedBlock("Perşembe 26 Kasım", "Dönüş", window.FIXED.departure, "house")}
      <p class="muted small">Güneş Kasım sonunda ≈16:45'te batıyor. Açık hava noktaları öğleden önceye ve gün batımına, kapalı mekânlar akşama göre dizildi. Saatler esnek; kapanış saatlerine dikkat: Colleoni Şapeli 16:30, Santa Maria Maggiore 17:00, La Scala Müzesi 17:30. Arabayla geçen süreler kuş uçuşu mesafeden tahmin; gerçek süre için Google rotasına bakın.</p>`;
    store.set("ig_plan", curPlan);
  }
  function drawPlan() {
    if (!planMapReady) return;
    planLayer.clearLayers();
    const pl = PLANS.find(p => p.id === curPlan); const all = [];
    pl.days.forEach((d, di) => {
      if (curDay != null && curDay !== di) return;
      const stops = dayStops(d);
      L.polyline(stops.map(x => [x.p.lat, x.p.lng]), { color: DAY_COLORS[di], weight: 4, opacity: .75, dashArray: di % 2 ? "8 8" : null }).addTo(planLayer);
      stops.forEach((x, i) => {
        const p = x.p; all.push([p.lat, p.lng]);
        L.marker([p.lat, p.lng], { icon: L.divIcon({ className: "pmi", iconSize: [0, 0], html: `<div class="num-m" style="background:${DAY_COLORS[di]}">${i + 1}</div>` }), zIndexOffset: di * 100 + i })
          .bindTooltip(`${esc(DAY_SHORT[di])} ${esc(x.s[0])} · ${esc(p.name)}`, { direction: "top", offset: [0, -12] })
          .on("click", () => openDetail(p.id)).addTo(planLayer);
      });
    });
    if (all.length) planMap.fitBounds(L.latLngBounds(all), { padding: [50, 50], maxZoom: 15 });
  }
  $("#planPicker").addEventListener("click", e => {
    const b = e.target.closest("[data-plan]"); if (!b) return;
    curPlan = b.dataset.plan; renderPlans(); drawPlan();
  });
  $("#planBody").addEventListener("click", e => {
    if (e.target.closest("a")) return;
    if (e.target.closest("[data-expplan]")) return openExportPlan(null);
    const ed = e.target.closest("[data-expday]"); if (ed) return openExportPlan(Number(ed.dataset.expday));
    const df = e.target.closest("[data-dayf]");
    if (df) {
      const v = Number(df.dataset.dayf); curDay = v < 0 ? null : v;
      $$("#dayFilter button").forEach(b => b.classList.toggle("on", b === df));
      drawPlan();
      if (curDay != null) { const el = $("#day-" + curDay); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }
      return;
    }
    const s = e.target.closest("[data-step]"); if (s) openDetail(s.dataset.step);
  });

  // ── okuma: yazılar ve rota kitapçığı ──
  let curBook = null;
  function openStory(id) {
    const i = STORIES.findIndex(s => s.id === id); if (i < 0) return;
    const st = STORIES[i], next = STORIES[(i + 1) % STORIES.length];
    const cover = byId[st.img];
    openModal(`
      ${cover ? photo(cover, "hero") : ""}
      <div class="mb-in story">
        <div class="eyebrow">${esc(st.era)} · ${st.read} dk okuma</div>
        <h2 id="mTitle">${esc(st.title)}</h2>
        <p class="lede">${esc(st.lead)}</p>
        <div class="prose">
          ${st.sections.map(sc => `<h3>${esc(sc.h)}</h3>${sc.p.map(x => `<p>${esc(x)}</p>`).join("")}`).join("")}
        </div>
        <div class="hr"></div>
        <h3>Bu yazıda geçen yerler</h3>
        <div class="placechips">${st.places.filter(pid => byId[pid]).map(pid => `<button class="pchip" data-place="${pid}">${photo(byId[pid], "pthumb")}<span>${esc(byId[pid].name)}</span></button>`).join("")}</div>
        <div class="actions">
          <button class="btn primary" data-story="${next.id}">Sonraki yazı: ${esc(next.title)} →</button>
          <button class="btn ghost" data-close>Kapat</button>
        </div>
      </div>`);
  }
  function bookletHTML(pl) {
    const seen = new Set();
    return pl.days.map((d, di) => {
      const items = d.steps.filter(s => byId[s[1]] && !seen.has(s[1]) && seen.add(s[1]));
      return `<div class="bday"><h3><span class="dn" style="background:${DAY_COLORS[di]}">${di + 1}</span>${esc(d.d)} <small>${esc(d.t)}</small></h3>
        ${items.map(s => {
          const p = byId[s[1]], sts = storiesWith(p.id);
          return `<article class="bitem">
            <div class="bhead"><span class="tm">${esc(s[0])}</span><div><b>${esc(p.name)}</b><small>${esc(p.local)} · ${esc(p.price.txt)} · ${esc(p.dur)}</small></div></div>
            ${p.status ? `<p class="small"><b>⚠️</b> ${esc(p.status)}</p>` : ""}
            <p>${esc(p.history)}</p>
            <p><b>Neden önemli?</b> ${esc(p.why)}</p>
            <p class="muted small"><b>İpucu:</b> ${esc(p.tips)}</p>
            <div class="blinks"><button class="lnk" data-place="${p.id}">Detay</button><a class="lnk" href="${gSearch(p)}" target="_blank" rel="noopener">Google Haritalar</a>${sts.map(x => `<button class="lnk" data-story="${x.id}">${svg("book", 'width="14" height="14"')} ${esc(x.title)}</button>`).join("")}</div>
          </article>`;
        }).join("")}</div>`;
    }).join("");
  }
  function renderRead() {
    if (!curBook || !PLANS.find(p => p.id === curBook)) curBook = curPlan;
    const pl = PLANS.find(p => p.id === curBook);
    $("#readBody").innerHTML = `
      <h1>Okuma</h1>
      <p class="muted lead">Gitmeden önce ya da yolda okumak için: Bergamo'dan Lugano'ya bölgenin hikâyesi ${STORIES.length} yazıda, altta da seçtiğiniz plandaki her yerin tarihçesi sırasıyla.</p>
      <h2>Bölgenin hikâyesi</h2>
      <div class="storygrid">${STORIES.map((st, i) => `<button class="scard" data-story="${st.id}">
        <div class="sph">${byId[st.img] ? photo(byId[st.img]) : ""}<span class="sno">${i + 1}</span></div>
        <div class="smeta"><small>${esc(st.era)} · ${st.read} dk</small><b>${esc(st.title)}</b><span>${esc(st.lead)}</span></div></button>`).join("")}</div>

      <h2 id="kitapcik">Rota kitapçığı</h2>
      <p class="muted">Bir plan seçin. O plandaki yerlerin tarihçesi, önemi ve ipuçları ziyaret sırasıyla tek sayfada.</p>
      <div class="row gap wrap bookbar">
        <label for="bookSel" class="lbl">Plan</label>
        <select id="bookSel">${PLANS.map(p => `<option value="${p.id}"${p.id === curBook ? " selected" : ""}>${esc(p.name)}</option>`).join("")}</select>
        <button class="btn ghost" id="bookPrint">Yazdır / PDF</button>
      </div>
      <div id="booklet">${bookletHTML(pl)}</div>`;
  }
  $("#readBody").addEventListener("click", e => {
    if (e.target.closest("#bookPrint")) return window.print();
    if (e.target.closest("a")) return;
    const so = e.target.closest("[data-story]"); if (so) return openStory(so.dataset.story);
    const pl = e.target.closest("[data-place]"); if (pl) return openDetail(pl.dataset.place);
  });
  $("#readBody").addEventListener("change", e => {
    if (e.target.id !== "bookSel") return;
    curBook = e.target.value;
    $("#booklet").innerHTML = bookletHTML(PLANS.find(p => p.id === curBook));
  });

  // ── bilgiler ──
  function renderInfo() {
    const priced = PLACES.filter(p => !p.cats.includes("food") && !(p.cats.includes("night") && p.price.eur == null));
    const kl = planCost(PLANS[0]);
    const rows = [
      ["Müze, füniküler ve villa girişleri (Klasik plan)", kl.sum, "Planlar sekmesindeki hesaba göre"],
      ["Kahvaltı / kahve-kruvasan (5 gün)", 40, "Barda cappuccino + cornetto ≈3–5 €"],
      ["Öğle yemekleri (5 gün)", 110, "≈15–25 €; AVM ve panzerotto günleri ucuz"],
      ["Akşam yemekleri (5 gün)", 225, "Trattoria ≈35–50 €, Lugano daha pahalı"],
      ["Aperitivo, gelato, tatlı", 70, "Spritz ≈8–12 €, gelato ≈3–5 €"],
      ["İsviçre günü farkı", 30, "Lugano'da fiyatlar ≈1,5–2 kat"],
      ["Alışveriş ve hediyelik", 0, "Size kalmış"]
    ];
    const tot = rows.reduce((a, r) => a + r[1], 0);
    const pl0 = PLANS[0];
    $("#infoBody").innerHTML = `
      <h1>Gezi bilgileri</h1>
      <p class="muted lead">Program özeti, Google Haritalar'a aktarma, ücretler, bütçe, pratik bilgiler ve tarih. Son güncelleme: 20 Kasım 2026.</p>

      <div class="alert">
        <b>Gitmeden önce 4 kritik nokta</b><br>
        1) <b>Pazartesi Milano:</b> Son Akşam Yemeği (Cenacolo), Pinacoteca di Brera ve Sforza Kalesi müzeleri <b>Pazartesi kapalı</b>. Cenacolo'yu görmek istiyorsanız tek şans Pazar (bilet bulunursa). Duomo terası için saatli bileti şimdiden alın.<br>
        2) <b>Como villaları:</b> Kasım sonunda Villa Carlotta, Villa Melzi ve Villa Monastero hafta içi kapalı. Villa del Balbianello'nun 24 Kasım Salı açık olduğunu FAI sitesinden teyit edip <b>rezervasyon</b> yapın.<br>
        3) <b>Lugano İsviçre'de:</b> para birimi CHF; AB roaming paketleri İsviçre'yi çoğu zaman kapsamaz, priz tipi farklı (aşağıya bakın). Monte San Salvatore füniküleri bu tarihte kapalı, Monte Brè açık.<br>
        4) <b>Arabayla ilgili cezalar:</b> İsviçre otoyolları için vinyet, Milano merkezinde Area C ve Bergamo Città Alta'da ZTL (trafiğe kapalı bölge) kameraları var. Kiralama şirketine sorun.
      </div>

      <section class="info-sec">
        <h2>Program özeti</h2>
        <div class="tbl-wrap"><table class="mini-tbl"><tbody>
          <tr><td><b>Cmt 21 Kas</b></td><td>Bergamo'ya iniş. Plan 14:30'da başlıyor: Città Alta, gün batımı, akşam yemeği.</td></tr>
          <tr><td><b>Paz 22 Kas</b></td><td>AVM günü: Oriocenter (önerilen) ya da Serravalle / Franciacorta / Il Centro.</td></tr>
          <tr><td><b>Pzt 23 Kas</b></td><td>Milano.</td></tr>
          <tr><td><b>Sal 24 Kas</b></td><td>Como Gölü.</td></tr>
          <tr><td><b>Çar 25 Kas</b></td><td>Lugano (İsviçre).</td></tr>
          <tr><td><b>Per 26 Kas</b></td><td>Dönüş. Plan yok.</td></tr>
        </tbody></table></div>
      </section>

      <section class="info-sec" id="gmaps">
        <h2>Planı Google Haritalar'a aktarmak</h2>
        <div class="cols2">
          <div class="card-box"><b>${svg("route", 'width="16" height="16"')} Gün gün rota</b><p class="small muted">Planlar sekmesinde her günün yanında <b>Rota</b> düğmesi var. Dokununca Google Haritalar o günün duraklarını sırayla, yol tarifi olarak açar. 10 duraktan uzun günler bölümlere ayrılır.</p></div>
          <div class="card-box"><b>${svg("download", 'width="16" height="16"')} Bütün planı tek haritada</b><p class="small muted"><b>Aktar → KML indir</b>, sonra <a href="https://www.google.com/maps/d/" target="_blank" rel="noopener">Google Haritalarım</a>'da Yeni harita → İçe aktar. Her gün ayrı renkte, numaralı gelir; Google Haritalar uygulamasında Kaydedilenler → Haritalar'da görünür.</p></div>
        </div>
        <div class="card-box"><b>${svg("bookmark", 'width="16" height="16"')} Kendi listenize kaydetmek</b><p class="small muted">Her kartın köşesindeki kırmızı iğne ve Aktar ekranındaki <b>Aç</b> düğmeleri yeri Google Haritalar'da açar; <b>Kaydet → Yeni liste</b> ile "İtalya Gezisi" listesini bir kez oluşturup sonraki yerleri ona ekleyin. Google listelere dışarıdan toplu ekleme izni vermediği için bu adım tek tek yapılıyor; site hangilerini kaydettiğinizi hatırlıyor.</p></div>
        <p class="small"><button class="btn sm" id="infoExport">${gmLogo} Klasik planı şimdi aktar</button></p>
      </section>

      <section class="info-sec">
        <h2>Bütün giriş ücretleri</h2>
        <p class="muted small">Başlığa tıklayarak sıralayın. Fiyatlar kişi başı. İsviçre'deki yerler CHF (1 CHF ≈ 1,07 €). “teyit” yazanlar kaynaklar arasında çelişkili; ⚠️ işaretliler bu tarihlerde kapalı ya da kısıtlı.</p>
        <div class="tbl-wrap"><table id="priceTbl"><thead><tr><th data-k="name">Yer</th><th data-k="city">Şehir</th><th data-k="eur">Ücret</th><th data-k="hours">Saatler</th></tr></thead><tbody></tbody></table></div>
      </section>

      <section class="info-sec">
        <h2>Tahmini bütçe (kişi başı)</h2>
        <div class="tbl-wrap"><table class="mini-tbl"><tbody>
          ${rows.map(r => `<tr><td>${esc(r[0])}</td><td class="num">${r[1] ? "≈" + fmt(r[1]) + " €" : "—"}</td><td class="muted">${esc(r[2])}</td></tr>`).join("")}
          <tr><td>Toplam</td><td class="num"><b>≈${fmt(tot)} €</b></td><td><b>2 kişi ≈${fmt(tot * 2)} €</b> (uçak, konaklama, araç ve yakıt hariç)</td></tr>
        </tbody></table></div>
      </section>

      <section class="info-sec">
        <h2>Pratik bilgiler</h2>
        <dl class="kv">
          <dt>Para</dt><dd>İtalya'da euro, İsviçre'de İsviçre frangı (CHF). Lugano'da birçok yer euro kabul eder ama para üstünü frank verir ve kur kötü olur; kartla ödemek en iyisi. ATM ve kart makinelerinde "kendi para biriminizle ödeme" (dönüştürme) teklifini reddedin.</dd>
          <dt>Vize</dt><dd>İtalya ve İsviçre ikisi de Schengen'de; Schengen vizesiyle sınırda pasaport kontrolü genelde yapılmaz ama pasaportunuz yanınızda olsun.</dd>
          <dt>İnternet</dt><dd>İsviçre AB'de değil: AB için alınmış eSIM ve roaming paketleri İsviçre'yi kapsamayabilir. Paketinize "Switzerland" dahil mi bakın ya da Lugano günü için ayrı paket alın.</dd>
          <dt>Priz</dt><dd>İtalya: tip F/L/C, 230 V; Türk fişleri genelde uyar. <b>İsviçre: tip J</b>; kalın Türk (Schuko) fişleri girmez, ince iki uçlu fişler girer. Lugano için adaptör alın.</dd>
          <dt>Hava</dt><dd>Kasım sonu Milano–Bergamo gündüz ≈8–12 °C, gece ≈2–5 °C; sis ve yağmur sık. Göl kıyıları biraz daha ılık, Monte Brè ve Brunate birkaç derece soğuk. Gün batımı ≈16:45.</dd>
          <dt>Kapalı günler</dt><dd>Pazartesi: Cenacolo, Brera, Sforza müzeleri, Bergamo Campanone (teyit), Colleoni Şapeli. Salı: Fondazione Prada, Poldi Pezzoli, Accademia Carrara. Pazar: Luini ve bazı restoranlar.</dd>
          <dt>Kilise ziyareti</dt><dd>Omuz ve diz kapalı. Duomo'da kontrol sıkı; büyük sırt çantası ve içecekle girilmiyor.</dd>
          <dt>Güvenlik</dt><dd>Milano'da Duomo meydanı, metro ve Navigli'de yankesicilere dikkat. Meydanda "hediye" bileklik ya da güvercin yemi uzatanlara para vermeyin.</dd>
          <dt>Vergi iadesi</dt><dd>AB dışında yaşayanlar İtalya'da tek mağazada 70 €'yu aşan alışverişlerde KDV iadesi (tax free) alabilir. Pasaportunuzu yanınızda taşıyın, formu mağazada doldurtun ve AB'den çıkarken havalimanında onaylatın.</dd>
          <dt>Restoran</dt><dd>"Coperto" (ekmek/servis) kişi başı ≈2–4 € hesaba eklenir, bahşiş zorunlu değil. Öğle ≈12:30–14:30, akşam 19:30'dan sonra. Cumartesi ve özel restoranlar için rezervasyon yapın.</dd>
          <dt>Black Friday</dt><dd>27 Kasım Cuma, ama birçok mağaza ve outlet bir hafta önceden başlıyor. Serravalle Designer Outlet'te ek indirim 20–30 Kasım.</dd>
        </dl>
      </section>

      <section class="info-sec">
        <h2>Ne yenir?</h2>
        <div class="cols2">
          <dl class="kv">
            <dt>Risotto alla milanese</dt><dd>Safranlı, tereyağlı Milano risottosu.</dd>
            <dt>Cotoletta alla milanese</dt><dd>Tereyağında kızartılmış kemikli dana pirzola.</dd>
            <dt>Ossobuco</dt><dd>Yavaş pişmiş dana incik.</dd>
            <dt>Panzerotto</dt><dd>Kızarmış mini calzone, Luini'de.</dd>
            <dt>Panettone</dt><dd>Milano'nun kuru meyveli Noel ekmeği; Kasım'da her yerde.</dd>
          </dl>
          <dl class="kv">
            <dt>Casoncelli</dt><dd>Bergamo'nun tereyağı-adaçayı soslu dolma makarnası.</dd>
            <dt>Polenta taragna</dt><dd>Karabuğdaylı, bol peynirli polenta.</dd>
            <dt>Polenta e osei</dt><dd>Bergamo'nun badem ezmeli tatlısı.</dd>
            <dt>Pesce persico</dt><dd>Como Gölü levreği, risotto ile.</dd>
            <dt>Merlot del Ticino</dt><dd>Lugano'nun şarabı, grotto'da boccalino ile.</dd>
          </dl>
        </div>
      </section>

      <section class="info-sec">
        <h2>Mini sözlük (İtalyanca)</h2>
        <div class="cols2">
          <dl class="kv">
            <dt>Buongiorno / Buonasera</dt><dd>Günaydın / İyi akşamlar</dd>
            <dt>Grazie / Prego</dt><dd>Teşekkürler / Rica ederim, buyurun</dd>
            <dt>Per favore</dt><dd>Lütfen</dd>
            <dt>Quanto costa?</dt><dd>Ne kadar?</dd>
            <dt>Il conto, per favore</dt><dd>Hesap lütfen</dd>
            <dt>Un tavolo per due</dt><dd>İki kişilik masa</dd>
            <dt>Salute! / Cin cin!</dt><dd>Şerefe!</dd>
            <dt>Dov'è…?</dt><dd>… nerede?</dd>
          </dl>
          <div class="card-box" style="margin:0"><b>İşe yarayacak kelimeler</b>
            <p class="small muted"><b>aperto / chiuso</b> (açık / kapalı), <b>uscita</b> (çıkış), <b>biglietto</b> (bilet), <b>prenotazione</b> (rezervasyon), <b>caffè</b> (espresso), <b>acqua naturale / frizzante</b> (sade / maden suyu), <b>vino della casa</b> (ev şarabı), <b>senza glutine</b> (glutensiz), <b>maiale</b> (domuz eti).</p>
            <p class="small muted">Lugano'da da İtalyanca konuşulur; İngilizce turistik yerlerde yaygın.</p>
          </div>
        </div>
      </section>

      <section class="info-sec">
        <h2>Lombardiya ve Ticino tarihi: zaman çizelgesi</h2>
        <ul class="tl">${window.TIMELINE.map(t => `<li><b>${esc(t[0])}</b>${esc(t[1])}</li>`).join("")}</ul>
      </section>

      <section class="info-sec" style="border:0">
        <h2>Kaynaklar</h2>
        <ul class="src">
          <li><a href="https://www.italia.it/it/lombardia/milano/museo-cenacolo-vinciano" target="_blank" rel="noopener">italia.it · Cenacolo Vinciano (saatler, 15 €)</a></li>
          <li><a href="https://cenacolovinciano.org/wp-content/uploads/2023/07/Museo-del-Cenacolo-Vinciano.pdf" target="_blank" rel="noopener">Cenacolo Vinciano · Pazartesi kapalı</a></li>
          <li><a href="https://www.milanofree.it/turismo/monumenti/duomo-di-milano-storia-visite-orari-e-biglietti.html" target="_blank" rel="noopener">MilanoFree · Duomo 2026 saatleri</a></li>
          <li><a href="https://thebettervacation.com/it/Milano/tetto-del-duomo-di-milano/" target="_blank" rel="noopener">The Better Vacation · Duomo terasları</a></li>
          <li><a href="https://pinacotecabrera.org/en/?p=9549" target="_blank" rel="noopener">Pinacoteca di Brera · saatler</a></li>
          <li><a href="https://www.artvisitguide.com/brera-milan-tickets-guide/" target="_blank" rel="noopener">Art Visit Guide · Brera ve Pazartesi alternatifleri</a></li>
          <li><a href="https://www.comune.milano.it/en/web/gam-galleria-arte-moderna/organizza-la-tua-visita/orari-e-biglietti" target="_blank" rel="noopener">Comune di Milano · belediye müzeleri</a></li>
          <li><a href="https://thebettervacation.com/it/Milano/Museo-del-Teatro-alla-Scala/amp/" target="_blank" rel="noopener">La Scala Müzesi · ücretler</a></li>
          <li><a href="https://www.nomadotravel.app/it/attractions/fondazione-prada" target="_blank" rel="noopener">Fondazione Prada · saatler</a></li>
          <li><a href="https://www.travel365.it/bergamo-itinerario-5-giorni.htm" target="_blank" rel="noopener">Travel365 · Bergamo saatleri</a></li>
          <li><a href="https://www.museodellestorie.bergamo.it/en/luogo/campanone/" target="_blank" rel="noopener">Museo delle Storie · Campanone</a></li>
          <li><a href="https://visitbergamo.net/wp-content/uploads/2025/04/Musei-orari-APRILE-2025.pdf" target="_blank" rel="noopener">VisitBergamo · müze saatleri</a></li>
          <li><a href="https://abbonamentomusei.it/en/spazio_espositivo/accademia-carrara/" target="_blank" rel="noopener">Abbonamento Musei · Accademia Carrara</a></li>
          <li><a href="https://www.oriocenter.it/en/?p=5230" target="_blank" rel="noopener">Oriocenter · SSS ve saatler</a></li>
          <li><a href="https://www.mcarthurglen.com/da/outlets/it/designer-outlet-serravalle/whats-on/black-friday/" target="_blank" rel="noopener">Serravalle · Black Friday 20–30 Kasım</a></li>
          <li><a href="https://www.franciacortadesignervillage.com/en/" target="_blank" rel="noopener">Franciacorta Designer Village</a></li>
          <li><a href="https://www.atm.it/it/AltriServizi/Trasporto/Documents/Tariffe%20Funicolare%20Como%20Brunate.pdf" target="_blank" rel="noopener">ATM · Como–Brunate füniküler tarifeleri</a></li>
          <li><a href="https://italyplanner.com/best-things-to-do-lake-como.html" target="_blank" rel="noopener">Italy Planner · Como Gölü kış açılışları</a></li>
          <li><a href="https://www.villacarlotta.it/en/visit/" target="_blank" rel="noopener">Villa Carlotta · ziyaret</a></li>
          <li><a href="https://fondoambiente.it/villa-del-balbianello-eng" target="_blank" rel="noopener">FAI · Villa del Balbianello</a></li>
          <li><a href="https://www.grandigiardini.it/lang_EN/182-visit-Villa-del-Balbianello-Bene-FAI-event-tickets" target="_blank" rel="noopener">Grandi Giardini · Balbianello 2026</a></li>
          <li><a href="https://www.montesansalvatore.ch/en/timetable-and-fares" target="_blank" rel="noopener">Monte San Salvatore · sezonlar</a></li>
          <li><a href="https://www.laregione.ch/temi/funicolare-monte-bre" target="_blank" rel="noopener">laRegione · Monte Brè kışın da açık</a></li>
          <li><a href="https://www.luganolac.ch/en/masi/info/orari-e-tariffe.html" target="_blank" rel="noopener">MASI Lugano · saatler</a></li>
          <li><a href="https://www.masilugano.ch/en/masi/info/orari-e-tariffe.html" target="_blank" rel="noopener">MASI Lugano · ücretler</a></li>
          <li><a href="https://www.swissactivities.com/en-ch/christmas-markets/lugano/" target="_blank" rel="noopener">Swiss Activities · Lugano Noel pazarı 2026</a></li>
          <li><a href="https://www.laregione.ch/cantone/luganese/1963590/servizi" target="_blank" rel="noopener">laRegione · Natale in Piazza 26 Kasım</a></li>
          <li><a href="https://myswitzerland.com/en/experiences/chocolat-alprose" target="_blank" rel="noopener">MySwitzerland · Alprose</a></li>
          <li><a href="https://www.lonelyplanet.fr/poi/museo-del-cioccolato-alprose-0" target="_blank" rel="noopener">Lonely Planet · Alprose saatleri</a></li>
          <li><a href="https://www.in-lombardia.it/en/event/toy-town-lake-como" target="_blank" rel="noopener">in-Lombardia · Como Città dei Balocchi</a></li>
        </ul>
      </section>`;

    // fiyat tablosu
    let sk = "eur", asc = true;
    const tb = $("#priceTbl tbody");
    const drawT = () => {
      const arr = priced.slice().sort((a, b) => {
        let x, y;
        if (sk === "eur") { x = a.price.eur ?? 9999; y = b.price.eur ?? 9999; }
        else if (sk === "city") { x = CITY_ORDER.indexOf(a.city); y = CITY_ORDER.indexOf(b.city); }
        else { x = a[sk] || ""; y = b[sk] || ""; }
        return (x > y ? 1 : x < y ? -1 : 0) * (asc ? 1 : -1);
      });
      tb.innerHTML = arr.map(p => `<tr data-id="${p.id}" style="cursor:pointer"><td><b>${esc(p.name)}</b>${p.status ? ' <span title="Dikkat">⚠️</span>' : ""}</td><td>${esc(cityName(p))}</td><td class="num">${esc(p.price.txt)}${p.price.note ? `<br><span class="muted small">${esc(p.price.note)}</span>` : ""}</td><td class="muted small">${esc(p.hours)}</td></tr>`).join("");
    };
    $("#priceTbl thead").addEventListener("click", e => { const th = e.target.closest("th"); if (!th) return; const k = th.dataset.k; asc = sk === k ? !asc : true; sk = k; drawT(); });
    tb.addEventListener("click", e => { const r = e.target.closest("tr"); if (r) openDetail(r.dataset.id); });
    $("#infoExport").addEventListener("click", () => { curPlan = pl0.id; renderPlans(); openExportPlan(null); });
    drawT();
  }

  // ── başlat ──
  renderList(true);
  renderPlans();
  renderInfo();
  const HASH_VIEWS = { "#kesfet": "explore", "#planlar": "plans", "#bilgiler": "info", "#okuma": "read" };
  const hashView = HASH_VIEWS[location.hash];
  window.addEventListener("hashchange", () => { if (HASH_VIEWS[location.hash]) show(HASH_VIEWS[location.hash]); });
  show(hashView || store.get("ig_view", "explore") || "explore");
  const openParam = QS.get("yer");
  if (openParam && byId[openParam]) openDetail(openParam);
  const storyParam = QS.get("yazi");
  if (storyParam && STORIES.some(s => s.id === storyParam)) { if (!hashView) show("read"); openStory(storyParam); }
  loadImages();
})();
