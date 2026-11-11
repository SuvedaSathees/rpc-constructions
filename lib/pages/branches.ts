/**
 * The branches page: the four towns RPC works from. Erode is the head
 * office — the address from the visiting card, the hours, and a link that
 * opens it in Maps — and Coimbatore, Krishnagiri and Chennai are the towns
 * we run work out of. A branch with no address of its own says plainly that
 * its enquiries go through the head office, rather than showing one that
 * does not exist; the moment a branch is given an `address`, a `mapQuery` or
 * a `phone` in lib/content.ts, its card shows them.
 *
 * The page is the towns and nothing else: no opening blurb under the title
 * and no closing call-to-action band, so it says where we are and stops.
 * Each card carries its own way to book a visit.
 *
 * Plain strings, like the other inner pages, so the server renders every
 * word and the page reads in full before scripts arrive.
 */
import type { Branch } from "../content";
import { towns as TOWN_PAGES } from "../locations";
import { townPath } from "./locations";
import { arrow, type ContactInfo, esc, listing, mapsLink, pageHead, secHead, tel, two } from "./kit";

export interface BranchesData {
  branches: readonly Branch[];
  contact: ContactInfo;
}

const pin = `<svg class="br-ic" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 14.5s4.8-4.3 4.8-8a4.8 4.8 0 0 0-9.6 0c0 3.7 4.8 8 4.8 8z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="6.5" r="1.7" fill="currentColor"/></svg>`;
const phoneIc = `<svg class="br-ic" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 2.5 6.6 5 5.3 6.5a8.4 8.4 0 0 0 4.2 4.2L11 9.4l2.5 1.4v2.2c0 .5-.4.9-.9.8A11.6 11.6 0 0 1 2.2 3.4c0-.5.3-.9.8-.9h2.2z"/></svg>`;
const clockIc = `<svg class="br-ic" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="6"/><path d="M8 4.6V8l2.4 1.6"/></svg>`;

export function branchesMarkup(d: BranchesData) {
  const { contact: c } = d;
  const towns = d.branches.map((b) => b.city);

  const head = pageHead({
    trail: [{ name: "Home", href: "/" }, { name: "Branches", href: "/branches" }],
    label: "Branches",
    title: `Four towns, one&nbsp;standard of work.`,
  });

  const card = (b: Branch, i: number) => {
    const isHead = Boolean(b.address);
    const phone = b.phone ?? c.phone;
    const rows: string[] = [];
    if (b.address) rows.push(`<div class="br-row">${pin}<span>${esc(b.address)}</span></div>`);
    rows.push(`<div class="br-row">${phoneIc}<a class="br-tel" href="${tel(phone)}">${esc(phone)}</a></div>`);
    if (isHead) rows.push(`<div class="br-row">${clockIc}<span>${esc(c.hours)}</span></div>`);

    const town = TOWN_PAGES.find((t) => t.city === b.city);
    const acts = [
      town ? `<a class="pg-link br-act br-act--page" href="${townPath(town)}" data-internal>Services and products in ${esc(b.city)}${arrow}</a>` : "",
      b.mapQuery
        ? `<a class="pg-link br-act" href="${esc(mapsLink(b.mapQuery))}" target="_blank" rel="noopener noreferrer">Open in Maps${arrow}</a>`
        : "",
      `<a class="pg-link br-act" href="/contact#enquiry" data-internal>Book an inspection${arrow}</a>`,
    ]
      .filter(Boolean)
      .join("");

    return `<li class="br-card${isHead ? " br-card--head" : ""}" data-rv style="--d:${i * 70}ms">
      <span class="br-no" aria-hidden="true">${two(i + 1)}</span>
      <p class="br-role">${esc(b.role)}</p>
      <h3 class="br-city">${town ? `<a href="${townPath(town)}" data-internal>${esc(b.city)}</a>` : esc(b.city)}</h3>
      <p class="br-line">${esc(b.line)}</p>
      <div class="br-rows">${rows.join("")}</div>
      <div class="br-acts">${acts}</div>
    </li>`;
  };

  const list = `<section class="pg-sec br-sec" aria-labelledby="br-h">
  <div class="pg-wrap">
    ${secHead({ label: "Where we are", title: "The head office, and three towns we work from.", lede: "Every enquiry reaches the same team in Erode, whichever town your building is in.", id: "br-h" })}
    <ul class="br-grid" data-rv-stagger="70">${d.branches.map(card).join("")}</ul>
    <p class="br-note" data-rv>${pin}<span>Enquiries and site visits for ${esc(listing(towns.slice(1)))} are booked through the Erode head office.</span></p>
  </div>
</section>`;

  return `${head}\n${list}`;
}

