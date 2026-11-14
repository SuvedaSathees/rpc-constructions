/**
 * Projects page: a compact opening with the title, a line on what we build,
 * and chips that narrow the projects by status and by town; then each project
 * in words alone (no photographs or drawings): its type and status, name and
 * place, the waterproofing built into it in the order it goes in, what it is,
 * the story of its waterproofing, its structure and materials, and a way to
 * ask about something similar. /projects#slug lands on that project (the home
 * page links so).
 */
import { esc, mark, words, type ContactInfo, type PageOptions } from "./kit";
import { SEARCH_BAR_CSS, searchBar } from "./search-bar";
import { PLACES, METHODS } from "../methods/data";

export interface ProjectData {
  slug: string;
  name: string;
  location: string;
  type: string;
  status: string;
  image: string;
  summary: string;
  area?: string;
  year?: string;
  clientType?: string;
  /** the story of its waterproofing */
  story?: string;
  waterproofing?: string;
  structuralSystem?: string;
  materials?: string;
}
export interface ProjectsData {
  projects: readonly ProjectData[];
  contact: ContactInfo;
}

export const PROJECTS_TRAIL = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
] as const;

const town = (location: string) => location.split(",").pop()?.trim() ?? location;
const dot = (s: string) => (s === "Completed" ? "done" : s === "Under construction" ? "live" : "plan");
const STATUS_ORDER = ["Completed", "Under construction", "In design"];
/** "HDPE membrane under the raft · DPC · …" → its layers, in the order they go in */
const layersOf = (p: ProjectData) =>
  (p.waterproofing ?? "")
    .split("·")
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1));

const pin = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 14.5s-4.6-3.9-4.6-7.6a4.6 4.6 0 0 1 9.2 0c0 3.7-4.6 7.6-4.6 7.6z" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="8" cy="6.9" r="1.6" fill="currentColor"/></svg>`;

/** one project as a simple card: where it stands, its name and town, a line on it, and the waterproofing built in */
function row(p: ProjectData) {
  const layers = layersOf(p);
  const text = [p.name, p.location, p.type, p.status, p.summary, p.waterproofing ?? "", p.materials ?? ""].join(" ").toLowerCase();
  return `<article class="pj-row" id="${esc(p.slug)}" data-town="${esc(town(p.location))}" data-status="${esc(p.status)}" data-text="${esc(text)}" aria-labelledby="pj-${esc(p.slug)}">
  ${p.image ? `<figure class="pj-pic"><img src="${esc(p.image)}" width="1376" height="768" alt="${esc(`${p.name}, ${p.location}`)}" loading="lazy" decoding="async"></figure>` : `<figure class="pj-pic pj-pic--none" aria-hidden="true"></figure>`}
  <p class="pj-top"><span class="pj-stat" data-s="${dot(p.status)}"><i class="pj-st" data-s="${dot(p.status)}"></i>${esc(p.status)}</span><span class="pj-type">${esc(p.type)}</span></p>
  <h2 class="pj-name" id="pj-${esc(p.slug)}">${esc(p.name)}</h2>
  <p class="pj-loc">${pin}${esc(p.location)}</p>
  <p class="pj-lead">${esc(p.summary)}</p>
  ${layers.length ? `<div class="pj-wp"><p class="pj-k">Waterproofing built in</p><ul class="pj-chips">${layers.map((l) => `<li>${esc(l)}</li>`).join("")}</ul></div>` : ""}
</article>`;
}

/**
 * The applications as one aerial view of a town like ours: each kind of building is
 * a numbered point on it. Pick one and the box beside it zooms into that
 * building and shows our project of that kind.
 */
