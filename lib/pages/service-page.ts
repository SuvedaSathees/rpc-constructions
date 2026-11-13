/**
 * A service's own page at /services/{slug}, built from its entry in
 * lib/service-pages. The order follows the research into the pages that rank
 * for these services: the answer and the ways to book first, then the signs,
 * the methods, the secondary-keyword sections, the products we use (each
 * opening on the products page), how the job runs, photos, the guarantee,
 * the questions, related services and our branches.
 *
 * Breadcrumb: Home › Services › {service}. Every page links to three related
 * services, to the three branch pages and to the products it uses, so no page
 * is a dead end and the branch pages are linked from every service.
 *
 * Shares its card, question and town styles with the branch pages
 * (LOCATIONS_CSS); SERVICE_PAGE_CSS adds what only these pages have.
 */
import type { Town } from "../locations";
import { productBySlug, SYSTEMS, type Product } from "../products";
import { imageSrc, mediaOf } from "../products/media";
import { servicePath, type Img, type ServicePage } from "../service-pages";
import { arrow, ctaBand, type ContactInfo, esc, pageHead, secHead, tel, two } from "./kit";
import { townPath } from "./locations";

export interface ServicePageData {
  page: ServicePage;
  /** every service page, for the related cards */
  all: readonly ServicePage[];
  towns: readonly Town[];
  contact: ContactInfo;
}

const wa = (c: ContactInfo, text: string) => `${c.whatsapp}?text=${encodeURIComponent(text)}`;
const prodName = (p: Product) => (p.name.toLowerCase().startsWith(p.brand.toLowerCase()) ? p.name : `${p.brand} ${p.name}`);
const img = (i: Img, w: number, h: number, eager = false) =>
  `<img src="${esc(i.src)}" width="${w}" height="${h}" alt="${esc(i.alt)}"${eager ? ` fetchpriority="high"` : ` loading="lazy"`} decoding="async">`;

/** why RPC, said once per kind of service */
const WHY: Record<ServicePage["kind"], readonly (readonly [string, string])[]> = {
  waterproofing: [
    ["Engineer-led inspection", "The leak is traced to its source before anything is suggested, free of charge."],
    ["Our own crews", "The people who quote the job do the job. No subcontractors on your site."],
    ["One method, in writing", "The system, the products and the area they cover, named before work starts."],
    ["Products we supply", "Fosroc, Sika, CCI and Berger, stored and mixed as their makers specify."],
    ["Tested before handover", "Terraces are pond-tested, tanks filled and wet areas flooded before we leave."],
    ["Three towns", "A head office in Erode and teams in Coimbatore and Krishnagiri."],
  ],
  building: [
    ["One contract", "Building and waterproofing under one team, with no gaps between trades."],
    ["Waterproofing built in", "Every terrace, bathroom and sump sealed and tested as the building goes up."],
    ["Engineer checks at each stage", "Each layer inspected before the next trade covers it."],
    ["Materials we supply", "Fosroc, Sika, CCI, Berger and Renacon, so you know what goes into your building."],
    ["ISO 9001:2015", "Work planned, checked and recorded to a written quality system."],
    ["Three towns", "A head office in Erode and teams in Coimbatore and Krishnagiri."],
  ],
};

