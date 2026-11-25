// Renders the page from data.js. You normally don't need to edit this file.
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  $("about-text").textContent = SITE.about;

  $("facts").innerHTML = Object.entries(SITE.facts)
    .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
    .join("");

  $("legend").innerHTML = SITE.lines
    .map((l) => `<li><span class="swatch" style="background:${esc(l.color)}"></span>${esc(l.name)}</li>`)
    .join("");

  $("lines-list").innerHTML = SITE.lines.map((l) => `
    <article class="card" style="--card-color:${esc(l.color)}">
      <h3>${esc(l.name)}</h3>
      <p class="meta">${[l.route, l.length, l.type].filter(Boolean).map(esc).join(" &middot; ")}</p>
      <p>${esc(l.description)}</p>
      <div class="chips">${l.stops.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
    </article>`).join("");

  $("fleet-list").innerHTML = SITE.fleet.map((f) => `
    <article class="card">
      <h3>${esc(f.name)}</h3>
      <p class="meta">${esc(f.role)}</p>
      <p>${esc(f.description)}</p>
      <div class="chips">${f.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    </article>`).join("");

  // Steps may contain simple <code> tags, so they are written as trusted HTML.
  $("ride-steps").innerHTML = SITE.ride.map((s) => `<li>${s}</li>`).join("");

  const body = $("stations-body");
  function renderStations(filter) {
    const q = (filter || "").toLowerCase();
    body.innerHTML = SITE.stations
      .filter((s) => !q || (s.name + " " + s.lines.join(" ") + " " + s.notes).toLowerCase().includes(q))
      .map((s) => `<tr><td><strong>${esc(s.name)}</strong></td><td>${esc(s.lines.join(", "))}</td><td>${esc(s.district)}</td><td>${esc(s.notes)}</td></tr>`)
      .join("") || `<tr><td colspan="4">No stations match your search.</td></tr>`;
  }
  renderStations();
  $("station-filter").addEventListener("input", (e) => renderStations(e.target.value));
})();