export const BRANCHES_CSS = `
/* the four towns: the head office first, wider, then the three branches */
.br-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(.9rem,1.6vw,1.3rem);margin:clamp(2rem,5vh,3rem) 0 0;padding:0;list-style:none}
.br-card{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:clamp(1.3rem,2.4vw,1.9rem);border-radius:8px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line)}
.br-card--head{grid-column:1/-1;background:var(--navy);color:#f1ece1;box-shadow:none}
.br-no{position:absolute;top:clamp(1.1rem,2.2vw,1.7rem);right:clamp(1.1rem,2.2vw,1.7rem);font-family:var(--display);font-size:1.6rem;font-weight:650;line-height:1;color:rgba(18,34,59,.14)}
.br-card--head .br-no{color:rgba(241,236,225,.22)}
.br-role{margin:0;font-size:calc(var(--fs-body)*.86);font-weight:600;letter-spacing:.02em;color:var(--water)}
.br-card--head .br-role{color:#9fbbe6}
.br-city{margin:.3rem 0 0;font-family:var(--display);font-size:var(--fs-h3);font-weight:650;line-height:1.1;letter-spacing:-.02em;color:var(--ink)}
.br-card--head .br-city{color:#fff}
.br-city a{color:inherit;text-decoration:none}
.br-city a:hover{color:var(--accent)}
.br-line{margin:.6rem 0 0;max-width:34rem;font-size:var(--fs-body);line-height:1.6;color:var(--ink2)}
.br-card--head .br-line{color:rgba(241,236,225,.84)}
.br-rows{display:grid;gap:.55rem;margin-top:clamp(1rem,2vh,1.4rem);padding-top:clamp(1rem,2vh,1.4rem);border-top:1px solid var(--line);width:100%}
.br-card--head .br-rows{border-top-color:rgba(241,236,225,.22)}
.br-row{display:flex;align-items:flex-start;gap:.6rem;font-size:calc(var(--fs-body)*.96);line-height:1.5;color:var(--ink2)}
.br-card--head .br-row{color:rgba(241,236,225,.86)}
.br-card--head .br-no{display:none}
/* said once under the towns, rather than on each of the three cards */
.br-note{display:flex;align-items:flex-start;gap:.6rem;margin:clamp(1.1rem,2.4vh,1.6rem) 0 0;max-width:46rem;font-size:calc(var(--fs-body)*.94);line-height:1.55;color:var(--mute)}
.br-ic{width:16px;height:16px;flex:none;margin-top:.18rem;color:var(--water)}
.br-card--head .br-ic{color:#9fbbe6}
.br-tel{font-weight:600;color:var(--ink);text-decoration:none}
.br-tel:hover{color:var(--accent)}
.br-card--head .br-tel{color:#fff}
.br-card--head .br-tel:hover{color:#9fbbe6}
/* touch screens: the number keeps its look but gets a finger-sized tap area */
@media (pointer:coarse){
  .br-tel,.br-city a{position:relative}
  .br-tel::after,.br-city a::after{content:"";position:absolute;inset:-11px -6px}
}
.br-acts{display:flex;flex-wrap:wrap;gap:.4rem 1.2rem;margin-top:auto;padding-top:clamp(1rem,2vh,1.3rem)}
.br-act{display:inline-flex;align-items:center;gap:.4rem;font-size:calc(var(--fs-body)*.94);font-weight:600;color:var(--accent);text-decoration:none}
.br-act:hover{color:var(--navy)}
.br-card--head .br-act{color:#9fbbe6}
.br-card--head .br-act:hover{color:#fff}

/* the head office, wider: its words on the left, the address and the hours beside them */
@media (min-width:1024px){
  .br-card--head{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start;column-gap:clamp(2rem,5vw,5rem);row-gap:0}
  .br-card--head .br-role,.br-card--head .br-city,.br-card--head .br-line{grid-column:1}
  .br-card--head .br-rows{grid-column:2;grid-row:1/4;margin-top:0;padding-top:0;border-top:0;align-self:center}
  .br-card--head .br-acts{grid-column:1}
}

/* tablets: two towns side by side under the head office */
@media (max-width:1023px){
  .br-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
/* phones: one under the other */
@media (max-width:639px){
  .br-grid{grid-template-columns:1fr}
  .br-no{display:none}
}
`;
