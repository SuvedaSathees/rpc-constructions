/**
 * The branch landing pages, one per town we work from, at
 * /waterproofing-in/{town} (Erode, Coimbatore, Krishnagiri), all
 * listed on /branches. The town is in the address, the title and the h1, so
 * each page answers "waterproofing in {town}" on its own.
 *
 * Built like a competitor's city page: breadcrumb (Home › Branches › town),
 * why buildings leak there, the leaks we fix most, the four services most
 * asked for there as picture cards, every other service as a link, then the
 * products we supply there, how we work, areas, guides, questions and the
 * other branches. Every service card opens that service and every product card
 * opens that product, so the page is a doorway into the rest of the site, not
 * a dead end.
 *
 * Services open on their own page (/services/terrace-waterproofing, from
 * lib/service-pages); a service without one opens on the services page.
 *
 * Products open on the products page, which reads the address: /products#{slug}
 * opens that product and /products#job-{key} opens the products for that job.
 *
 * Nothing is invented for a branch: a town with no address or number of its
 * own in lib/content.ts says that its visits are booked through the Erode head
 * office, and shows its own the moment they are added there.
 *
 * Plain strings, like the other inner pages, so the server renders every word.
 */
import type { Branch } from "../content";
import type { Town } from "../locations";
import { SERVICE_CATEGORIES, AREA_PURPOSE } from "../methods/doc";
import { productBySlug, SYSTEMS, type Product } from "../products";
import { imageSrc, mediaOf } from "../products/media";
import { servicePageBySlug } from "../service-pages";
import { arrow, ctaBand, type ContactInfo, esc, mapsLink, pageHead, secHead, serviceSlug, tel, two } from "./kit";

export interface TownData {
  town: Town;
  branch: Branch;
  towns: readonly Town[];
  contact: ContactInfo;
  /** the building services (residential, commercial, ...) as titles and lines */
  building: readonly { title: string; line?: string }[];
  /** how a job runs, in order */
  process: readonly { title: string; body: string }[];
  /** the guides this town's page points to */
  guides: readonly { slug: string; title: string; excerpt: string }[];
}

export const townPath = (t: Pick<Town, "slug">) => `/waterproofing-in/${t.slug}`;
/** where a service card goes: the service's own page, or the services page if it has none */
export const svcHref = (title: string) => {
  const slug = serviceSlug(title);
  return servicePageBySlug(slug) ? `/services/${slug}` : `/services#${slug}`;
};
const prodHref = (p: Pick<Product, "slug">) => `/products#${p.slug}`;
const jobHref = (key: string) => `/products#job-${key}`;
const ask = (o: { service?: string; city: string }) =>
  `/contact?${o.service ? `service=${encodeURIComponent(o.service)}&` : ""}city=${encodeURIComponent(o.city)}#enquiry`;
const waText = (wa: string, text: string) => `${wa}?text=${encodeURIComponent(text)}`;
const prodName = (p: Product) => (p.name.toLowerCase().startsWith(p.brand.toLowerCase()) ? p.name : `${p.brand} ${p.name}`);

/** the finished-job photo for each waterproofing service (the same ones the services page shows) */
const SVC_PHOTO: Readonly<Record<string, string>> = {
  terrace: "/images/rain/terrace-after.webp",
  bathroom: "/images/rain/bath-after.webp",
  tank: "/images/rain/tank-after.webp",
  basement: "/images/rain/basement-after.webp",
  balcony: "/images/rain/balcony-after.webp",
  walls: "/images/rain/wall-after.webp",
  podium: "/images/rain/podium-after.webp",
  cracks: "/images/rain/leak-after.webp",
};

