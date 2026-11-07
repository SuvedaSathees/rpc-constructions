/**
 * Every service page, in the order the services page shows its cards:
 * the eight waterproofing services, then the six building services.
 * Each lives at /services/{slug} (app/services/[slug]/page.tsx).
 */
import { BUILDING_PAGES } from "./building";
import { TERRACE } from "./terrace";
import type { ServicePage } from "./types";
import { WATERPROOFING_PAGES } from "./waterproofing";

export type { Img, ServicePage } from "./types";

export const SERVICE_PAGES: readonly ServicePage[] = [TERRACE, ...WATERPROOFING_PAGES, ...BUILDING_PAGES];

const BY_SLUG = new Map(SERVICE_PAGES.map((p) => [p.slug, p]));
export const servicePageBySlug = (slug: string): ServicePage | undefined => BY_SLUG.get(slug);
/** the address of a service's own page */
export const servicePath = (p: Pick<ServicePage, "slug">) => `/services/${p.slug}`;