const SCENE = "/images/projects/applications-scene.webp";
/** each building in the view: a landmark project of ours with its zoom coordinates and data */
const SPOTS: readonly { key: string; label: string; x: number; y: number; slug?: string; title?: string; lead?: string; place?: string }[] = [
  { key: "library", label: "Kalaignar Library", x: 24, y: 58, slug: "kalaignar-centenary-library-madurai" },
  { key: "campus", label: "IIT Palakkad", x: 25, y: 36, slug: "iit-palakkad" },
  { key: "highway", label: "Chithode Highway", x: 55, y: 52, slug: "sathyamangalam-chithode-highway" },
  { key: "factory", label: "VinFast Factory", x: 78, y: 45, slug: "vinfast-thoothukudi-plant" },
  { key: "irrigation", label: "Athikadavu Scheme", x: 83, y: 74, slug: "athikadavu-avinashi-scheme" },
];
function sceneMarkup(ps: readonly ProjectData[]) {
  const step = (i: number) =>
    `<span class="pjs-step"><button type="button" data-step="-1" aria-label="Previous landmark">‹</button><span>${i + 1} / ${SPOTS.length}</span><button type="button" data-step="1" aria-label="Next landmark">›</button></span>`;
  /* under the photo: the landmark's name, where it is, and the way on to its card */
  const panel = (sp: (typeof SPOTS)[number], i: number) => {
    const pr = sp.slug ? ps.find((p) => p.slug === sp.slug) : undefined;
    const name = pr ? pr.name : (sp.title ?? sp.label);
    const where = pr ? `<p class="pjs-loc">${pin}<span>${esc(pr.location)}</span></p>` : "";
    const cta = pr
      ? `<a href="#${esc(pr.slug)}" class="pjs-cta"><span>Explore project</span><svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M8 3v10M3 8l5 5 5-5"/></svg></a>`
      : "";
    const fact = (k: string, v?: string) => (v ? `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>` : "");
    const facts = pr
      ? `<dl class="pjs-facts">${fact("Client", pr.clientType)}${fact("Scale", pr.area)}${fact("Delivered", pr.year)}</dl>`
      : "";
    const stat = pr ? `<span class="pjs-stat" data-s="${dot(pr.status)}">${esc(pr.status)}</span>` : "";
    return `<div class="pjs-cap" data-spot-panel="${sp.key}"${i === 0 ? "" : " hidden"}>
      <div class="pjs-capn">${stat}<h3 class="pjs-name">${esc(name)}</h3>${where}</div>
      ${facts}
      <div class="pjs-capa">${step(i)}${cta}</div>
    </div>`;
  };
  return `<header class="pjs" aria-labelledby="pjs-h">
  <div class="pg-wrap">
    <div class="pjs-head">${mark("01", "Landmark typologies")}<h1 class="pj-h1" id="pjs-h" data-rv="words">${words("From libraries to highways, built to last.")}</h1></div>
    <div class="pjs-grid">
      <figure class="pjs-scene">
        <img src="${SCENE}" width="1376" height="768" alt="Aerial panorama of landmark civil and architectural infrastructure projects in Tamil Nadu: Kalaignar Library, IIT Palakkad, Chithode Highway, VinFast Plant, and Athikadavu Scheme" loading="lazy" decoding="async">
        ${SPOTS.map((sp, i) => `<button type="button" class="pjs-spot" data-spot="${sp.key}" style="left:${sp.x}%;top:${sp.y}%" aria-pressed="${i === 0}" aria-label="${esc(sp.label)}"><span class="pjs-n">${i + 1}</span><span class="pjs-tag">${esc(sp.label)}</span></button>`).join("")}
      </figure>
      ${SPOTS.map(panel).join("")}
    </div>
  </div>
</header>`;
}


export function projectsPageMarkup(d: ProjectsData, o: PageOptions = {}) {
  void o;
  const ps = d.projects;
  const count = (f: (p: ProjectData) => boolean) => ps.filter(f).length;
  const statuses = [...new Set(ps.map((p) => p.status))].sort((a, b) => STATUS_ORDER.indexOf(a) - STATUS_ORDER.indexOf(b));
  const towns = [...new Set(ps.map((p) => town(p.location)))];
  const bar = searchBar({
    label: "Search projects",
    placeholder: "Search projects",
    cls: "pj-bar",
    hidden: true,
    filters: [
      { key: "status", label: "Status", options: [{ value: "all", text: `All statuses (${ps.length})` }, ...statuses.map((st) => ({ value: st, text: `${st} (${count((p) => p.status === st)})` }))] },
      { key: "town", label: "Town", options: [{ value: "all", text: `All towns (${ps.length})` }, ...towns.map((t) => ({ value: t, text: `${t} (${count((p) => town(p.location) === t)})` }))] },
    ],
  });
  return `${sceneMarkup(ps)}
<section class="pj-hero" aria-labelledby="pj-h">
  <div class="pg-wrap">
    <div class="pj-herogrid">
      <div>${mark("02", "Projects")}<h2 class="pj-h1" id="pj-h" data-rv="words">${words("Projects built to stay&nbsp;dry.")}</h2></div>
      <div class="pj-heroside">
        ${bar}
        <p class="pj-showing" aria-live="polite">Showing all ${ps.length} projects</p>
      </div>
    </div>
  </div>
</section>
<section class="pj-listwrap" aria-label="Projects">
  <div class="pg-wrap">
    <div class="pj-list" id="project-list">${ps.map(row).join("\n")}</div>
    <p class="pj-empty" hidden>No projects match your search. <button type="button" data-reset>Show all projects</button></p>
  </div>
</section>`;
}

