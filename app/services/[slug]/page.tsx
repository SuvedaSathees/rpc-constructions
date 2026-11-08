import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/contact/Footer";
import { PageScripts } from "@/components/pages/PageScripts";
import { contact } from "@/lib/content";
import { towns } from "@/lib/locations";
import { KIT_CSS } from "@/lib/pages/kit";
import { LOCATIONS_CSS } from "@/lib/pages/locations";
import { SERVICE_PAGE_CSS, servicePageMarkup } from "@/lib/pages/service-page";
import { SERVICE_PAGES, servicePageBySlug, servicePath } from "@/lib/service-pages";
import { breadcrumbLd, ldJson, pageMeta, siteUrl } from "@/lib/site";

/** one page per service card; any other /services/... is a 404 */
export const dynamicParams = false;
export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = servicePageBySlug((await params).slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.description, path: servicePath(s), image: s.hero.src, imageAlt: s.hero.alt });
}

export default async function ServicePageRoute({ params }: Params) {
  const s = servicePageBySlug((await params).slug);
  if (!s) notFound();
  const url = `${siteUrl}${servicePath(s)}`;

  const ld = [
    breadcrumbLd([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: s.card, href: servicePath(s) },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: s.h1.charAt(0).toUpperCase() + s.h1.slice(1),
      serviceType: s.card,
      url,
      description: s.description,
      image: `${siteUrl}${s.hero.src}`,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: towns.map((t) => ({ "@type": "City", name: t.city, containedInPlace: { "@type": "State", name: "Tamil Nadu" } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <main id="main" className="pg">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(ld) }} />
        <style dangerouslySetInnerHTML={{ __html: KIT_CSS + LOCATIONS_CSS + SERVICE_PAGE_CSS }} />
        <div dangerouslySetInnerHTML={{ __html: servicePageMarkup({ page: s, all: SERVICE_PAGES, towns, contact }) }} />
        <PageScripts root="main" kind="branches" />
      </main>
      <Footer />
    </>
  );
}