const ic = {
  pin: `<svg class="lc-ic" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 14.5s4.8-4.3 4.8-8a4.8 4.8 0 0 0-9.6 0c0 3.7 4.8 8 4.8 8z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="6.5" r="1.7" fill="currentColor"/></svg>`,
  phone: `<svg class="lc-ic" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 2.5 6.6 5 5.3 6.5a8.4 8.4 0 0 0 4.2 4.2L11 9.4l2.5 1.4v2.2c0 .5-.4.9-.9.8A11.6 11.6 0 0 1 2.2 3.4c0-.5.3-.9.8-.9h2.2z"/></svg>`,
  clock: `<svg class="lc-ic" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="6"/><path d="M8 4.6V8l2.4 1.6"/></svg>`,
  rain: `<svg class="lc-ic" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4.5 9.5a3 3 0 0 1 .4-6 4 4 0 0 1 7.4 1.5 2.3 2.3 0 0 1-.3 4.5z"/><path d="M5.5 12l-.7 1.6M8.5 12l-.7 1.6M11.5 12l-.7 1.6"/></svg>`,
};

/** the branch's own details, or a plain note that its visits are booked through Erode */
function branchCard(b: Branch, c: ContactInfo, t: Town) {
  const phone = b.phone ?? c.phone;
  const rows = [
    b.address
      ? `<li>${ic.pin}<span>${esc(b.address)}</span></li>`
      : `<li>${ic.pin}<span>Site visits in ${esc(t.city)} are booked through our head office in Erode.</span></li>`,
    `<li>${ic.phone}<a class="lc-tel" href="${tel(phone)}">${esc(phone)}</a></li>`,
    `<li>${ic.clock}<span>${esc(c.hours)}</span></li>`,
  ];
  const maps = b.mapQuery ? `<a class="pg-link lc-cardlink" href="${esc(mapsLink(b.mapQuery))}" target="_blank" rel="noopener noreferrer">Open in Google Maps${arrow}</a>` : "";
  return `<aside class="lc-branch" aria-label="RPC Constructions in ${esc(t.city)}">
  <p class="lc-role">${esc(b.role)}</p>
  <p class="lc-bname">RPC Constructions, ${esc(t.city)}</p>
  <ul class="lc-rows">${rows.join("")}</ul>
  ${maps}
</aside>`;
}

/** the products to show for a town: the first product of each layer of its jobs, pack shots first, no repeats */
function featured(t: Town, max = 8): Product[] {
  const seen = new Set<string>();
  const out: Product[] = [];
  for (const key of t.systems) {
    const s = SYSTEMS.find((x) => x.key === key);
    for (const l of s?.layers ?? []) {
      const list = l.products.map(productBySlug).filter((p): p is Product => Boolean(p));
      const p = list.find((x) => imageSrc(mediaOf(x.slug))) ?? list[0];
      if (p && !seen.has(p.slug)) {
        seen.add(p.slug);
        out.push(p);
      }
    }
  }
  return out.slice(0, max);
}