export const PROJECTS_CSS = SEARCH_BAR_CSS + `
/* Landmark typologies regional overview & interactive engineering dossier */
.pjs{padding:calc(var(--nav-room) + clamp(2rem,6vh,3.8rem)) 0 0;position:relative;isolation:isolate;overflow-x:clip;padding-top:0 !important}
.pjs-head{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:var(--head-h);box-sizing:border-box;padding:var(--nav-room) 0 var(--head-pb);margin-bottom:clamp(1.4rem,3.2vh,2.2rem) !important}
.pjs-head::before{content:"";position:absolute;z-index:-1;left:50%;width:100vw;margin-left:-50vw;top:0;bottom:0;background:linear-gradient(90deg,rgba(7,20,44,.9) 0%,rgba(7,20,44,.72) 50%,rgba(7,20,44,.45) 100%),linear-gradient(180deg,rgba(7,20,44,.55),rgba(7,20,44,0) 35%),url("/images/hero-final.jpg") center 42%/cover no-repeat #0b2350}
.pjs-head .pg-mark{color:rgba(245,240,230,.78);margin-bottom:.9rem}
.pjs-head .pg-idx{color:#9fbbe6}
.pjs-head .pj-h1{color:#fff;text-shadow:0 2px 20px rgba(0,0,0,.25)}

.pjs-grid{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:1.3rem;align-items:stretch;max-width:1180px;margin-inline:auto}
.pjs-scene{position:relative;align-self:start;width:100%;margin:0;aspect-ratio:1376/768;overflow:hidden;border-radius:18px;background:#1a2836;box-shadow:0 30px 60px -40px rgba(18,34,59,.55);border:1px solid rgba(18,34,59,.12)}
.pjs-scene img{display:block;width:100%;height:100%;object-fit:cover}

/* Numbered interactive pins */
.pjs-spot{position:absolute;z-index:2;display:block;width:2rem;height:2rem;margin:-1rem 0 0 -1rem;padding:0;border:0;background:none;font:inherit;cursor:pointer}
.pjs-spot:hover,.pjs-spot:focus-visible,.pjs-spot[aria-pressed=true]{z-index:4}
.pjs-n{position:relative;display:grid;place-items:center;width:2rem;height:2rem;border-radius:50%;background:#ffffff;color:var(--navy);font-size:.88rem;font-weight:700;box-shadow:0 8px 20px -4px rgba(4,12,30,.65),0 0 0 2px rgba(255,255,255,.9);transition:background-color .2s,color .2s,transform .2s,box-shadow .2s}
.pjs-n::after{content:"";position:absolute;inset:-6px;border-radius:50%;border:2px solid rgba(255,255,255,.8);opacity:0;animation:pjs-ring 2.6s ease-out infinite}
@keyframes pjs-ring{0%{opacity:.9;transform:scale(.8)}100%{opacity:0;transform:scale(1.5)}}
.pjs-tag{position:absolute;left:50%;bottom:calc(100% + .55rem);padding:.35rem .75rem;border-radius:999px;background:rgba(7,20,44,.88);color:#fff;font-size:.8rem;font-weight:600;line-height:1.2;white-space:nowrap;backdrop-filter:blur(8px);box-shadow:0 6px 18px -4px rgba(0,0,0,.4);opacity:0;transform:translateX(-50%) translateY(4px);transition:opacity .2s,transform .2s;pointer-events:none}
.pjs-spot:hover .pjs-tag,.pjs-spot:focus-visible .pjs-tag,.pjs-spot[aria-pressed=true] .pjs-tag{opacity:1;transform:translateX(-50%)}
.pjs-spot:hover .pjs-n{transform:scale(1.12)}
.pjs-spot[aria-pressed=true] .pjs-n{background:var(--navy);color:#fff;box-shadow:0 0 0 3px #fff,0 8px 24px -4px rgba(7,20,44,.8)}
.pjs-spot:focus-visible{outline:none}
.pjs-spot:focus-visible .pjs-n{outline:3px solid #f2c14e;outline-offset:3px}
.pjs-spot[data-spot=irrigation] .pjs-tag{left:auto;right:0;transform:translateY(4px)}
.pjs-spot[data-spot=irrigation]:hover .pjs-tag,.pjs-spot[data-spot=irrigation]:focus-visible .pjs-tag,.pjs-spot[data-spot=irrigation][aria-pressed=true] .pjs-tag{transform:none}

/* Side architectural dossier panel */

/* Header: Blueprint Midnight Technical Strip */
.pjs-st{display:inline-block;width:6px;height:6px;border-radius:50%}
.pjs-st[data-s=done]{background:#4caf50;box-shadow:0 0 6px #4caf50}
.pjs-st[data-s=live]{background:#ffb300;box-shadow:0 0 6px #ffb300}
.pjs-st[data-s=plan]{background:#64b5f6;box-shadow:0 0 6px #64b5f6}
.pjs-cat{flex:none;padding:.14rem .48rem;border-radius:5px;background:rgba(255,255,255,.14);font-size:.65rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#e8f0fe}

/* Body: Spec strip, narrative & waterproofing checklist */
.pjs-body{display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:1.1rem 1.3rem 1rem;gap:.9rem;overflow:hidden}

/* Waterproofing matrix */

/* Footer strip */
.pjs-cap{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:1.1rem;padding:1.7rem 1.75rem;border-radius:16px;background:var(--card);box-shadow:0 22px 46px -30px rgba(7,20,44,.5)}
.pjs-cap[hidden]{display:none}
.pjs-capn{min-width:0;width:100%}
.pjs-stat{display:inline-flex;align-items:center;gap:.4rem;margin:0 0 .6rem;padding:.26rem .7rem;border-radius:999px;font-size:.78rem;font-weight:600}
.pjs-stat::before{content:"";width:7px;height:7px;border-radius:50%;background:currentColor}
.pjs-stat[data-s=done]{background:rgba(46,125,50,.12);color:#2e7d32}
.pjs-stat[data-s=live]{background:rgba(199,122,0,.14);color:#a86400}
.pjs-stat[data-s=plan]{background:rgba(39,86,160,.12);color:var(--accent)}
.pjs-facts{width:100%;flex:1 1 auto;margin:0;padding:0;display:flex;flex-direction:column}
.pjs-facts > div{display:flex;flex:1 1 auto;align-items:center;justify-content:space-between;gap:1rem;padding:.72rem 0;border-top:1px solid rgba(18,34,59,.1)}
.pjs-facts > div:last-child{border-bottom:1px solid rgba(18,34,59,.1)}
.pjs-facts dt{margin:0;flex:none;font-size:.84rem;color:var(--mute)}
.pjs-facts dd{margin:0;min-width:0;font-size:.94rem;font-weight:600;line-height:1.35;color:var(--navy);text-align:right;overflow-wrap:anywhere}
.pjs-cap .pjs-name{margin:0;font-weight:700;letter-spacing:-.015em;color:var(--navy);overflow-wrap:anywhere}
.pjs-cap .pjs-loc{display:flex;align-items:center;min-width:0;gap:.4rem;margin:.3rem 0 0;font-size:clamp(.86rem,.8rem + .22vw,1rem);color:var(--ink2)}
.pjs-cap .pjs-loc svg{flex:none;width:1.05em;height:1.05em;color:var(--accent)}
.pjs-capa{display:flex;align-items:center;gap:.8rem;flex:none}
@media (max-width:1365px){
  .pjs-grid{gap:1rem}
  .pjs-cap{gap:1rem;padding:1.25rem 1.35rem}
  .pjs-capa{width:100%;justify-content:space-between}
}
.pjs-step{display:inline-flex;align-items:center;gap:.5rem;font-size:.9rem;font-weight:600;font-variant-numeric:tabular-nums;color:var(--mute)}
.pjs-step button{display:grid;place-items:center;width:2.2rem;height:2.2rem;border:0;border-radius:50%;background:#ffffff;border:1px solid rgba(18,34,59,.15);font:inherit;font-size:1.05rem;line-height:1;color:var(--navy);cursor:pointer;box-shadow:0 2px 5px -2px rgba(18,34,59,.1);transition:background-color .2s,border-color .2s,transform .15s}
.pjs-step button:hover{background:var(--navy);color:#fff;border-color:var(--navy);transform:scale(1.05)}
.pjs-step button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.pjs-cta{display:inline-flex;align-items:center;gap:.4rem;height:2.7rem;padding:0 1.15rem;border-radius:8px;background:var(--navy);color:#f5f0e6;font-size:.9rem;font-weight:600;text-decoration:none;box-shadow:0 3px 10px -3px rgba(11,35,80,.35);transition:background-color .2s,transform .15s}
.pjs-cta:hover{background:var(--accent);color:#fff;transform:translateY(-1px)}
.pjs-cta svg{flex:none;transition:transform .2s}
.pjs-cta:hover svg{transform:translateY(2px)}

/* below the widest layout the card has to fit inside the view's height, so the
   rows between the rules carry less padding of their own and stretch instead */
@media (max-width:1439px){
  .pjs-facts > div{padding:.5rem 0}
}
/* the narrow two-column band: the view is at its shortest here, so the card
   pairs scale with delivered on one line and trims its own chrome to match */
@media (min-width:1024px) and (max-width:1199px){
  .pjs-cap{gap:.75rem;padding:1.15rem 1.3rem}
  .pjs-cap .pjs-loc{margin-top:.2rem}
  .pjs-facts{display:grid;grid-template-columns:1fr 1fr;column-gap:1.2rem;grid-auto-rows:1fr;align-content:stretch}
  .pjs-facts > div{padding:.36rem 0}
  .pjs-facts > div:first-child{grid-column:1/-1}
  .pjs-facts > div:nth-child(2){border-bottom:1px solid rgba(18,34,59,.1)}
  .pjs-facts dt{font-size:.8rem}
  .pjs-facts dd{font-size:.9rem}
  .pjs-stat{margin-bottom:.4rem;padding:.2rem .6rem;font-size:.74rem}
  .pjs-step button{width:2rem;height:2rem;font-size:1rem}
  .pjs-cta{height:2.45rem;padding:0 .95rem;font-size:.86rem}
}
/* tablet: the view takes the full width and the card under it splits in two,
   the landmark on the left and its figures on the right */
@media (min-width:700px) and (max-width:1023px){
  .pjs-cap{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);column-gap:2rem;row-gap:1.1rem;align-items:start;padding:1.4rem 1.6rem}
  .pjs-capn{grid-column:1;grid-row:1}
  .pjs-facts{grid-column:2;grid-row:1 / span 2;align-self:stretch}
  .pjs-capa{grid-column:1;grid-row:2;align-self:end;width:100%;justify-content:space-between}
}

@media (min-width:768px) and (max-width:1439px){
  .pjs-body{padding:.9rem 1.05rem .85rem;gap:.7rem}
}
@media (prefers-reduced-motion:reduce){.pjs-n::after{animation:none}}
@media (max-width:1023px){
  .pjs-grid{grid-template-columns:minmax(0,1fr)}
}
@media (max-width:480px){
}
@media (max-width:599px){.pjs-tag{display:none}.pjs-n{width:1.7rem;height:1.7rem}.pjs-spot{width:1.7rem;height:1.7rem;margin:-.85rem 0 0 -.85rem}}
/* each project card opens with its photo, whole, at its own proportions */
.pj-pic{margin:-1.3rem -1.35rem 1rem;aspect-ratio:1376/768;overflow:hidden;border-radius:18px 18px 0 0;background:#d9d0bf}
.pj-pic img{display:block;width:100%;height:100%;object-fit:cover}
/* a project whose photo has not come in yet: the same block, hatched, so the row keeps its shape */
.pj-pic--none{background:repeating-linear-gradient(135deg,#ddd5c6 0 10px,#d5ccba 10px 20px)}
.pj-row.pj-next{justify-content:center;gap:.6rem;padding-bottom:1.35rem;background:var(--navy);box-shadow:none}
.pj-row.pj-next .pj-type{color:rgba(245,240,230,.7)}
.pj-row.pj-next .pj-name{color:#fff}
.pj-row.pj-next .pj-lead{display:block;-webkit-line-clamp:unset;overflow:visible;color:rgba(245,240,230,.82)}
.pj-row.pj-next .pg-btn{align-self:flex-start;margin-top:.6rem;background:#f5f0e6;color:var(--navy)}
@media (max-width:699px){.pj-pic{margin:-1.2rem -1.1rem 1rem}}
/* the opening: the title, and beside it a line on what we build and the choices */
.pj-hero{padding:clamp(3rem,8vh,5rem) 0 clamp(1.6rem,4vh,2.6rem)}
.pj-herogrid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:1.8rem clamp(2rem,5vw,6rem);align-items:end}
.pj-herogrid .pg-mark{margin-bottom:.9rem}
.pj-h1{margin:0;font-family:var(--display);font-weight:600;font-size:var(--fs-title);line-height:1.12;letter-spacing:-.02em;text-wrap:balance}
.pj-heroside{display:flex;flex-direction:column;gap:1.5rem;min-width:0;padding-bottom:.45rem}
.pj-heroside .pg-intro{margin:0}

/* the search bar, shown once scripts run */
.pj-heroside{align-self:end}
.pj-bar{max-width:42rem;margin-left:auto}
/* the running count is read out, not shown */
.pj-showing{position:absolute;width:1px;height:1px;margin:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}

/* the projects as cards, four to a row */
.pj-listwrap{padding:clamp(.4rem,1.6vh,1rem) 0 clamp(4.5rem,12vh,7.5rem)}
/* the cards: plain and even, four to a row. A flex row rather than a grid so a short
   last row (five projects, or a filtered few) sits centred instead of hanging left. */
.pj-list{--pj-gap:clamp(.9rem,1.5vw,1.2rem);display:flex;flex-wrap:wrap;justify-content:center;align-items:stretch;gap:var(--pj-gap)}
.pj-list > .pj-row{flex:0 1 calc((100% - 3 * var(--pj-gap)) / 4);min-width:0}
.pj-row{display:flex;flex-direction:column;padding:1.3rem 1.35rem 1.4rem;border-radius:18px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);scroll-margin-top:calc(var(--nav-bar,80px) + 1rem);transition:box-shadow .3s,transform .3s}
.pj-row:hover{box-shadow:inset 0 0 0 1px rgba(18,34,59,.28),0 24px 44px -34px rgba(18,34,59,.55);transform:translateY(-2px)}
.pj-row[hidden]{display:none}
.pj-row:target{box-shadow:inset 0 0 0 2px var(--accent),0 0 0 6px rgba(39,86,160,.1)}
.pj-top{display:flex;align-items:center;justify-content:space-between;gap:.6rem;margin:0}
.pj-stat{display:inline-flex;align-items:center;gap:.45rem;height:1.9rem;padding:0 .75rem;border-radius:999px;background:rgba(47,158,107,.12);font-size:var(--fs-body);font-weight:600;color:#1f7a4f}
.pj-stat[data-s=live]{background:rgba(232,162,21,.16);color:#9a6408}
.pj-stat[data-s=plan]{background:rgba(39,86,160,.12);color:var(--accent)}
.pj-st{flex:none;width:7px;height:7px;border-radius:50%;background:currentColor}
.pj-type{font-size:var(--fs-body);color:var(--mute)}
main .pj-row h2.pj-name{margin:1rem 0 0;font-family:var(--display);font-weight:500;font-size:.9rem!important;line-height:1.3!important;letter-spacing:-.01em;color:var(--ink);text-wrap:balance}
.pj-loc{display:flex;align-items:center;gap:.35rem;margin:.35rem 0 0;font-size:var(--fs-body);color:var(--mute)}
.pj-loc svg{flex:none;width:.95rem;height:.95rem}
.pj-lead{margin:.8rem 0 1.2rem;font-size:var(--fs-body);line-height:1.55;color:var(--ink2);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}
.pj-wp{margin-top:-.2rem}
.pj-k{margin:0 0 .45rem;font-size:var(--fs-body);font-weight:600;color:var(--ink)}
.pj-chips{display:flex;flex-wrap:wrap;gap:.35rem;margin:0;padding:0;list-style:none}
.pj-chips li{padding:.25rem .65rem;border-radius:8px;background:rgba(18,34,59,.06);font-size:var(--fs-body);line-height:1.4;color:var(--ink)}
.pj-wp{margin-bottom:1.2rem}
.pj-empty{margin:0;padding:3rem 0;text-align:center;font-size:var(--fs-body);color:var(--mute)}
.pj-empty button{border:0;border-bottom:1px solid currentColor;background:none;padding:0 0 2px;font:600 var(--fs-body) var(--sans);color:var(--ink);cursor:pointer}

/* below wide screens the title sits above the line and the choices */
@media (max-width:1199px){
  .pj-herogrid{grid-template-columns:1fr;align-items:start;gap:1.4rem}
  .pj-heroside{gap:1.3rem}
  .pj-heroside .pg-intro{max-width:40rem}
  /* the title is above it now, so the bar runs the width of the page rather than hanging right */
  .pj-bar{max-width:none;margin-left:0}
}
/* tablets and small laptops: still four to a row, on a tighter gap (the card's own
   chrome is scaled down in globals.css, where the card's sizes are set) */
@media (min-width:768px) and (max-width:1279px){.pj-list{--pj-gap:.6rem}}
@media (max-width:767px){
  .pj-bar{max-width:none}
  .pj-hero{padding:2.4rem 0 1.4rem}
  .pj-row{padding:1.2rem 1.1rem 1.2rem}
}

/* phones: the title band, the search, then the projects as small cards two to a row:
   the photograph with where the project stands on it, then its name and town (the aerial view and the long text are on larger screens) */
@media (max-width:767px){
  .pjs-grid{display:none}
  .pjs-head{margin-bottom:0 !important}
  .pj-hero{padding:1.1rem 0 .9rem}
  .pj-herogrid{gap:0}
  .pj-herogrid > div:first-child{display:none}
  .pj-heroside{padding-bottom:0}
  .pj-listwrap{padding:.1rem 0 3.2rem}
  /* phones: two to a row as well, on the smallest card */
  .pj-list{--pj-gap:.55rem}
  .pj-list > .pj-row{flex-basis:calc((100% - var(--pj-gap)) / 2)}
  .pj-list .pj-row{position:relative;padding:0 0 1rem;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 0 0 1px var(--line),0 14px 28px -22px rgba(18,34,59,.45)}
  .pj-list .pj-row:hover{transform:none}
  .pj-list .pj-pic{margin:0;border-radius:0;aspect-ratio:16/10}
  /* the state and the kind of building sit on the photograph, and the name below it
     is given its whole length rather than being cut off after two lines */
  .pj-list .pj-top{position:absolute;top:.6rem;left:.6rem;right:.6rem;justify-content:flex-start;gap:.4rem}
  .pj-list .pj-lead,.pj-list .pj-wp{display:none}
  .pj-list .pj-stat,.pj-list .pj-type{height:1.6rem;padding:0 .6rem;gap:.35rem;border-radius:999px;background:rgba(255,255,255,.95);font-size:var(--fs-body,1rem);font-weight:600;box-shadow:0 2px 8px -2px rgba(18,34,59,.35)}
  .pj-list .pj-type{display:inline-flex;align-items:center;color:var(--ink2)}
  main .pj-list .pj-row h2.pj-name{margin:.85rem .95rem 0;font-size:1.02rem!important;line-height:1.26!important;letter-spacing:-.01em;display:block;overflow:visible;min-height:0}
  .pj-list .pj-loc{margin:.3rem .95rem 0;font-size:var(--fs-body,1rem);line-height:1.35}
  .pj-list .pj-loc svg{width:.85rem;height:.85rem}
}
`;