export function servicePageMarkup(d: ServicePageData) {
  const { page: s, contact: c } = d;
  const name = esc(s.card);
  const quote = `/contact?service=${encodeURIComponent(s.card)}#enquiry`;
  const kindLabel = s.kind === "waterproofing" ? "Waterproofing services" : "Construction services";

  const crumbs = `<nav class="lc-crumbs" aria-label="Breadcrumb"><div class="pg-wrap"><ol><li><a href="/" data-internal>Home</a></li><li><a href="/services" data-internal>Services</a></li><li aria-current="page">${name}</li></ol></div></nav>`;

  const [p1 = "", ...more] = s.intro;
  const head = pageHead({
    trail: [{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: s.card, href: servicePath(s) }],
    label: kindLabel,
    title: esc(s.h1),
    intro: esc(p1) + more.map((p) => `</p><p class="pg-intro sp-intro">${esc(p)}`).join(""),
    actions: `<a class="pg-btn pg-btn--ink" href="${quote}" data-internal>Book a free site inspection${arrow}</a><a class="pg-btn pg-btn--line" href="${tel(c.phone)}">Call ${esc(c.phone)}</a><a class="pg-btn pg-btn--line" href="${esc(wa(c, `Hello RPC Constructions, I need help with ${s.card.toLowerCase()}. `))}" target="_blank" rel="noopener noreferrer">WhatsApp a photo</a>`,
    aside: `<figure class="sp-hero">${img(s.hero, 1200, 800, true)}<ul class="sp-badges">${s.badges.map(([b, t]) => `<li><b>${esc(b)}</b><span>${esc(t)}</span></li>`).join("")}</ul></figure>`,
    cls: "lc-head sp-head",
  });

  const signs = `<section class="pg-sec sp-signs" aria-labelledby="sp-signs-h">
  <div class="pg-wrap">
    ${secHead({ label: s.kind === "waterproofing" ? "Know the signs" : "Is this for you", title: esc(s.signs.title), lede: s.signs.lede ? esc(s.signs.lede) : undefined, id: "sp-signs-h" })}
    <ul class="lc-cards sp-cards3">${s.signs.items.map((x, i) => `<li class="lc-card" data-rv style="--d:${i * 50}ms"><span class="lc-no" aria-hidden="true">${two(i + 1)}</span><h3 class="lc-h3">${esc(x.title)}</h3><p>${esc(x.body)}</p></li>`).join("")}</ul>
  </div>
</section>`;

  const table = `<section class="pg-sec pg-sec--stone sp-table" aria-labelledby="sp-tab-h">
  <div class="pg-wrap">
    ${secHead({ label: s.kind === "waterproofing" ? "Methods" : "Scope", title: esc(s.table.title), lede: s.table.lede ? esc(s.table.lede) : undefined, id: "sp-tab-h" })}
    <div class="sp-tscroll" role="region" aria-labelledby="sp-tab-h" tabindex="0">
      <table class="sp-t"><thead><tr>${s.table.head.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${s.table.rows.map((r) => `<tr>${r.map((v, i) => (i === 0 ? `<th scope="row">${esc(v)}</th>` : `<td data-label="${esc(s.table.head[i] ?? "")}">${esc(v)}</td>`)).join("")}</tr>`).join("")}</tbody></table>
    </div>
    ${s.table.note ? `<p class="sp-note">${esc(s.table.note)}</p>` : ""}
  </div>
</section>`;

  const sections = s.sections
    .map(
      (x, i) => `<section class="pg-sec sp-sec${x.img ? " sp-sec--img" : ""}${i % 2 ? " pg-sec--stone" : ""}" id="${esc(x.id)}" aria-labelledby="sp-${esc(x.id)}">
  <div class="pg-wrap${x.img ? " lc-two" : " sp-narrow"}">
    <div>
      <h2 class="pg-h2 sp-h2" id="sp-${esc(x.id)}">${esc(x.title)}</h2>
      ${x.paras.map((p) => `<p class="lc-p">${esc(p)}</p>`).join("")}
      ${x.bullets?.length ? `<ul class="sp-bul">${x.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
    </div>
    ${x.img ? `<figure class="sp-fig">${img(x.img, 960, 640)}${x.img.caption ? `<figcaption>${esc(x.img.caption)}</figcaption>` : ""}</figure>` : ""}
  </div>
</section>`,
    )
    .join("\n");

  // the products we use for this work, each opening on the products page; the jobs open the products for that job
  const prods = s.products.slugs.map(productBySlug).filter((p): p is Product => Boolean(p));
  const jobs = (s.products.jobs ?? []).map((k) => SYSTEMS.find((x) => x.key === k)).filter((x): x is (typeof SYSTEMS)[number] => Boolean(x));
  const prodCard = (p: Product, i: number) => {
    const src = imageSrc(mediaOf(p.slug));
    return `<li class="lc-pcard" data-rv style="--d:${i * 50}ms">
      <a class="lc-pimg" href="/products#${esc(p.slug)}" data-internal tabindex="-1" aria-hidden="true">${src ? `<img src="${esc(src)}" width="320" height="320" alt="" loading="lazy" decoding="async">` : `<span class="lc-pmark">${esc(p.brand)}</span>`}</a>
      <p class="lc-pbrand">${esc(p.brand)}</p>
      <h3 class="lc-pname"><a href="/products#${esc(p.slug)}" data-internal>${esc(prodName(p))}</a></h3>
      <p class="lc-pcat">${esc(p.purpose)}</p>
      <div class="lc-pacts"><a class="pg-link lc-cardlink" href="/products#${esc(p.slug)}" data-internal>View product${arrow}</a><a class="lc-quote" href="${esc(wa(c, `Hello RPC Constructions, please share today's rate for ${prodName(p)}.`))}" target="_blank" rel="noopener noreferrer">Ask the rate</a></div>
    </li>`;
  };
  const products = prods.length
    ? `<section class="pg-sec pg-sec--stone lc-prods" id="products" aria-labelledby="sp-pr-h">
  <div class="pg-wrap">
    ${secHead({ label: "Materials", title: esc(s.products.title), lede: esc(s.products.lede), id: "sp-pr-h" })}
    ${jobs.length ? `<ul class="lc-jobs sp-jobs">${jobs.map((j) => `<li><a class="lc-job" href="/products#job-${esc(j.key)}" data-internal><span class="lc-jlabel">Products for the job</span><span class="lc-jname">${esc(j.name)}</span><span class="lc-jline">${esc(j.line)}</span><span class="lc-jmeta">${j.layers.length} layers, in order${arrow}</span></a></li>`).join("")}</ul>` : ""}
    <ul class="lc-pgrid sp-pgrid">${prods.map(prodCard).join("")}</ul>
    <p class="lc-more"><a class="pg-btn pg-btn--line" href="/products" data-internal>See all products${arrow}</a>${s.kind === "waterproofing" ? `<a class="pg-link" href="/waterproofing" data-internal>Compare the waterproofing methods${arrow}</a>` : ""}</p>
  </div>
</section>`
    : "";

  const process = `<section class="pg-sec sp-process" aria-labelledby="sp-pc-h">
  <div class="pg-wrap">
    ${secHead({ label: "How the job runs", title: esc(s.process.title), lede: s.process.lede ? esc(s.process.lede) : undefined, id: "sp-pc-h" })}
    <ol class="sp-steps">${s.process.steps.map((x, i) => `<li data-rv style="--d:${i * 50}ms"><span class="lc-sn" aria-hidden="true">${i + 1}</span><div><h3 class="lc-h3">${esc(x.title)}</h3><p>${esc(x.body)}</p></div></li>`).join("")}</ol>
  </div>
</section>`;

  const gallery = s.gallery.items.length
    ? `<section class="pg-sec pg-sec--stone sp-gallery" aria-labelledby="sp-gl-h">
  <div class="pg-wrap">
    ${secHead({ label: "From our sites", title: esc(s.gallery.title), id: "sp-gl-h" })}
    <ul class="sp-grid">${s.gallery.items.map((g) => `<li><figure class="sp-fig">${img(g, 960, 640)}${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}</figure></li>`).join("")}</ul>
  </div>
</section>`
    : "";

  const trust = `<section class="pg-sec sp-trust" aria-labelledby="sp-wr-h">
  <div class="pg-wrap lc-two">
    <div>
      ${secHead({ label: "Our guarantee", title: esc(s.warranty.title), id: "sp-wr-h" })}
      ${s.warranty.paras.map((p) => `<p class="lc-p">${esc(p)}</p>`).join("")}
    </div>
    <div>
      <h2 class="pg-h2 sp-h2">Why choose RPC Constructions</h2>
      <ul class="sp-why">${WHY[s.kind].map(([t, b]) => `<li><h3 class="lc-h3">${esc(t)}</h3><p>${esc(b)}</p></li>`).join("")}</ul>
    </div>
  </div>
</section>`;

  const faq = `<section class="pg-sec pg-sec--stone lc-faq" id="questions" aria-labelledby="sp-faq-h">
  <div class="pg-wrap lc-two">
    <div>${secHead({ label: "Questions", title: `${name}: your questions`, lede: `Not answered here? Call ${esc(c.phone)} or send a photo on WhatsApp.`, id: "sp-faq-h" })}</div>
    <div class="lc-qs">${s.faqs.map((f, i) => `<details class="lc-q"${i === 0 ? " open" : ""}><summary><h3>${esc(f.q)}</h3><span class="lc-qi" aria-hidden="true"></span></summary><p>${esc(f.a)}</p></details>`).join("")}</div>
  </div>
</section>`;

  const rel = s.related.map((k) => d.all.find((x) => x.slug === k)).filter((x): x is ServicePage => Boolean(x));
  const related = rel.length
    ? `<section class="pg-sec sp-related" aria-labelledby="sp-rl-h">
  <div class="pg-wrap">
    ${secHead({ label: "Related services", title: "Often needed together", id: "sp-rl-h" })}
    <ul class="sp-rgrid">${rel
      .map(
        (r) => `<li class="lc-scard"><a class="lc-simg" href="${servicePath(r)}" data-internal tabindex="-1" aria-hidden="true">${img({ src: r.hero.src, alt: "" }, 960, 600)}</a><div class="lc-sbody"><h3 class="lc-h3"><a href="${servicePath(r)}" data-internal>${esc(r.card)}</a></h3><p>${esc(r.description)}</p><div class="lc-sacts"><a class="pg-link lc-cardlink" href="${servicePath(r)}" data-internal>Learn more${arrow}</a></div></div></li>`,
      )
      .join("")}</ul>
    <p class="lc-more"><a class="pg-link" href="/services" data-internal>All services${arrow}</a></p>
  </div>
</section>`
    : "";

  const towns = `<section class="pg-sec pg-sec--stone lc-also" aria-labelledby="sp-tw-h">
  <div class="pg-wrap">
    ${secHead({ label: "Near you", title: `${name} in Erode, Coimbatore and Krishnagiri`, lede: "Our head office in Erode and our branch teams take on this work in and around each town. Open your town for its local services, products and areas.", id: "sp-tw-h" })}
    <ul class="lc-towns">${d.towns.map((t) => `<li><a class="lc-town" href="${townPath(t)}" data-internal><span class="lc-trole">${esc(t.role)}</span><span class="lc-tname">${esc(t.place ?? t.city)}</span>${arrow}</a></li>`).join("")}</ul>
  </div>
</section>`;

  const close = ctaBand(c, {
    title: s.kind === "waterproofing" ? `Book a free ${s.card.toLowerCase()} inspection.` : `Talk to us about your ${s.card.toLowerCase()} project.`,
    steps:
      s.kind === "waterproofing"
        ? [
            ["Send a photo or call", "A photo of the damp patch or crack on WhatsApp is enough to start."],
            ["An engineer visits", "Free of charge. We find where the water gets in before we suggest anything."],
            ["One method, one price", "The system, the products and the price in writing, before work starts."],
          ]
        : [
            ["Tell us about the site", "The plot or building, what you want to build or change, and when."],
            ["We visit and plan", "A site visit, the drawings and an itemised estimate in writing."],
            ["One team to the end", "Building and waterproofing under one contract, stage by stage."],
          ],
    reach: true,
  });

  return [head, crumbs, signs, table, sections, products, process, gallery, trust, faq, related, towns, close].join("\n");
}

export const SERVICE_PAGE_CSS = `
/* the opening: the photo with three facts under it */
.sp-head .pg-intro+.sp-intro{margin-top:.8rem}
.sp-hero{margin:0;overflow:hidden;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line)}
.sp-hero img{display:block;width:100%;aspect-ratio:3/2;object-fit:cover}
.sp-badges{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin:0;padding:0;list-style:none}
.sp-badges li{display:flex;flex-direction:column;gap:.15rem;padding:.9rem 1rem;border-top:1px solid var(--line)}
.sp-badges li+li{border-left:1px solid var(--line)}
.sp-badges b{font-family:var(--display);font-size:var(--fs-sub);font-weight:650;color:var(--navy)}
.sp-badges span{font-size:calc(var(--fs-body)*.84);line-height:1.4;color:var(--ink2)}
.sp-cards3{grid-template-columns:repeat(3,minmax(0,1fr))}
/* the methods / scope table */
.sp-tscroll{margin:clamp(1.4rem,3vh,2rem) 0 0;overflow-x:auto;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line)}
.sp-tscroll:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.sp-t{width:100%;min-width:640px;border-collapse:collapse;font-size:calc(var(--fs-body)*.95)}
.sp-t th,.sp-t td{padding:.85rem 1rem;border-bottom:1px solid var(--line);text-align:left;vertical-align:top;line-height:1.5}
.sp-t thead th{background:var(--navy);color:#fff;font-weight:600;font-size:calc(var(--fs-body)*.88)}
.sp-t tbody th{font-weight:650;color:var(--ink)}
.sp-t td{color:var(--ink2)}
.sp-t tbody tr:last-child th,.sp-t tbody tr:last-child td{border-bottom:0}
.sp-note{margin:1rem 0 0;max-width:48rem;font-size:calc(var(--fs-body)*.94);line-height:1.6;color:var(--ink2)}
/* keyword sections */
.sp-narrow{max-width:58rem}
.sp-h2{margin:0}
.sp-bul{display:grid;gap:.45rem;margin:1rem 0 0;padding:0 0 0 1.2rem;font-size:var(--fs-body);line-height:1.6;color:var(--ink2)}
.sp-fig{margin:0}
.sp-fig img{display:block;width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:8px}
.sp-fig figcaption{margin-top:.55rem;font-size:calc(var(--fs-body)*.88);line-height:1.45;color:var(--mute)}
/* products */
.sp-jobs{grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))}
.sp-pgrid{margin-top:clamp(1rem,2.4vh,1.4rem);grid-template-columns:repeat(3,minmax(0,1fr))}
/* how the job runs */
.sp-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(1rem,2vw,1.4rem);margin:clamp(1.6rem,4vh,2.4rem) 0 0;padding:0;list-style:none}
.sp-steps li{display:flex;gap:.9rem;padding:1.2rem;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line)}
.sp-steps .lc-h3{margin-top:.15rem}
.sp-steps p{margin:.4rem 0 0;font-size:calc(var(--fs-body)*.96);line-height:1.6;color:var(--ink2)}
/* photos */
.sp-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(.8rem,1.4vw,1.1rem);margin:clamp(1.4rem,3vh,2rem) 0 0;padding:0;list-style:none}
.sp-grid li:only-child{grid-column:span 2}
/* guarantee and why us */
.sp-why{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem 1.4rem;margin:1.2rem 0 0;padding:0;list-style:none}
.sp-why li{padding-top:.8rem;border-top:1px solid var(--line)}
.sp-why .lc-h3{margin:0;font-size:var(--fs-body)}
.sp-why p{margin:.3rem 0 0;font-size:calc(var(--fs-body)*.94);line-height:1.55;color:var(--ink2)}
/* related services */
.sp-rgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(.8rem,1.4vw,1.1rem);margin:clamp(1.4rem,3vh,2rem) 0 0;padding:0;list-style:none}

@media (max-width:1023px){
  .sp-cards3,.sp-steps,.sp-rgrid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sp-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sp-pgrid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:639px){
  .sp-cards3,.sp-steps,.sp-rgrid,.sp-why{grid-template-columns:1fr}
  .sp-badges{grid-template-columns:1fr}
  .sp-badges li+li{border-left:0}
  /* the table as one card per row, each value under its column name */
  .sp-tscroll{overflow:visible;background:none;box-shadow:none}
  .sp-t{min-width:0}
  .sp-t thead{display:none}
  .sp-t,.sp-t tbody,.sp-t tr,.sp-t th,.sp-t td{display:block}
  .sp-t tr{margin-bottom:.7rem;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);overflow:hidden}
  .sp-t tbody th{padding:.8rem 1rem;background:var(--navy);color:#fff;border:0}
  .sp-t td{padding:.6rem 1rem;border-bottom:1px solid var(--line)}
  .sp-t td::before{content:attr(data-label);display:block;margin-bottom:.15rem;font-size:calc(var(--fs-body)*.8);font-weight:600;color:var(--water)}
  .sp-t tbody tr td:last-child{border-bottom:0}
}
`;