export function townMarkup(d: TownData) {
  const { town: t, branch: b, contact: c } = d;
  const city = esc(t.city);
  const others = d.towns.filter((x) => x.slug !== t.slug);
  const first = t.focus.map((k) => SERVICE_CATEGORIES.find((s) => s.area === k)).filter((s): s is (typeof SERVICE_CATEGORIES)[number] => Boolean(s));
  const rest = SERVICE_CATEGORIES.filter((s) => !t.focus.includes(s.area));

  const head = pageHead({
    trail: [{ name: "Home", href: "/" }, { name: "Branches", href: "/branches" }, { name: t.city, href: townPath(t) }],
    label: `Waterproofing in ${t.city}`,
    title: `Waterproofing contractors in&nbsp;${esc(t.place ?? t.city)}.`,
    intro: esc(t.intro),
    actions: `<a class="pg-btn pg-btn--ink" href="${ask({ city: t.city })}" data-internal>Book a free site inspection${arrow}</a><a class="pg-btn pg-btn--line" href="${tel(b.phone ?? c.phone)}">Call ${esc(b.phone ?? c.phone)}</a><a class="pg-btn pg-btn--line" href="${esc(waText(c.whatsapp, `Hello RPC Constructions, I need waterproofing help in ${t.city}. `))}" target="_blank" rel="noopener noreferrer">WhatsApp a photo</a>`,
    aside: branchCard(b, c, t),
    cls: "lc-head",
  });

  const crumbs = `<nav class="lc-crumbs" aria-label="Breadcrumb"><div class="pg-wrap"><ol><li><a href="/" data-internal>Home</a></li><li><a href="/branches" data-internal>Branches</a></li><li aria-current="page">${city}</li></ol></div></nav>`;

  const facts = `<section class="lc-facts" aria-label="At a glance">
  <div class="pg-wrap"><ul class="lc-factlist">
    <li><b>${SERVICE_CATEGORIES.length}</b><span>waterproofing services in ${city}</span></li>
    <li><b>Free</b><span>site inspection, with the method and price in writing</span></li>
    <li><b>Tested</b><span>terraces, bathrooms and tanks are water-tested before handover</span></li>
    <li><b>${esc(t.role === "Head office" ? "Head office" : "Branch")}</b><span>${esc(t.role === "Head office" ? "the team that runs every RPC job" : `the ${t.city} team, backed by the Erode head office`)}</span></li>
  </ul></div>
</section>`;

  const why = `<section class="pg-sec lc-why" aria-labelledby="lc-why-h">
  <div class="pg-wrap lc-two">
    <div>${secHead({ label: "Local weather, local buildings", title: `Why buildings leak in ${city}`, id: "lc-why-h" })}
      ${t.why.map((p) => `<p class="lc-p">${esc(p)}</p>`).join("")}
    </div>
    <dl class="lc-climate">
      <div><dt>${ic.rain}Rainfall</dt><dd>${esc(t.climate.rainfall)}</dd></div>
      <div><dt>${ic.rain}Main rains</dt><dd>${esc(t.climate.season)}</dd></div>
      <div><dt>${ic.pin}Ground and buildings</dt><dd>${esc(t.climate.ground)}</dd></div>
    </dl>
  </div>
</section>`;

  const problems = `<section class="pg-sec pg-sec--stone lc-prob" aria-labelledby="lc-prob-h">
  <div class="pg-wrap">
    ${secHead({ label: "What we are called for", title: `The leaks we fix most in ${city}`, id: "lc-prob-h" })}
    <ul class="lc-cards">${t.problems
      .map((p, i) => {
        const s = SERVICE_CATEGORIES.find((x) => x.area === p.service);
        return `<li class="lc-card" data-rv style="--d:${i * 60}ms"><span class="lc-no" aria-hidden="true">${two(i + 1)}</span><h3 class="lc-h3">${esc(p.title)}</h3><p>${esc(p.body)}</p>${s ? `<a class="pg-link lc-cardlink" href="${svcHref(s.title)}" data-internal>${esc(s.title)}${arrow}</a>` : ""}</li>`;
      })
      .join("")}</ul>
  </div>
</section>`;

  // recommended: the four services most asked for here, as picture cards; every other service as a link
  const svcCard = (s: (typeof SERVICE_CATEGORIES)[number], i: number) => {
    const img = SVC_PHOTO[s.area];
    return `<li class="lc-scard" data-rv style="--d:${i * 60}ms">
      <a class="lc-simg" href="${svcHref(s.title)}" data-internal tabindex="-1" aria-hidden="true">${img ? `<img src="${esc(img)}" width="960" height="540" alt="" loading="lazy" decoding="async">` : ""}</a>
      <div class="lc-sbody">
        <h3 class="lc-h3"><a href="${svcHref(s.title)}" data-internal>${esc(s.title)} in ${city}</a></h3>
        <p>${esc(t.serviceNotes[s.area] ?? AREA_PURPOSE[s.area] ?? "")}</p>
        <div class="lc-sacts"><a class="pg-link lc-cardlink" href="${svcHref(s.title)}" data-internal>Learn more${arrow}</a><a class="lc-quote" href="${ask({ service: s.title, city: t.city })}" data-internal>Get a quote</a></div>
      </div>
    </li>`;
  };
  const services = `<section class="pg-sec lc-services" id="services" aria-labelledby="lc-svc-h">
  <div class="pg-wrap">
    ${secHead({ label: "Recommended for " + t.city, title: `Waterproofing services in ${city}`, lede: `The four services people in ${city} ask us for most. Open one for the method, the products and a quote.`, id: "lc-svc-h" })}
    <ul class="lc-sgrid">${first.map(svcCard).join("")}</ul>
    <div class="lc-also-svc">
      <h3 class="lc-h3">Also available in ${city}</h3>
      <ul class="lc-chips">${rest.map((s) => `<li><a href="${svcHref(s.title)}" data-internal>${esc(s.title)}</a></li>`).join("")}</ul>
      <h3 class="lc-h3">Building services in ${city}</h3>
      <ul class="lc-chips">${d.building.map((s) => `<li><a href="${svcHref(s.title)}" data-internal>${esc(s.title)}</a></li>`).join("")}<li><a class="lc-chip-all" href="/services" data-internal>All services${arrow}</a></li></ul>
    </div>
  </div>
</section>`;

  // products: the product set for each job first, then the products themselves, each opening on the products page
  const sys = t.systems.map((k) => SYSTEMS.find((s) => s.key === k)).filter((s): s is (typeof SYSTEMS)[number] => Boolean(s));
  const prods = featured(t);
  const prodCard = (p: Product, i: number) => {
    const img = imageSrc(mediaOf(p.slug));
    return `<li class="lc-pcard" data-rv style="--d:${i * 50}ms">
      <a class="lc-pimg" href="${prodHref(p)}" data-internal tabindex="-1" aria-hidden="true">${img ? `<img src="${esc(img)}" width="320" height="320" alt="" loading="lazy" decoding="async">` : `<span class="lc-pmark">${esc(p.brand)}</span>`}</a>
      <p class="lc-pbrand">${esc(p.brand)}</p>
      <h3 class="lc-pname"><a href="${prodHref(p)}" data-internal>${esc(prodName(p))}</a></h3>
      <p class="lc-pcat">${esc(p.category)}</p>
      <div class="lc-pacts"><a class="pg-link lc-cardlink" href="${prodHref(p)}" data-internal>View product${arrow}</a><a class="lc-quote" href="${esc(waText(c.whatsapp, `Hello RPC Constructions, please share today's rate for ${prodName(p)}, delivered in ${t.city}.`))}" target="_blank" rel="noopener noreferrer">Ask the rate</a></div>
    </li>`;
  };
  const products = `<section class="pg-sec pg-sec--stone lc-prods" id="products" aria-labelledby="lc-pr-h">
  <div class="pg-wrap">
    ${secHead({ label: "Construction chemicals", title: `Waterproofing products we supply in ${city}`, lede: `Fosroc, Sika, CCI and Berger products, the same ones our own teams use, delivered to your site in ${city}. Pick a job to see the products in the order they go on, or open a product for its details.`, id: "lc-pr-h" })}
    <ul class="lc-jobs">${sys
      .map(
        (s) => `<li><a class="lc-job" href="${jobHref(s.key)}" data-internal><span class="lc-jlabel">Products for the job</span><span class="lc-jname">${esc(s.name)}</span><span class="lc-jline">${esc(s.line)}</span><span class="lc-jmeta">${s.layers.length} layers${arrow}</span></a></li>`,
      )
      .join("")}</ul>
    <h3 class="lc-h3 lc-ptitle">Popular products in ${city}</h3>
    <ul class="lc-pgrid">${prods.map(prodCard).join("")}</ul>
    <p class="lc-more"><a class="pg-btn pg-btn--line" href="/products" data-internal>See all products${arrow}</a><a class="pg-link" href="/waterproofing" data-internal>Compare the waterproofing methods${arrow}</a></p>
  </div>
</section>`;

  const how = `<section class="pg-sec lc-how" aria-labelledby="lc-how-h">
  <div class="pg-wrap">
    ${secHead({ label: "How we work", title: `From the first call to a dry ceiling in ${city}`, id: "lc-how-h" })}
    <ol class="lc-steps">${d.process.map((p, i) => `<li><span class="lc-sn" aria-hidden="true">${i + 1}</span><div><h3 class="lc-h3">${esc(p.title)}</h3></div></li>`).join("")}</ol>
  </div>
</section>`;

  const areas = `<section class="pg-sec pg-sec--stone lc-areas" aria-labelledby="lc-ar-h">
  <div class="pg-wrap lc-two">
    <div>${secHead({ label: "Where we go", title: `Areas we cover in and around ${city}`, lede: esc(t.areasNote), id: "lc-ar-h" })}</div>
    <div>
      <h3 class="lc-h3">In ${city}</h3>
      <ul class="lc-chips lc-chips--plain">${t.localities.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>
      <h3 class="lc-h3">Around ${city}</h3>
      <ul class="lc-chips lc-chips--plain">${t.nearby.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>
    </div>
  </div>
</section>`;

  const guides = d.guides.length
    ? `<section class="pg-sec lc-guides" aria-labelledby="lc-gd-h">
  <div class="pg-wrap">
    ${secHead({ label: "Read before you book", title: `Guides for buildings in ${city}`, id: "lc-gd-h" })}
    <ul class="lc-cards">${d.guides.map((g) => `<li class="lc-card"><h3 class="lc-h3"><a href="/blog/${esc(g.slug)}" data-internal>${esc(g.title)}</a></h3><p>${esc(g.excerpt)}</p><a class="pg-link lc-cardlink" href="/blog/${esc(g.slug)}" data-internal>Read the guide${arrow}</a></li>`).join("")}</ul>
  </div>
</section>`
    : "";

  const faq = `<section class="pg-sec pg-sec--stone lc-faq" aria-labelledby="lc-faq-h">
  <div class="pg-wrap lc-two">
    <div>${secHead({ label: "Questions", title: `Waterproofing in ${city}: your questions`, id: "lc-faq-h" })}</div>
    <div class="lc-qs">${t.faqs.map((f, i) => `<details class="lc-q"${i === 0 ? " open" : ""}><summary><h3>${esc(f.q)}</h3><span class="lc-qi" aria-hidden="true"></span></summary><p>${esc(f.a)}</p></details>`).join("")}</div>
  </div>
</section>`;

  const also = `<section class="pg-sec lc-also" aria-labelledby="lc-also-h">
  <div class="pg-wrap">
    ${secHead({ label: "Our other branches", title: "Waterproofing in our other towns", id: "lc-also-h" })}
    <ul class="lc-towns">${others.map((o) => `<li><a class="lc-town" href="${townPath(o)}" data-internal><span class="lc-trole">${esc(o.role)}</span><span class="lc-tname">Waterproofing in ${esc(o.city)}</span>${arrow}</a></li>`).join("")}<li><a class="lc-town lc-town--all" href="/branches" data-internal><span class="lc-trole">Every town</span><span class="lc-tname">All branches</span>${arrow}</a></li></ul>
  </div>
</section>`;

  const close = ctaBand(c, {
    title: `Got a leak in ${t.city}? Let's find where it starts.`,
    steps: [
      ["Send a photo or call", `A photo of the damp patch on WhatsApp is enough to start, anywhere in ${t.city}.`],
      ["An engineer visits", "Free of charge. We trace the water to its source before we suggest anything."],
      ["The method and price in writing", "One method, the products named and the area it covers, before work starts."],
    ],
    reach: true,
  });

  return [head, crumbs, facts, why, problems, services, products, how, areas, guides, faq, also, close].join("\n");
}

export const LOCATIONS_CSS = `
/* the opening: the h1 and its actions, with the branch's own details beside them */
.lc-head .pg-actions{flex-wrap:wrap}
.lc-branch{padding:clamp(1.2rem,2.4vw,1.8rem);border-radius:8px;background:var(--navy);color:#f1ece1}
.lc-role{margin:0;font-size:calc(var(--fs-body)*.86);font-weight:600;letter-spacing:.02em;color:var(--water)}
.lc-branch .lc-role{color:#9fbbe6}
.lc-bname{margin:.25rem 0 0;font-family:var(--display);font-size:var(--fs-h3);font-weight:650;line-height:1.15;letter-spacing:-.02em;color:#fff}
.lc-rows{display:grid;gap:.6rem;margin:1rem 0 0;padding:1rem 0 0;border-top:1px solid rgba(241,236,225,.22);list-style:none}
.lc-rows li{display:flex;align-items:flex-start;gap:.6rem;font-size:calc(var(--fs-body)*.96);line-height:1.5;color:rgba(241,236,225,.88)}
.lc-ic{width:16px;height:16px;flex:none;margin-top:.2rem;color:var(--water)}
.lc-branch .lc-ic{color:#9fbbe6}
.lc-tel{font-weight:600;color:#fff;text-decoration:none}
.lc-tel:hover{color:#9fbbe6}
.lc-branch .lc-cardlink{margin-top:1rem;color:#9fbbe6}
.lc-crumbs{padding:.7rem 0;border-bottom:1px solid var(--line)}
.lc-crumbs ol{display:flex;flex-wrap:wrap;gap:.35rem;margin:0;padding:0;list-style:none;font-size:calc(var(--fs-body)*.9);color:var(--mute)}
.lc-crumbs li+li::before{content:"›";margin-right:.35rem;color:var(--mute)}
.lc-crumbs a{color:var(--accent);text-decoration:none}
.lc-crumbs a:hover{text-decoration:underline}
/* four facts in a row */
.lc-facts{padding:clamp(1.2rem,3vh,1.8rem) 0;border-bottom:1px solid var(--line)}
.lc-factlist{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;margin:0;padding:0;list-style:none}
.lc-factlist li{display:flex;flex-direction:column;gap:.2rem}
.lc-factlist b{font-family:var(--display);font-size:var(--fs-h3);font-weight:650;letter-spacing:-.02em;color:var(--navy)}
.lc-factlist span{font-size:calc(var(--fs-body)*.92);line-height:1.45;color:var(--ink2)}
/* a heading beside its text */
.lc-two{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(1.6rem,5vw,5rem);align-items:start}
.lc-p{margin:.9rem 0 0;max-width:40rem;font-size:var(--fs-body);line-height:1.7;color:var(--ink2)}
.lc-climate{display:grid;gap:.8rem;margin:0}
.lc-climate div{padding:1rem 1.2rem;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line)}
.lc-climate dt{display:flex;align-items:center;gap:.5rem;font-size:calc(var(--fs-body)*.86);font-weight:600;color:var(--water)}
.lc-climate dd{margin:.35rem 0 0;font-size:var(--fs-body);line-height:1.55;color:var(--ink)}
/* cards: problems and guides */
.lc-cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(.8rem,1.4vw,1.1rem);margin:clamp(1.6rem,4vh,2.4rem) 0 0;padding:0;list-style:none}
.lc-guides .lc-cards{grid-template-columns:repeat(3,minmax(0,1fr))}
.lc-card{position:relative;display:flex;flex-direction:column;padding:1.3rem;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line)}
.lc-card p{margin:.5rem 0 0;font-size:var(--fs-body);line-height:1.6;color:var(--ink2)}
.lc-no{font-family:var(--display);font-size:1.3rem;font-weight:650;color:rgba(18,34,59,.2)}
.lc-h3{margin:.4rem 0 0;font-family:var(--display);font-size:var(--fs-sub);font-weight:650;line-height:1.25;letter-spacing:-.01em;color:var(--ink)}
.lc-h3 a{color:inherit;text-decoration:none}
.lc-h3 a:hover{color:var(--accent)}
.lc-cardlink{display:inline-flex;align-items:center;gap:.4rem;margin-top:auto;padding-top:1rem;font-size:calc(var(--fs-body)*.94);font-weight:600;color:var(--accent);text-decoration:none}
.lc-cardlink:hover{color:var(--navy)}
.lc-quote{font-size:calc(var(--fs-body)*.9);font-weight:600;color:var(--ink2);text-decoration:underline;text-underline-offset:3px}
.lc-quote:hover{color:var(--accent)}
/* recommended services: picture cards, then the rest as links */
.lc-sgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(.8rem,1.4vw,1.1rem);margin:clamp(1.6rem,4vh,2.4rem) 0 0;padding:0;list-style:none}
.lc-scard{display:flex;flex-direction:column;overflow:hidden;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);transition:box-shadow .2s,transform .2s}
.lc-scard:hover{box-shadow:inset 0 0 0 1.5px var(--accent);transform:translateY(-2px)}
.lc-simg{display:block;aspect-ratio:16/10;background:var(--line)}
.lc-simg img{display:block;width:100%;height:100%;object-fit:cover}
.lc-sbody{display:flex;flex:1;flex-direction:column;padding:1.1rem 1.2rem 1.2rem}
.lc-sbody p{margin:.5rem 0 0;font-size:calc(var(--fs-body)*.96);line-height:1.6;color:var(--ink2)}
.lc-sacts,.lc-pacts{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.4rem 1rem;margin-top:auto}
.lc-also-svc{margin-top:clamp(1.8rem,4vh,2.6rem);padding-top:clamp(1.2rem,3vh,1.6rem);border-top:1px solid var(--line)}
.lc-also-svc .lc-h3+.lc-chips{margin-bottom:1.3rem}
.lc-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin:.9rem 0 0;padding:0;list-style:none}
.lc-chips li a,.lc-chips--plain li{display:inline-flex;align-items:center;gap:.35rem;padding:.45rem .85rem;border-radius:999px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);font-size:calc(var(--fs-body)*.92);color:var(--ink);text-decoration:none}
.lc-chips li a:hover{box-shadow:inset 0 0 0 1px var(--accent);color:var(--accent)}
.lc-chips li a.lc-chip-all{background:var(--navy);color:#fff;box-shadow:none}
.lc-chip-all .pg-ar{width:.9rem;height:.9rem}
.lc-areas .lc-h3{margin-top:1.2rem}
.lc-areas .lc-h3:first-child{margin-top:0}
/* products: the jobs, then product cards */
.lc-jobs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(.8rem,1.4vw,1.1rem);margin:clamp(1.6rem,4vh,2.4rem) 0 0;padding:0;list-style:none}
.lc-job{display:flex;flex-direction:column;gap:.3rem;height:100%;padding:1.15rem 1.2rem;border-radius:8px;background:var(--navy);color:#fff;text-decoration:none;transition:transform .2s}
.lc-job:hover{transform:translateY(-2px)}
.lc-jlabel{font-size:calc(var(--fs-body)*.82);font-weight:600;color:#9fbbe6}
.lc-jname{font-family:var(--display);font-size:var(--fs-sub);font-weight:650;letter-spacing:-.01em;line-height:1.2}
.lc-jline{font-size:calc(var(--fs-body)*.92);line-height:1.5;color:rgba(241,236,225,.82)}
.lc-jmeta{display:inline-flex;align-items:center;gap:.4rem;margin-top:auto;padding-top:.7rem;font-size:calc(var(--fs-body)*.88);font-weight:600;color:var(--accent)}
.lc-ptitle{margin-top:clamp(1.8rem,4vh,2.6rem)}
.lc-pgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(.8rem,1.4vw,1.1rem);margin:1rem 0 0;padding:0;list-style:none}
.lc-pcard{display:flex;flex-direction:column;padding:1rem 1.1rem 1.1rem;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);transition:box-shadow .2s}
.lc-pcard:hover{box-shadow:inset 0 0 0 1.5px var(--accent)}
.lc-pimg{display:grid;place-items:center;aspect-ratio:4/3;border-radius:6px;background:#fff;box-shadow:inset 0 0 0 1px var(--line)}
.lc-pimg img{display:block;width:72%;height:86%;object-fit:contain}
.lc-pmark{font-family:var(--display);font-size:1.4rem;font-weight:650;color:rgba(18,34,59,.25)}
.lc-pbrand{margin:.8rem 0 0;font-size:calc(var(--fs-body)*.82);font-weight:600;letter-spacing:.02em;color:var(--water)}
.lc-pname{margin:.15rem 0 0;font-family:var(--display);font-size:var(--fs-body);font-weight:650;line-height:1.3;color:var(--ink)}
.lc-pname a{color:inherit;text-decoration:none}
.lc-pname a:hover{color:var(--accent)}
.lc-pcat{margin:.25rem 0 .2rem;font-size:calc(var(--fs-body)*.9);line-height:1.45;color:var(--ink2)}
.lc-more{display:flex;flex-wrap:wrap;align-items:center;gap:1rem 1.6rem;margin:clamp(1.4rem,3vh,2rem) 0 0}
/* how we work */
.lc-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(1rem,2vw,1.6rem);margin:clamp(1.6rem,4vh,2.4rem) 0 0;padding:0;list-style:none}
.lc-steps li{display:flex;gap:.9rem}
.lc-sn{flex:none;display:grid;place-items:center;width:2rem;height:2rem;border-radius:50%;background:var(--navy);color:#fff;font-weight:650;font-size:calc(var(--fs-body)*.9)}
.lc-steps .lc-h3{margin-top:.15rem}
/* questions */
.lc-qs{display:grid;gap:.5rem}
.lc-q{border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line)}
.lc-q summary{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 1.2rem;cursor:pointer;list-style:none}
.lc-q summary::-webkit-details-marker{display:none}
.lc-q h3{margin:0;font-size:var(--fs-body);font-weight:600;line-height:1.4;color:var(--ink)}
.lc-qi{position:relative;flex:none;width:1.6rem;height:1.6rem;border-radius:50%;background:rgba(18,34,59,.07)}
.lc-qi::before,.lc-qi::after{content:"";position:absolute;left:50%;top:50%;width:.65rem;height:1.6px;margin:-.8px 0 0 -.325rem;background:var(--ink)}
.lc-qi::after{transform:rotate(90deg)}
.lc-q[open] .lc-qi::after{display:none}
.lc-q p{margin:0;padding:0 1.2rem 1.1rem;font-size:var(--fs-body);line-height:1.65;color:var(--ink2)}
.lc-q summary:focus-visible{outline:2px solid var(--accent);outline-offset:-2px;border-radius:8px}
/* the other towns */
.lc-towns{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(.8rem,1.4vw,1.1rem);margin:clamp(1.4rem,3vh,2rem) 0 0;padding:0;list-style:none}
.lc-town{display:flex;flex-direction:column;gap:.3rem;height:100%;padding:1.1rem 1.2rem;border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);text-decoration:none;color:var(--ink)}
.lc-town:hover{box-shadow:inset 0 0 0 1.5px var(--accent)}
.lc-trole{font-size:calc(var(--fs-body)*.84);font-weight:600;color:var(--water)}
.lc-tname{font-family:var(--display);font-size:var(--fs-sub);font-weight:650;letter-spacing:-.01em}
.lc-town .pg-ar{width:1rem;height:1rem;color:var(--accent);margin-top:auto}
.lc-town--all{background:var(--navy);color:#fff;box-shadow:none}
.lc-town--all .lc-trole,.lc-town--all .pg-ar{color:#9fbbe6}

@media (max-width:1023px){
  .lc-cards,.lc-sgrid,.lc-jobs{grid-template-columns:repeat(2,minmax(0,1fr))}
  .lc-pgrid{grid-template-columns:repeat(3,minmax(0,1fr))}
  .lc-guides .lc-cards{grid-template-columns:repeat(2,minmax(0,1fr))}
  .lc-factlist{grid-template-columns:repeat(2,minmax(0,1fr))}
  .lc-two{grid-template-columns:1fr}
  .lc-steps{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:639px){
  .lc-cards,.lc-sgrid,.lc-jobs,.lc-towns,.lc-steps,.lc-guides .lc-cards{grid-template-columns:1fr}
  .lc-pgrid,.lc-factlist{grid-template-columns:1fr 1fr}
}
`;
