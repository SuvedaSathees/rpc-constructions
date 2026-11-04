import type { Metadata } from "next";
import { Footer } from "@/components/contact/Footer";
import { PageScripts } from "@/components/pages/PageScripts";
import { branches, contact } from "@/lib/content";
import { BRANCHES_CSS, branchesMarkup } from "@/lib/pages/branches";
import { KIT_CSS } from "@/lib/pages/kit";
import { breadcrumbLd, ldJson, pageMeta, siteUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Our Branches – Erode, Coimbatore, Krishnagiri & Chennai",
  description:
    "RPC Constructions works from four towns in Tamil Nadu: the head office in Kurikaran Palayam, Erode, and branches in Coimbatore, Krishnagiri and Chennai. Call +91 99423 54602 to book a free site inspection.",
  path: "/branches",
});

const ld = [
  breadcrumbLd([
    { name: "Home", href: "/" },
    { name: "Branches", href: "/branches" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${siteUrl}/branches`,
    name: "RPC Constructions branches",
    description: "The towns RPC Constructions works from: Erode, Coimbatore, Krishnagiri and Chennai.",
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: branches.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name: `RPC Constructions, ${b.city}`, address: b.address ?? { "@type": "PostalAddress", addressLocality: b.city, addressRegion: "Tamil Nadu", addressCountry: "IN" } },
      })),
    },
  },
];

/** Branches: the head office in Erode and the three towns we run work from */
export default function BranchesPage() {
  return (
    <>
      <main id="main" className="pg">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(ld) }} />
        <style dangerouslySetInnerHTML={{ __html: KIT_CSS + BRANCHES_CSS }} />
        <div dangerouslySetInnerHTML={{ __html: branchesMarkup({ branches, contact }) }} />
        <PageScripts root="main" kind="branches" />
      </main>
      <Footer />
    </>
  );
}
