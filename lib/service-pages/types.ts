/**
 * One service page at /services/{slug}: the text, the photos and the links
 * for one card on the services page. lib/pages/service-page.ts turns an entry
 * into the page; app/services/[slug]/page.tsx serves it.
 *
 * Built from the competitor and keyword research (Nov 2026): one primary
 * keyword per page (title, h1, first sentence, description), secondary
 * keywords as h2s, real customer questions as the FAQ. No prices until RPC
 * gives its own rates; photos are the ones already on the site.
 *
 * Text is plain (it is escaped when the page is built), so write "&" not "&amp;".
 */
export interface Img {
  /** a path under /public, e.g. "/images/waterproofing/terrace-slab-cutaway.jpg" */
  src: string;
  /** what the photo shows, in words (each photo its own alt, never repeated) */
  alt: string;
  caption?: string;
}

export interface ServicePage {
  /** the address: /services/{slug}. Must equal serviceSlug(card), so the card on /services links here */
  slug: string;
  /** the service's name as the /services card shows it ("Terrace waterproofing") */
  card: string;
  kind: "waterproofing" | "building";
  /** for waterproofing pages, the area key used across the site (terrace, bathroom, tank, ...) */
  area?: string;
  /** the <title> text; the site adds " | RPC Constructions" (keep it to 40 characters) */
  title: string;
  /** the meta description (155 characters at most), the primary keyword first */
  description: string;
  /** the primary keyword, as the page's h1 */
  h1: string;
  /** two short paragraphs under the h1; the first sentence answers the search */
  intro: readonly string[];
  /** three short facts beside the photo: [big, small] */
  badges: readonly (readonly [string, string])[];
  hero: Img;
  /** "Signs your terrace needs waterproofing": 4 to 6 cards */
  signs: { title: string; lede?: string; items: readonly { title: string; body: string }[] };
  /** the methods we use (waterproofing) or what we build (construction), as a table */
  table: { title: string; lede?: string; head: readonly string[]; rows: readonly (readonly string[])[]; note?: string };
  /** sections for the secondary keywords, each its own h2 (2 to 4) */
  sections: readonly { id: string; title: string; paras: readonly string[]; bullets?: readonly string[]; img?: Img }[];
  /** the products we use for this work: product slugs (lib/products/catalogue.ts), and jobs (SYSTEMS keys) */
  products: { title: string; lede: string; slugs: readonly string[]; jobs?: readonly string[] };
  /** how the job runs: 5 to 8 steps */
  process: { title: string; lede?: string; steps: readonly { title: string; body: string }[] };
  /** photos already on the site that show this work */
  gallery: { title: string; items: readonly Img[] };
  /** what we stand behind, in words (no years until RPC confirms them) */
  warranty: { title: string; paras: readonly string[] };
  /** 6 to 8 questions people ask, each answered in 2 to 4 sentences */
  faqs: readonly { q: string; a: string }[];
  /** three other service slugs, the closest first */
  related: readonly string[];
}
