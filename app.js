/* Tiran Gezi Rehberi — uygulama */
(function () {
  "use strict";

  const { home: HOME } = window.TRIP;
  const PLACES = window.PLACES, PLANS = window.PLANS, CATS = window.CATS, IMG = window.IMAGES || {};
  const byId = Object.fromEntries(PLACES.map(p => [p.id, p]));
  byId.home = { id: "home", name: "Konaklama", lat: HOME.lat, lng: HOME.lng, price: { lek: 0, txt: "" }, cats: [] };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = n => n.toLocaleString("tr-TR");

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
    const min = Math.round(road / 1000 / (road > 15000 ? 55 : 24) * 60) + 3;
    return { mode: "car", min, txt: `taksi ≈${min} dk` };
  }
  function distTxt(p) {
    const m = hav(HOME, p);
    const d = m < 1000 ? `${Math.round(m / 10) * 10} m` : `${(m / 1000).toFixed(m < 10000 ? 1 : 0).replace(".", ",")} km`;
    return `Eve ${d} · ${travel(m).txt}`;
  }

  // ── ikonlar ──
  const I = {
    grid: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    dome: '<path d="M5 20V12a7 7 0 0 1 14 0v8M3 20h18M12 5V2M9 20v-4a3 3 0 0 1 6 0v4"/>',
    bunker: '<path d="M2 19h20M4 19a8 8 0 0 1 16 0M8 15h8"/>',
    faith: '<path d="M15 4a8 8 0 1 0 5 13A7 7 0 0 1 15 4z"/>',
    museum: '<path d="M3 9 12 4l9 5M4 20h16M6 10v8M10 10v8M14 10v8M18 10v8"/>',
    mountain: '<path d="m2 20 7-12 4 6 3-4 6 10z"/>',
    road: '<path d="M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v3"/>',
    food: '<path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10M17 3c-2 0-3 3-3 6s1 4 3 4v8"/>',
    ticket: '<path d="M3 8a2 2 0 0 0 0 4v0 4h18v-4a2 2 0 0 1 0-4V4H3zM14 4v16" transform="translate(0 2) scale(1 .85)"/>',
    bus: '<path d="M5 17V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v11zM5 11h14M7 20v-3M17 20v-3"/><circle cx="8.5" cy="14" r=".6"/><circle cx="15.5" cy="14" r=".6"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    glass: '<path d="M6 3h12l-6 8zM12 11v9M8 21h8M8.2 6h7.6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    hourglass: '<path d="M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9"/>',
    money: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
    walk: '<circle cx="13" cy="4" r="1.6"/><path d="m9 21 2-6 3 3v3M8 12l2-4 4 1 2 4M10 8l1 7"/>',
    house: '<path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z"/>',
    heart: '<path d="M16 28c7-4.7 14-10 14-17a7 7 0 0 0-14-2.6A7 7 0 0 0 2 11c0 7 7 12.3 14 17z"/>'
  };
  const svg = (k, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra}>${I[k]}</svg>`;
  const heartSvg = () => `<svg viewBox="0 0 32 32">${I.heart}</svg>`;
  const starSolid = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="m12 2 3 6.3 6.9 1-5 4.8 1.2 6.9L12 17.8 5.9 21l1.2-6.9-5-4.8 6.9-1z"/></svg>';

  const CAT_COLOR = { communism: "#4B4B55", ottoman: "#B3541E", faith: "#008489", museum: "#7B4FB8", view: "#2F7D4F", daytrip: "#C2410C", food: "#D9364F", practical: "#1C4FB8", act: "#0E7C86", night: "#3B3B98", top: "#FF385C", free: "#00A699" };
  const mainCat = p => (p.cats.find(c => c !== "top" && c !== "free") || p.cats[0] || "practical");
  const catIcon = c => (CATS.find(x => x.id === c) || {}).icon || "pin";
  function photo(p, cls = "") {
    const src = IMG[p.id];
    const c = CAT_COLOR[mainCat(p)] || "#888";
    if (src) return `<img class="${cls}" src="${esc(src)}" alt="${esc(p.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML='<div class=&quot;ph-fallback ${cls}&quot; style=&quot;background:linear-gradient(135deg,${c},${c}bb)&quot;>${svg(catIcon(mainCat(p))).replace(/"/g, "&quot;")}</div>'">`;
    return `<div class="ph-fallback ${cls}" style="background:linear-gradient(135deg,${c},${c}bb)">${svg(catIcon(mainCat(p)))}</div>`;
  }
  const PILL_TXT = { airport: "Havalimanı", luna: "LU-NA", terminal: "Otogar" };
  function pillLabel(p) {
    if (PILL_TXT[p.id]) return PILL_TXT[p.id];
    if (p.price.lek > 0) return `${fmt(p.price.lek)} L`;
    if (p.price.lek === 0) return "Ücretsiz";
    return p.cats.includes("food") ? "Yemek" : "Bilgi";
  }

  // ── durum ──
  let myName = store.get("tg_name", "");
  let favs = new Set(store.get("tg_favs", []).filter(id => byId[id]));
  let group = store.get("tg_group", {});
  const QS = new URLSearchParams(location.search);
  let curCat = CATS.some(c => c.id === QS.get("kat")) ? QS.get("kat") : "all", curSort = "score", hotId = null;
  const VOTER_COLORS = ["#FF385C", "#00A699", "#FC642D", "#7B4FB8", "#1C4FB8", "#2F7D4F", "#B3541E"];

  function voters() {
    const all = { ...group };
    const me = (myName || "Ben").trim();
    if (favs.size) all[me] = [...favs]; else delete all[me];
    return all;
  }
  function voteCount() {
    const c = {}; const v = voters();
    Object.entries(v).forEach(([n, ids]) => ids.forEach(id => { (c[id] = c[id] || []).push(n); }));
    return c;
  }
  const colorFor = name => { const names = Object.keys(voters()).sort(); return VOTER_COLORS[Math.max(0, names.indexOf(name)) % VOTER_COLORS.length]; };

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
    if (view === "votes") renderVotes();
    store.set("tg_view", view);
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

  function filtered() {
    let arr = PLACES.filter(p => {
      if (curCat === "all") return !p.cats.includes("practical");
      if (curCat === "free") return p.price.lek === 0 && !p.cats.includes("practical");
      return p.cats.includes(curCat);
    });
    const vc = voteCount();
    const sorters = {
      score: (a, b) => b.score - a.score || hav(HOME, a) - hav(HOME, b),
      dist: (a, b) => hav(HOME, a) - hav(HOME, b),
      price: (a, b) => (a.price.lek ?? 99999) - (b.price.lek ?? 99999) || b.score - a.score,
      votes: (a, b) => (vc[b.id] || []).length - (vc[a.id] || []).length || b.score - a.score
    };
    return arr.sort(sorters[curSort]);
  }

  function cardHTML(p, vc) {
    const v = (vc[p.id] || []).length;
    const badge = p.status ? `<span class="pill-badge warn">Dikkat</span>` : (p.score >= 5 ? `<span class="pill-badge">Kaçırmayın</span>` : "");
    const priceLine = p.price.lek > 0 ? `<b>${fmt(p.price.lek)} L</b> kişi başı${p.price.note ? ` · <span class="muted">${esc(p.price.note)}</span>` : ""}`
      : p.price.lek === 0 ? `<b>${esc(p.price.txt)}</b>` : `<b>${esc(p.price.txt)}</b>`;
    const sc = p.score ? `<span class="rate">${starSolid}${p.score}.0</span>` : "";
    return `<div class="card" data-id="${p.id}" tabindex="0">
      <div class="ph">${photo(p)}${badge}
        <button class="heart${favs.has(p.id) ? " on" : ""}" data-heart="${p.id}" aria-label="Favorilere ekle">${heartSvg()}</button>
      </div>
      <div class="meta">
        <div class="t1"><span class="nm">${esc(p.name)}</span>${sc}</div>
        <div class="t2">${esc(p.local)} · ${esc(p.area)}</div>
        <div class="t3">${esc(distTxt(p))} · ${esc(p.dur)}</div>
        <div class="t4">${priceLine}</div>
        ${v ? `<div class="votes">♥ ${v} oy: ${esc((vc[p.id] || []).join(", "))}</div>` : ""}
      </div>
    </div>`;
  }

  function renderList(refit) {
    const arr = filtered(), vc = voteCount();
    const cat = CATS.find(c => c.id === curCat);
    $("#listTitle").textContent = curCat === "all" ? "Tiran'da gezilecek yerler" : cat.label;
    $("#listSub").textContent = `${arr.length} yer · konaklamanıza göre mesafeler · ücretler kişi başı`;
    $("#grid").innerHTML = arr.length ? arr.map(p => cardHTML(p, vc)).join("") : `<p class="empty">Bu kategoride yer yok.</p>`;
    drawMarkers(arr, refit);
    updateFavCount();
  }

  // ── kart etkileşimleri ──
  $("#grid").addEventListener("click", e => {
    const h = e.target.closest("[data-heart]");
    if (h) { e.stopPropagation(); toggleFav(h.dataset.heart); return; }
    const c = e.target.closest(".card"); if (c) openDetail(c.dataset.id);
  });
  $("#grid").addEventListener("keydown", e => { if (e.key === "Enter") { const c = e.target.closest(".card"); if (c) openDetail(c.dataset.id); } });
  $("#grid").addEventListener("mouseover", e => { const c = e.target.closest(".card"); setHot(c ? c.dataset.id : null); });
  $("#grid").addEventListener("mouseleave", () => setHot(null));

  function toggleFav(id) {
    if (favs.has(id)) favs.delete(id); else { favs.add(id); if (!myName) toast("İpucu: Oylar sekmesinden adını yaz ki arkadaşların görsün"); }
    store.set("tg_favs", [...favs]);
    $$(`[data-heart="${id}"]`).forEach(b => b.classList.toggle("on", favs.has(id)));
    const m = markers[id]; if (m) m.getElement()?.querySelector(".pm")?.classList.toggle("fav", favs.has(id));
    updateFavCount();
    if ($("#view-votes").classList.contains("active")) renderVotes();
    if (curSort === "votes") renderList(false);
  }
  function updateFavCount() {
    const b = $("#favCount"); b.textContent = favs.size; b.classList.toggle("zero", !favs.size);
  }

  // ── harita (keşfet) ──
  // Altlık: OpenFreeMap vektör (anahtarsız). WebGL yoksa Esri açık gri raster.
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
  const map = L.map("map", { zoomControl: true, minZoom: 8, maxZoom: 18 }).setView([41.3255, 19.8235], 14);
  addBase(map);
  map.zoomControl.setPosition("topright");
  const zoomClass = () => map.getContainer().classList.toggle("zfar", map.getZoom() < 16);
  map.on("zoomend", zoomClass); zoomClass();

  function homeIcon() {
    return L.divIcon({ className: "pmi", iconSize: [0, 0], html: `<div class="home-m"><div class="dot"><svg viewBox="0 0 24 24"><path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z"/></svg></div><div class="lb">${esc(HOME.name)}<span>${esc(HOME.sub)}</span></div></div>` });
  }
  L.marker([HOME.lat, HOME.lng], { icon: homeIcon(), zIndexOffset: 2000 }).addTo(map)
    .bindPopup(`<div class="mini"><div class="mb"><b>Konaklamanız</b>${esc(HOME.address)}<br><span class="muted small">Yeni Pazar'ın yanı · Skanderbeg Meydanı'na ≈8 dk</span></div></div>`);

  const markers = {};
  let markerLayer = L.layerGroup().addTo(map);
  function drawMarkers(arr, refit) {
    markerLayer.clearLayers();
    Object.keys(markers).forEach(k => delete markers[k]);
    arr.forEach(p => {
      const dotty = !(p.price.lek > 0) && p.score < 5;
      const cls = ["pm", p.price.lek === 0 ? "free" : "", p.cats.includes("practical") ? "prac" : "", favs.has(p.id) ? "fav" : "", dotty ? "dotty" : "", p.cats.includes("food") ? "food" : ""].join(" ");
      const m = L.marker([p.lat, p.lng], { icon: L.divIcon({ className: "pmi", iconSize: [0, 0], html: `<div class="${cls}">${esc(pillLabel(p))}</div>` }), riseOnHover: true });
      m.bindPopup(`<div class="mini" data-open="${p.id}">${photo(p)}<div class="mb"><b>${esc(p.name)}</b><span class="muted">${esc(p.short)}</span></div></div>`, { maxWidth: 260, minWidth: 260, autoPanPadding: [40, 40] });
      m.on("mouseover", () => { const c = $(`.card[data-id="${p.id}"]`); if (c) c.classList.add("hl"); });
      m.on("mouseout", () => { const c = $(`.card[data-id="${p.id}"]`); if (c) c.classList.remove("hl"); });
      m.addTo(markerLayer); markers[p.id] = m;
    });
    if (refit) {
      if (curCat === "all" || curCat === "top" || curCat === "free") map.setView([41.3255, 19.8235], 14);
      else if (arr.length) map.fitBounds(L.latLngBounds(arr.map(p => [p.lat, p.lng]).concat([[HOME.lat, HOME.lng]])), { padding: [60, 60], maxZoom: 15 });
    }
  }
  map.on("popupopen", e => {
    const el = e.popup.getElement().querySelector("[data-open]");
    if (el) el.addEventListener("click", () => openDetail(el.dataset.open));
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

  // ── detay modalı ──
  function plansWith(id) { return PLANS.filter(pl => pl.days.some(d => d.steps.some(s => s[1] === id))); }
  function openDetail(id) {
    const p = byId[id]; if (!p || id === "home") return;
    const m = hav(HOME, p), tr = travel(m);
    const vc = voteCount()[id] || [];
    const gm = `https://www.google.com/maps/dir/?api=1&origin=${HOME.lat},${HOME.lng}&destination=${p.lat},${p.lng}&travelmode=${tr.mode === "walk" ? "walking" : "driving"}`;
    const pls = plansWith(id);
    $("#modalBody").innerHTML = `
      ${photo(p, "hero")}
      <div class="mb-in">
        <h2 id="mTitle">${esc(p.name)}</h2>
        <div class="sub">${esc(p.local)} · ${esc(p.area)}</div>
        <div class="facts">
          ${p.score ? `<span class="fact red">★ ${p.score}/5 öneri</span>` : ""}
          <span class="fact">${esc(p.price.txt)}</span>
          <span class="fact">${esc(p.dur)}</span>
          <span class="fact">${esc(distTxt(p))}</span>
          ${vc.length ? `<span class="fact red">♥ ${vc.length} oy: ${esc(vc.join(", "))}</span>` : ""}
        </div>
        ${p.status ? `<div class="warnbox">⚠️ <span>${esc(p.status)}</span></div>` : ""}
        <div class="hr"></div>
        <div class="infogrid">
          <div class="ig">${svg("money")}<div><b>Giriş ücreti</b><span>${esc(p.price.txt)}${p.price.note ? " · " + esc(p.price.note) : ""}</span></div></div>
          <div class="ig">${svg("clock")}<div><b>Saatler</b><span>${esc(p.hours)}</span></div></div>
          <div class="ig">${svg("hourglass")}<div><b>Ayırmanız gereken süre</b><span>${esc(p.dur)}</span></div></div>
          <div class="ig">${svg(tr.mode === "walk" ? "walk" : "bus")}<div><b>Konaklamadan</b><span>${esc(distTxt(p).replace("Eve ", ""))}</span></div></div>
        </div>
        <div class="hr"></div>
        <div class="prose">
          <h3>Tarihçe</h3><p>${esc(p.history)}</p>
          <h3>Neden önemli?</h3><p>${esc(p.why)}</p>
          <h3>İpuçları</h3><p>${esc(p.tips)}</p>
        </div>
        ${pls.length ? `<h3>Bu yer şu planlarda</h3><div class="inplans">${pls.map(pl => `<span class="tagp" style="background:${pl.color}">${esc(pl.name)}</span>`).join("")}</div>` : ""}
        <div class="actions">
          <button class="btn primary" data-mfav="${p.id}">${favs.has(p.id) ? "♥ Favorilerimde" : "♡ Favorilere ekle"}</button>
          <a class="btn" href="${gm}" target="_blank" rel="noopener">${svg("pin", 'width="18" height="18"')} Yol tarifi</a>
          <button class="btn ghost" data-mmap="${p.id}">Haritada göster</button>
        </div>
      </div>`;
    const md = $("#modal"); md.classList.add("open"); md.setAttribute("aria-hidden", "false");
    $(".modal-card").scrollTop = 0;
    document.body.style.overflow = "hidden";
  }
  function closeDetail() { const md = $("#modal"); md.classList.remove("open"); md.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
  $("#modal").addEventListener("click", e => {
    if (e.target.closest("[data-close]")) return closeDetail();
    const f = e.target.closest("[data-mfav]");
    if (f) { toggleFav(f.dataset.mfav); f.textContent = favs.has(f.dataset.mfav) ? "♥ Favorilerimde" : "♡ Favorilere ekle"; return; }
    const mm = e.target.closest("[data-mmap]");
    if (mm) {
      const p = byId[mm.dataset.mmap]; closeDetail(); show("explore");
      if (!markers[p.id]) { curCat = "all"; $$(".cat").forEach(x => x.classList.toggle("active", x.dataset.cat === "all")); if (p.cats.includes("practical") || !filtered().includes(p)) { curCat = p.cats.includes("practical") ? "practical" : p.cats[0]; $$(".cat").forEach(x => x.classList.toggle("active", x.dataset.cat === curCat)); } renderList(false); }
      if (window.innerWidth <= 950) { $("#mapPane").classList.add("show"); $("#mapToggle span").textContent = "Listeyi göster"; }
      setTimeout(() => { map.invalidateSize(); map.setView([p.lat, p.lng], 16); markers[p.id] && markers[p.id].openPopup(); }, 80);
    }
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDetail(); });

  // ── planlar ──
  let planMap, planLayer, curPlan = QS.get("plan") || store.get("tg_plan", "klasik");
  if (!PLANS.find(p => p.id === curPlan)) curPlan = "klasik";
  const DAY_COLORS = ["#FF385C", "#00A699"];
  function initPlanMap() {
    planMap = L.map("planMap", { minZoom: 7, maxZoom: 18 }).setView([41.3255, 19.8235], 13);
    addBase(planMap);
    planMap.zoomControl.setPosition("topright");
    L.marker([HOME.lat, HOME.lng], { icon: homeIcon(), zIndexOffset: 2000 }).addTo(planMap);
    planLayer = L.layerGroup().addTo(planMap);
    planMapReady = true;
  }
  function planCost(pl) {
    const seen = new Set(); let sum = 0, unknown = 0;
    pl.days.forEach(d => d.steps.forEach(s => {
      const p = byId[s[1]]; if (!p || seen.has(p.id) || p.cats.includes("food")) return; seen.add(p.id);
      if (p.price.lek > 0) sum += p.price.lek; else if (p.price.lek == null) unknown++;
    }));
    return { sum, unknown, count: seen.size };
  }
  function stepRow(s, i, color, prev) {
    const p = byId[s[1]] || {};
    let leg = "";
    if (prev && byId[prev[1]] && p.lat && prev[1] !== s[1]) {
      const m = hav(byId[prev[1]], p), t = travel(m);
      leg = `<div class="leg">${svg(t.mode === "walk" ? "walk" : "bus")} ${m < 1000 ? Math.round(m / 10) * 10 + " m" : (m / 1000).toFixed(1).replace(".", ",") + " km"} · ${t.txt}</div>`;
    }
    const pr = p.price ? (p.price.lek > 0 ? `${fmt(p.price.lek)} L` : (p.price.lek === 0 ? "" : "")) : "";
    return `${leg}<li class="step" data-step="${esc(s[1])}">
      <span class="tm">${esc(s[0])}</span>
      <span class="no" style="background:${color}">${i + 1}</span>
      <span class="tx">${esc(s[2])}<small>${esc(p.name || "")}</small></span>
      <span class="pr">${pr}</span></li>`;
  }
  function renderPlans() {
    $("#planPicker").innerHTML = PLANS.map(pl => `<button class="pcard${pl.id === curPlan ? " active" : ""}" data-plan="${pl.id}">
      <span class="tg" style="color:${pl.color}">${esc(pl.tag)}</span><b>${esc(pl.name)}</b><span>${esc(pl.desc)}</span></button>`).join("");
    const pl = PLANS.find(p => p.id === curPlan);
    const c = planCost(pl);
    const fixedBlock = (title, sub, steps, color) => `<div class="day fixed"><div class="dayh"><span class="dn" style="background:${color}">${svg("house", 'width="16" height="16"')}</span><div><b>${title}</b><span>${sub}</span></div></div>
      <ol class="steps">${steps.map((s, i) => `<li class="step"><span class="tm">${esc(s[0])}</span><span class="no" style="background:${color}">${i + 1}</span><span class="tx">${esc(s[2])}</span><span></span></li>`).join("")}</ol></div>`;
    $("#planBody").innerHTML = `
      <h2 style="margin-top:0">${esc(pl.name)}</h2>
      <p class="muted">${esc(pl.desc)}</p>
      <div class="plan-sum">
        <div class="sumbox"><small>Giriş ücretleri (kişi başı)</small><b>≈${fmt(c.sum)} L</b> <span class="muted small">≈${Math.round(c.sum / 100)} €</span></div>
        <div class="sumbox"><small>3 kişi toplam giriş</small><b>≈${fmt(c.sum * 3)} L</b></div>
        <div class="sumbox"><small>Gezilecek nokta</small><b>${c.count}</b>${c.unknown ? ` <span class="muted small">(${c.unknown} tanesinin ücreti belirsiz)</span>` : ""}</div>
      </div>
      <div class="note"><b>Önemli:</b> İlana göre konaklama <b>20–22 Kasım</b>, yani Pazar sabahı çıkış var ama uçağınız Pazartesi 02:35'te. Ev sahibinden <b>geç çıkış ya da bagaj bırakma</b> isteyin. Olmazsa Skanderbeg Meydanı yakınında Stasher, Bounce ya da Radical Storage noktaları var (bavul başı günlük ≈3–6 €).</div>
      ${fixedBlock("Cuma 20 Kasım · gece", "Varış ve yerleşme", window.FIXED.arrival, "#222")}
      ${pl.days.map((d, di) => `<div class="day"><div class="dayh"><span class="dn" style="background:${DAY_COLORS[di]}">${di + 1}</span><div><b>${esc(d.d)}</b><span>${esc(d.t)}</span></div></div>
        <ol class="steps">${d.steps.map((s, i) => stepRow(s, i, DAY_COLORS[di], d.steps[i - 1])).join("")}</ol></div>`).join("")}
      ${fixedBlock("Pazar 22 → Pazartesi 23 Kasım · gece", "Dönüş: uçak Pazar gecesi 02:35", window.FIXED.departure, "#222")}
      <p class="muted small">Güneş Kasım sonunda ≈16:15'te batıyor. Açık hava noktaları öğleden önceye, müzeler öğleden sonraya göre dizildi. Saatler esnek, ama Yapraklar Evi (Ct 16:00, Pz 15:00) ve Bunk'Art 1'in (≈16:00) kapanış saatlerine dikkat.</p>`;
    store.set("tg_plan", curPlan);
  }
  function drawPlan() {
    if (!planMapReady) return;
    planLayer.clearLayers();
    const pl = PLANS.find(p => p.id === curPlan); const all = [];
    pl.days.forEach((d, di) => {
      const pts = d.steps.map(s => byId[s[1]]).filter(Boolean).map(p => [p.lat, p.lng]);
      L.polyline(pts, { color: DAY_COLORS[di], weight: 4, opacity: .75, dashArray: di ? "8 8" : null }).addTo(planLayer);
      d.steps.forEach((s, i) => {
        const p = byId[s[1]]; if (!p) return; all.push([p.lat, p.lng]);
        L.marker([p.lat, p.lng], { icon: L.divIcon({ className: "pmi", iconSize: [0, 0], html: `<div class="num-m" style="background:${DAY_COLORS[di]}">${i + 1}</div>` }), zIndexOffset: di * 100 + i })
          .bindTooltip(`${esc(s[0])} · ${esc(p.name)}`, { direction: "top", offset: [0, -12] })
          .on("click", () => openDetail(p.id)).addTo(planLayer);
      });
    });
    if (all.length) planMap.fitBounds(L.latLngBounds(all.concat([[HOME.lat, HOME.lng]])), { padding: [50, 50], maxZoom: 15 });
  }
  $("#planPicker").addEventListener("click", e => {
    const b = e.target.closest("[data-plan]"); if (!b) return;
    curPlan = b.dataset.plan; renderPlans(); drawPlan();
  });
  $("#planBody").addEventListener("click", e => { const s = e.target.closest("[data-step]"); if (s) openDetail(s.dataset.step); });

  // ── oylar ──
  $("#myName").value = myName;
  $("#myName").addEventListener("input", e => { myName = e.target.value.replace(/[:,#]/g, "").trim(); store.set("tg_name", myName); renderVotes(); });
  function shareURL() {
    const base = location.href.split("#")[0];
    return `${base}#oy=${encodeURIComponent(myName || "Arkadaş")}:${[...favs].join(",")}`;
  }
  $("#shareBtn").addEventListener("click", async () => {
    if (!favs.size) return toast("Önce birkaç yeri kalple işaretle");
    if (!myName) { $("#myName").focus(); return toast("Önce adını yaz"); }
    const url = shareURL(); const text = `${myName}'in Tiran listesi (${favs.size} yer). Açınca ortak sıralamaya eklenir:`;
    if (navigator.share) { try { await navigator.share({ title: "Tiran oylarım", text, url }); return; } catch (e) { /* iptal */ } }
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank", "noopener");
  });
  $("#copyBtn").addEventListener("click", async () => {
    if (!favs.size) return toast("Önce birkaç yeri kalple işaretle");
    try { await navigator.clipboard.writeText(shareURL()); toast("Link kopyalandı"); }
    catch (e) { prompt("Linki kopyala:", shareURL()); }
  });
  $("#resetGroup").addEventListener("click", () => {
    if (!confirm("Arkadaşlardan gelen oylar bu cihazdan silinsin mi? (Senin kalplerin kalır)")) return;
    group = {}; store.set("tg_group", group); renderVotes(); renderList(false);
  });
  function renderVotes() {
    const v = voters(), vc = voteCount(), names = Object.keys(v).sort();
    $("#shareHint").textContent = favs.size ? `${favs.size} yer seçtin. Gönderdiğin linke tıklayan arkadaşının ekranına senin oyların eklenir; onlar da kendi linklerini sana göndersin.` : "Henüz kalp yok. Keşfet sekmesinde kartlardaki ♥ işaretine dokun.";
    $("#voters").innerHTML = names.length ? names.map(n => `<span class="chip"><i style="background:${colorFor(n)}"></i>${esc(n)} · ${v[n].length}</span>`).join("") : `<span class="muted">Henüz oy yok.</span>`;
    const ranked = Object.entries(vc).sort((a, b) => b[1].length - a[1].length || byId[b[0]].score - byId[a[0]].score);
    $("#ranking").innerHTML = ranked.map(([id, who], i) => {
      const p = byId[id];
      return `<li class="rk" data-id="${id}"><span class="n">${i + 1}</span>${photo(p)}<div><b>${esc(p.name)}</b><span class="muted small">${esc(p.area)} · ${esc(p.price.txt)}</span>
        <div class="who">${who.map(n => `<span style="background:${colorFor(n)}">${esc(n)}</span>`).join("")}</div></div>
        <span class="cnt">${who.length}<svg viewBox="0 0 32 32">${I.heart}</svg></span></li>`;
    }).join("");
    const total = names.length;
    const common = ranked.filter(([, w]) => total > 1 && w.length === total).map(([id]) => byId[id]);
    $("#consensusBox").innerHTML = total > 1
      ? `<b>Herkesin ortak seçtiği yerler (${common.length})</b><p class="muted small">${common.length ? esc(common.map(p => p.name).join(" · ")) : "Henüz herkesin ortak seçtiği yer yok."}</p>
         <p class="small">Planlar sekmesindeki hazır planlardan hangisinin bu listeyi en iyi kapsadığı: <b>${esc(bestPlanFor(common.length ? common : ranked.slice(0, 8).map(([id]) => byId[id])))}</b></p>`
      : `<b>Nasıl çalışıyor?</b><p class="muted small">1) Adını yaz, 2) beğendiğin yerleri kalple, 3) "Listemi gruba gönder" ile WhatsApp grubuna at. Arkadaşların linke tıklayınca senin oyların onların ekranına eklenir. Aynısını onlar yapınca herkes ortak sıralamayı görür. Veriler sadece telefonlarınızda tutulur, sunucu yok.</p>`;
    $("#ranking").onclick = e => { const r = e.target.closest(".rk"); if (r) openDetail(r.dataset.id); };
  }
  function bestPlanFor(list) {
    const ids = new Set(list.map(p => p.id)); let best = null, bs = -1;
    PLANS.forEach(pl => { const inPl = new Set(pl.days.flatMap(d => d.steps.map(s => s[1]))); let s = 0; ids.forEach(i => inPl.has(i) && s++); if (s > bs) { bs = s; best = pl; } });
    return best ? `${best.name} (${bs}/${ids.size} yer)` : "—";
  }
  function importHash() {
    const m = location.hash.match(/^#oy=([^:]+):(.*)$/); if (!m) return false;
    const name = decodeURIComponent(m[1]).slice(0, 20).trim();
    const ids = m[2].split(",").filter(id => byId[id] && id !== "home");
    history.replaceState(null, "", location.pathname + location.search);
    if (!name) return false;
    if (name === myName) { toast("Bu senin kendi linkin"); return true; }
    group[name] = ids; store.set("tg_group", group);
    toast(`${name} adlı kişinin ${ids.length} oyu eklendi`);
    return true;
  }

  // ── bilgiler ──
  function renderInfo() {
    const priced = PLACES.filter(p => !p.cats.includes("food") && !p.cats.includes("practical"));
    const kl = planCost(PLANS[0]);
    const rows = [
      ["Havalimanı taksisi (geliş)", 830, "2.500 L ÷ 3 kişi"],
      ["Havalimanı taksisi (dönüş, gece)", 1000, "≈2.500–3.000 L ÷ 3"],
      ["Şehir içi taksiler (Bunk'Art 1, Bektaşi vb.)", 1000, "≈3–4 yolculuk ÷ 3"],
      ["Müze ve teleferik girişleri (Klasik plan)", kl.sum, "Planlar sekmesindeki hesaba göre"],
      ["Kahvaltılar (2 gün)", 800, "Byrek + kahve ≈300–500 L"],
      ["Öğle yemekleri (2 gün)", 2600, "≈1.000–1.500 L"],
      ["Akşam yemekleri (2 gün)", 4000, "≈1.500–2.500 L"],
      ["Kahve, tatlı, raki, atıştırma", 1500, "Espresso ≈100–150 L"],
      ["Bagaj emaneti (gerekirse)", 500, "≈3–6 € / bavul"],
      ["Hediyelik", 0, "Size kalmış"]
    ];
    const tot = rows.reduce((a, r) => a + r[1], 0);
    $("#infoBody").innerHTML = `
      <h1>Gezi bilgileri</h1>
      <p class="muted lead">Ulaşım, konaklama, ücretler, bütçe, pratik bilgiler ve tarih. Son güncelleme: 19 Kasım 2026.</p>

      <div class="alert">
        <b>3 kritik nokta</b><br>
        1) Dönüş uçağı <b>23 Kasım Pazartesi 02:35</b>, yani <b>Pazar gecesi</b>. 22 Kasım akşamı en geç 00:15'te havalimanında olun.<br>
        2) Konaklama ilanda <b>20–22 Kasım</b> görünüyor: Pazar sabahı çıkış var. Geç çıkış ya da bagaj için ev sahibine şimdiden yazın.<br>
        3) Tiran, Türkiye'den <b>2 saat geride</b> (TR 12:00 = Tiran 10:00). Telefonunuz otomatik ayarlar, ama alarmları kontrol edin.
      </div>

      <section class="info-sec">
        <h2>Uçuşlar</h2>
        <dl class="kv">
          <dt>Gidiş · PC283</dt><dd>20 Kasım <b>Cuma</b> 22:55 İstanbul (SAW) → 22:40 Tiran (yerel saat). Uçuş ≈1 sa 45 dk.</dd>
          <dt>Dönüş · PC284</dt><dd>23 Kasım <b>Pazartesi</b> 02:35 Tiran → ≈06:15 İstanbul (TR saati). Pratikte Pazar gecesi.</dd>
          <dt>Pasaport</dt><dd>Türk vatandaşlarına vize yok (90 gün). Pasaportla gidin.</dd>
          <dt>Havalimanı</dt><dd>Tirana International Airport “Nënë Tereza” (TIA), Rinas. Şehre 17 km, küçük ve hızlı bir havalimanı.</dd>
        </dl>
      </section>

      <section class="info-sec">
        <h2>Konaklama</h2>
        <dl class="kv">
          <dt>Adres</dt><dd>${esc(HOME.address)}<br><span class="muted small">Yeni Pazar'ın (Pazari i Ri) yanı, Skanderbeg Meydanı'na ≈8 dk yürüme. Haritadaki konum yaklaşıktır.</span></dd>
          <dt>Tarih</dt><dd>İlana göre 20–22 Kasım (2 gece). Uçuş Pazartesi 02:35 olduğu için Pazar günü bagaj sorunu var.</dd>
          <dt>Bagaj çözümü</dt><dd>1) Ev sahibinden geç çıkış ya da bagaj bırakma isteyin (en kolayı). 2) Olmazsa Stasher, Bounce ya da Radical Storage'tan meydan yakınında bavul başı günlük ≈3–6 €'luk nokta ayırtın; açılış ve kapanış saatlerine bakın. 3) Son çare: üçüncü bir geceyi rezerve etmek.</dd>
        </dl>
        <h3>Ev sahibinin yol tarifi</h3>
        <div class="cols2">
          <div class="card-box"><b>Taksi (en kolay)</b><p class="small muted">Resmi havalimanı taksisiyle doğrudan daireye. 25–45 dk, sabit ücret <b>2.000–2.500 L (20–25 €)</b>. 3 kişiye bölününce kişi başı ≈700–850 L.</p></div>
          <div class="card-box"><b>Otobüs (LU-NA)</b><p class="small muted">Havalimanı servis otobüsü saat başı kalkıyor, <b>400 L (4 €)</b>. Skanderbeg Meydanı'nda Kültür Sarayı'nın arkasında iniyor. Oradan Yeni Pazar içinden düz ve kolay 10 dakikalık yürüyüş.</p></div>
        </div>
        <p class="small"><b>Önerimiz:</b> 22:40 varışta ve 02:35 dönüşte <b>taksi</b>. Gece otobüs seferleri düzensiz, 3 kişi için taksi farkı küçük. Dönüş taksisini Pazar öğlen ev sahibine ya da bir taksi firmasına ayarlatın.</p>
      </section>

      <section class="info-sec">
        <h2>Şehir içi ulaşım</h2>
        <dl class="kv">
          <dt>Yürüyerek</dt><dd>Merkez, Blloku, Piramit, Kale ve Yeni Pazar birbirine 5–20 dakika. Plan Cumartesi'yi tamamen yürüyerek yapıyor.</dd>
          <dt>Taksi</dt><dd>Açılış ≈300–350 L (gece daha yüksek), sonra km başına ≈95–120 L. Taksimetreyi açtırın ya da fiyatı önceden konuşun. Merkezden Bunk'Art 1 ya da Dajti ≈700–1.000 L, Bektaşi Merkezi ≈400–600 L.</dd>
          <dt>Şehir otobüsü</dt><dd>Bilet ≈40–50 L, şoföre ya da görevliye nakit. Dajti teleferiğine merkezden otobüs de var ama 3 kişi için taksi daha pratik.</dd>
          <dt>Günübirlik</dt><dd>Krujë ve Durrës otobüsleri şehir dışındaki <b>Kuzey-Güney Otogarı</b>'ndan (Terminali Veri-Jug) kalkıyor, ≈200 L. Krujë için 3 kişi şoförlü araç ya da pazarlıklı taksi tutmak (gidiş-dönüş + bekleme) daha rahat.</dd>
        </dl>
      </section>

      <section class="info-sec">
        <h2>Bütün giriş ücretleri</h2>
        <p class="muted small">Başlığa tıklayarak sıralayın. 100 L ≈ 1 €. Müze gişelerinin çoğu sadece nakit kabul ediyor. “teyit” yazanlar kaynaklar arasında çelişkili.</p>
        <div class="tbl-wrap"><table id="priceTbl"><thead><tr><th data-k="name">Yer</th><th data-k="area">Bölge</th><th data-k="lek">Ücret</th><th data-k="hours">Saatler</th></tr></thead><tbody></tbody></table></div>
      </section>

      <section class="info-sec">
        <h2>Tahmini bütçe (kişi başı)</h2>
        <div class="tbl-wrap"><table class="mini-tbl"><tbody>
          ${rows.map(r => `<tr><td>${esc(r[0])}</td><td class="num">${r[1] ? "≈" + fmt(r[1]) + " L" : "—"}</td><td class="muted">${esc(r[2])}</td></tr>`).join("")}
          <tr><td>Toplam</td><td class="num"><b>≈${fmt(tot)} L</b></td><td><b>≈${Math.round(tot / 100)} €</b> (uçak ve konaklama hariç)</td></tr>
        </tbody></table></div>
      </section>

      <section class="info-sec">
        <h2>Pratik bilgiler</h2>
        <dl class="kv">
          <dt>Para</dt><dd>Arnavut leki (ALL, “L”). 100 L ≈ 1 €. Merkezde kart çoğu yerde geçiyor ama müzeler, taksiler ve byrekçiler için nakit lek bulundurun. ATM'de “kendi para biriminizle çekim” (dönüştürme) teklifini reddedin. Euro bazı yerlerde geçer ama kur kötü olur.</dd>
          <dt>İnternet</dt><dd>Arnavutluk AB dışında, Türk hatlarının yurt dışı paketleri pahalı olabilir. Seyahat eSIM'i ya da havalimanında Vodafone AL veya One yerel hat iyi bir seçenek.</dd>
          <dt>Priz</dt><dd>Tip C/F, 230 V. Türkiye ile aynı, adaptöre gerek yok.</dd>
          <dt>Hava</dt><dd>Kasım sonu gündüz ≈13–17 °C, gece ≈5–8 °C. Kasım yılın en yağışlı aylarından: şemsiye ve su geçirmez ayakkabı alın. Dajti zirvesi 6–8 °C daha soğuk. Gün batımı ≈16:15.</dd>
          <dt>Cami ziyareti</dt><dd>Diz ve omuz kapalı, ayakkabılar çıkarılıyor. Ethem Bey ve Namazgah'ta namaz vakitlerinde ziyaret kısıtlı.</dd>
          <dt>Güvenlik</dt><dd>Tiran güvenli bir şehir. Kalabalıkta cüzdana dikkat, havalimanında resmi olmayan taksilere binmeyin. Trafik karışık, yaya geçidinde bile dikkatli olun.</dd>
          <dt>Bahşiş</dt><dd>Restoranda ≈%10 yeterli.</dd>
          <dt>Kapalı günler</dt><dd>Yapraklar Evi pazartesi kapalı (Pz 10–15). Dajti teleferiği salı kapalı. Ulusal Tarih Müzesi 2028'e kadar kapalı.</dd>
        </dl>
      </section>

      <section class="info-sec">
        <h2>Ne yenir?</h2>
        <div class="cols2">
          <dl class="kv">
            <dt>Byrek</dt><dd>Peynirli, ıspanaklı, kıymalı. Kahvaltının vazgeçilmezi.</dd>
            <dt>Fërgesë</dt><dd>Biber, domates ve çökelek benzeri peynirle yapılan Tiran usulü güveç.</dd>
            <dt>Tavë kosi</dt><dd>Yoğurt ve yumurta soslu fırında kuzu. Ulusal yemek.</dd>
            <dt>Qofte</dt><dd>Izgara köfte. Adı da Türkçeden.</dd>
          </dl>
          <dl class="kv">
            <dt>Kukurec</dt><dd>Kokoreç. Dajti'de ya da yerel ızgaracılarda.</dd>
            <dt>Trileçe</dt><dd>Karamelli üç sütlü kek. Balkanlar'da çok popüler tatlı.</dd>
            <dt>Raki</dt><dd>Üzüm (rrushi) ya da dut rakısı. Anason yok, rakıdan farklı.</dd>
            <dt>Çaj mali</dt><dd>Dağ çayı. Yeni Pazar'dan paket alın.</dd>
          </dl>
        </div>
      </section>

      <section class="info-sec">
        <h2>Mini sözlük</h2>
        <div class="cols2">
          <dl class="kv">
            <dt>Mirëdita</dt><dd>İyi günler</dd>
            <dt>Faleminderit</dt><dd>Teşekkürler</dd>
            <dt>Po / Jo</dt><dd>Evet / Hayır</dd>
            <dt>Sa kushton?</dt><dd>Ne kadar?</dd>
            <dt>Llogarinë, ju lutem</dt><dd>Hesap lütfen</dd>
            <dt>Gëzuar!</dt><dd>Şerefe!</dd>
            <dt>Ku është…?</dt><dd>… nerede?</dd>
            <dt>Mirupafshim</dt><dd>Hoşça kalın</dd>
          </dl>
          <div class="card-box" style="margin:0"><b>Tanıdık gelecek kelimeler</b>
            <p class="small muted">Arnavutçada yüzlerce Türkçe kökenli kelime var: <b>xhami</b> (cami), <b>pazar</b>, <b>sahat</b> (saat), <b>çaj</b> (çay), <b>dyqan</b> (dükkân), <b>qoftë</b> (köfte), <b>sheqer</b> (şeker), <b>jastëk</b> (yastık), <b>jorgan</b>, <b>kat</b>, <b>boja</b> (boya), <b>hamall</b>, <b>bakllava</b>, <b>papuçe</b>, <b>oda</b>.</p>
            <p class="small muted">İngilizce ve İtalyanca yaygın. Bazı Arnavutlar “evet” derken başını Türkiye'deki “hayır” hareketine benzer şekilde yana sallayabilir, şaşırmayın.</p>
          </div>
        </div>
      </section>

      <section class="info-sec">
        <h2>Tiran ve Arnavutluk tarihi: zaman çizelgesi</h2>
        <ul class="tl">${window.TIMELINE.map(t => `<li><b>${esc(t[0])}</b>${esc(t[1])}</li>`).join("")}</ul>
      </section>

      <section class="info-sec" style="border:0">
        <h2>Kaynaklar</h2>
        <ul class="src">
          <li><a href="https://tirana.al/en/points-of-interest/museums/the-museum-of-secret-surveillance:--house-of-leaves" target="_blank" rel="noopener">tirana.al · House of Leaves</a></li>
          <li><a href="https://tirana.al/en/points-of-interest/museums/bunk-art-2" target="_blank" rel="noopener">tirana.al · Bunk'Art 2</a></li>
          <li><a href="https://dajtiekspres.com/rates-and-opening-hours/" target="_blank" rel="noopener">Dajti Ekspres · ücret ve saatler</a></li>
          <li><a href="https://euronews.al/en/?p=67413" target="_blank" rel="noopener">Euronews Albania · Tarih Müzesi 4 yıl kapalı</a></li>
          <li><a href="https://kryegjyshataboterorebektashiane.org/en/the-bektashee-museum/" target="_blank" rel="noopener">Kryegjyshata · Bektaşi Müzesi</a></li>
          <li><a href="https://en.wikipedia.org/wiki/World_Headquarters_of_the_Bektashi" target="_blank" rel="noopener">Wikipedia · Bektaşi Dünya Merkezi</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Namazgah_Mosque" target="_blank" rel="noopener">Wikipedia · Namazgah Camii</a></li>
          <li><a href="https://www.inyourpocket.com/tirana/museum-of-secret-surveillance-house-of-leaves_144008v" target="_blank" rel="noopener">In Your Pocket · House of Leaves</a></li>
          <li><a href="https://www.inyourpocket.com/albania/tirana/venues/bektashi-world-centre" target="_blank" rel="noopener">In Your Pocket · Bektashi World Centre</a></li>
          <li><a href="https://www.triplinkhub.com/en/blog/tirana-airport-transfer-all-options-and-prices" target="_blank" rel="noopener">Triplinkhub · havalimanı ulaşımı</a></li>
          <li><a href="https://albaniatourguide.com/how-to-get-from-tirana-airport-to-city-centre/" target="_blank" rel="noopener">Albania Tour Guide · havalimanı otobüsü</a></li>
          <li><a href="https://albaniatourguide.com/tirana-bus-terminal-national-international-buses-2025-update/" target="_blank" rel="noopener">Albania Tour Guide · otogar</a></li>
          <li><a href="https://www.saltinourhair.com/albania/kruje" target="_blank" rel="noopener">Salt in Our Hair · Krujë</a></li>
          <li><a href="https://www.nomads-travel-guide.com/places/sari-salltik-cave" target="_blank" rel="noopener">Nomads · Sarı Saltuk mağarası</a></li>
          <li><a href="https://alfapress.al/english/jete/hap-dyert-muzeu-arkeologjik-ekspozohen-3200-artefakte-bashke-me-bukuroshen--i192235" target="_blank" rel="noopener">Alfa Press · Durrës Arkeoloji Müzesi açıldı</a></li>
          <li><a href="https://www.atlasobscura.com/places/communist-era-statues" target="_blank" rel="noopener">Atlas Obscura · Lenin/Stalin heykelleri</a></li>
          <li><a href="https://www.nomads-travel-guide.com/places/petrela-castle/" target="_blank" rel="noopener">Nomads · Petrela Kalesi</a></li>
          <li><a href="https://www.inyourpocket.com/526ca" target="_blank" rel="noopener">In Your Pocket · taksi ücretleri</a></li>
          <li><a href="https://radicalstorage.com/luggage-storage/tirana/city-center/luggage-storage-near-skanderbeg-square" target="_blank" rel="noopener">Radical Storage · meydan yakını emanet</a></li>
          <li><a href="https://www.stasher.com/luggage-storage/albania/tirana" target="_blank" rel="noopener">Stasher · Tiran emanet</a></li>
          <li><a href="https://www.guruwalk.com/tirana/" target="_blank" rel="noopener">GuruWalk · Tiran ücretsiz turları</a></li>
          <li><a href="https://www.freetour.com/tirana/tirana-walking-tour-culture-history" target="_blank" rel="noopener">FreeTour.com · Tiran yürüyüş turu</a></li>
          <li><a href="https://www.headout.com/day-trips/tirana-raki-tasting-and-albanian-meze-pairing-guided-by-raki-expert-e-45594/" target="_blank" rel="noopener">Headout · Raki & meze tadımı</a></li>
          <li><a href="https://www.expedia.com/things-to-do/cooking-classes-and-traditional-food-tasting-in-tirana.a995852.activity-details" target="_blank" rel="noopener">Expedia · Tiran yemek kursu</a></li>
          <li><a href="https://www.theworlds50best.com/bars/the-list/nouvelle-vague.html" target="_blank" rel="noopener">World's 50 Best Bars · Nouvelle Vague</a></li>
          <li><a href="https://www.inyourpocket.com/tirana/Hemingway_118543v" target="_blank" rel="noopener">In Your Pocket · Hemingway Bar</a></li>
          <li><a href="https://www.tirana.al/en/points-of-interest/attractions-and-sights/the-installation-the-cloud-by-sou-fujimoto" target="_blank" rel="noopener">tirana.al · Reja (Sou Fujimoto)</a></li>
          <li><a href="https://www.visit-tirana.com/?p=5418" target="_blank" rel="noopener">Visit Tirana · Pëllumbas Mağarası</a></li>
          <li><a href="https://www.civitatis.com/en/tirana/bovilla-lake-gamti-mountain-day-trip" target="_blank" rel="noopener">Civitatis · Bovilla & Gamti yürüyüşü</a></li>
          <li><a href="https://ca.trip.com/things-to-do/detail/97837465" target="_blank" rel="noopener">Trip.com · Bovilla ATV turu</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Prez%C3%AB_Castle" target="_blank" rel="noopener">Wikipedia · Preza Kalesi</a></li>
          <li><a href="https://www.inyourpocket.com/albania/tirana/venues/uka-farm" target="_blank" rel="noopener">In Your Pocket · Uka Farm</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Elbasan_Castle" target="_blank" rel="noopener">Wikipedia · Elbasan Kalesi</a></li>
          <li><a href="https://en.wikipedia.org/wiki/King_Mosque,_Elbasan" target="_blank" rel="noopener">Wikipedia · Elbasan Hünkâr Camii</a></li>
          <li><a href="https://www.nomads-travel-guide.com/places/skanderbeg-memorial/" target="_blank" rel="noopener">Nomads · İskender Bey Anıt Mezarı</a></li>
          <li><a href="https://www.tourhq.com/tours/48630/full-day-trip-to-lezhe-mrizi-i-zanave-agrotourism" target="_blank" rel="noopener">TourHQ · Lezhë & Mrizi i Zanave</a></li>
          <li><a href="https://albania.al/activity/culture/marubi-national-museum-of-photography" target="_blank" rel="noopener">albania.al · Marubi Fotoğraf Müzesi</a></li>
          <li><a href="https://www.freetour.com/durres/cape-of-rodon-escape-history-coastline-castle-day-tour-from-tirana" target="_blank" rel="noopener">FreeTour.com · Rodon Burnu</a></li>
          <li><a href="https://albaniantimes.al/?p=8648" target="_blank" rel="noopener">Albanian Times · TKOB Kasım programı</a></li>
          <li><a href="https://fshf.org/en/abissnet-superiore-will-begin-on-august-22-the-commission-of-leagues-and-competitions-sets-the-calendar-for-the-first-2-matchweeks/" target="_blank" rel="noopener">FSHF · Abissnet Superiore fikstürü</a></li>
        </ul>
      </section>`;

    // fiyat tablosu
    let sk = "lek", asc = true;
    const tb = $("#priceTbl tbody");
    const drawT = () => {
      const arr = priced.slice().sort((a, b) => {
        let x = a[sk] ?? (sk === "lek" ? a.price.lek : ""), y = b[sk] ?? (sk === "lek" ? b.price.lek : "");
        if (sk === "lek") { x = a.price.lek ?? 99999; y = b.price.lek ?? 99999; }
        return (x > y ? 1 : x < y ? -1 : 0) * (asc ? 1 : -1);
      });
      tb.innerHTML = arr.map(p => `<tr data-id="${p.id}" style="cursor:pointer"><td><b>${esc(p.name)}</b>${p.status ? ' <span title="Dikkat">⚠️</span>' : ""}</td><td>${esc(p.area)}</td><td class="num">${esc(p.price.txt)}${p.price.note ? `<br><span class="muted small">${esc(p.price.note)}</span>` : ""}</td><td class="muted small">${esc(p.hours)}</td></tr>`).join("");
    };
    $("#priceTbl thead").addEventListener("click", e => { const th = e.target.closest("th"); if (!th) return; const k = th.dataset.k; asc = sk === k ? !asc : true; sk = k; drawT(); });
    tb.addEventListener("click", e => { const r = e.target.closest("tr"); if (r) openDetail(r.dataset.id); });
    drawT();
  }

  // ── başlat ──
  renderList(curCat !== "all");
  renderPlans();
  renderInfo();
  updateFavCount();
  const HASH_VIEWS = { "#kesfet": "explore", "#planlar": "plans", "#oylar": "votes", "#bilgiler": "info" };
  const hashView = HASH_VIEWS[location.hash];
  const imported = importHash();
  window.addEventListener("hashchange", () => {
    if (importHash()) { show("votes"); renderList(false); return; }
    if (HASH_VIEWS[location.hash]) show(HASH_VIEWS[location.hash]);
  });
  show(imported ? "votes" : (hashView || store.get("tg_view", "explore") || "explore"));
  const openParam = QS.get("yer");
  if (openParam && byId[openParam]) openDetail(openParam);
})();
