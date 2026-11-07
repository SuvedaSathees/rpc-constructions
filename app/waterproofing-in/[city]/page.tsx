import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/contact/Footer";
import { PageScripts } from "@/components/pages/PageScripts";
import { blogPosts } from "@/lib/blog";
import { branches, contact, process, services } from "@/lib/content";
import { townBySlug, towns } from "@/lib/locations";
import { KIT_CSS } from "@/lib/pages/kit";
import { LOCATIONS_CSS, townMarkup, townPath } from "@/lib/pages/locations";
import { breadcrumbLd, ldJson, pageMeta, siteUrl } from "@/lib/site";

/** only the four towns we work from; any other /waterproofing-in/... is a 404 */
export const dynamicParams = false;
export function generateStaticParams() {
  return towns.map((t) => ({ city: t.slug }));
}

type Params = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const t = townBySlug((await params).city);
  if (!t) return {};
  // the layout adds " | RPC Constructions": "Waterproofing Contractors in Erode | RPC Constructions"
  // a longer place name keeps the title under 60 characters: "Waterproofing in Krishnagiri & Hosur"
  const title = t.place ? `Waterproofing in ${t.place.replace(" and ", " & ")}` : `Waterproofing Contractors in ${t.city}`;
  return pageMeta({ title, description: t.description, path: townPath(t) });
}

export default async function TownPage({ params }: Params) {
  const t = townBySlug((await params).city);
  if (!t) notFound();
  const branch = branches.find((b) => b.city === t.city) ?? { city: t.city, role: t.role, line: t.summary };
  const url = `${siteUrl}${townPath(t)}`;
  const guides = t.guides.map((s) => blogPosts.find((p) => p.slug === s)).filter((p): p is (typeof blogPosts)[number] => Boolean(p));

  const ld = [
    breadcrumbLd([
      { name: "Home", href: "/" },
      { name: "Branches", href: "/branches" },
      { name: t.city, href: townPath(t) },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Waterproofing in ${t.city}`,
      serviceType: "Waterproofing contractor",
      url,
      description: t.description,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: [{ "@type": "City", name: t.city, containedInPlace: { "@type": "State", name: "Tamil Nadu" } }, ...t.nearby.map((n) => ({ "@type": "Place", name: n }))],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Waterproofing services in ${t.city}`,
        itemListElement: ["Terrace", "Bathroom", "Water tank", "Basement", "Balcony", "External wall", "Garden and podium", "Crack and leakage"].map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `${s} waterproofing in ${t.city}` },
        })),
      },
    },
    // a branch gets its own place entry once it has an address in lib/content.ts
    ...(branch.address && t.role !== "Head office"
      ? [
          {
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "@id": `${url}#branch`,
            name: `RPC Constructions, ${t.city}`,
            parentOrganization: { "@id": `${siteUrl}/#organization` },
            address: branch.address,
            telephone: branch.phone ?? contact.phone,
            url,
          },
        ]
      : []),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <main id="main" className="pg">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(ld) }} />
        <style dangerouslySetInnerHTML={{ __html: KIT_CSS + LOCATIONS_CSS }} />
        <div
          dangerouslySetInnerHTML={{
            __html: townMarkup({
              town: t,
              branch,
              towns,
              contact,
              building: services.slice(1).map((s) => ({ title: s.title, line: s.line })),
              process: process.map((p) => ({ title: p.title, body: p.body })),
              guides: guides.map((g) => ({ slug: g.slug, title: g.title, excerpt: g.excerpt })),
            }),
          }}
        />
        <PageScripts root="main" kind="branches" />
      </main>
      <Footer />
    </>
  );
}
