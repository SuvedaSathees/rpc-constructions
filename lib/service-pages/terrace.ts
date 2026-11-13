import type { ServicePage } from "./types";

/** the model entry: every other service page follows this shape and tone */
export const TERRACE: ServicePage = {
  slug: "terrace-waterproofing",
  card: "Terrace waterproofing",
  kind: "waterproofing",
  area: "terrace",
  title: "Terrace Waterproofing Services",
  description:
    "Terrace waterproofing services in Erode, Coimbatore, Krishnagiri & Hosur: PU, membrane & roof coatings by our own crews, pond-tested. Free site inspection.",
  h1: "Terrace waterproofing services",
  intro: [
    "Terrace waterproofing services from RPC Constructions stop roof leaks at the slab, not at the ceiling below. An engineer finds where the water gets in, then our own crew lays one tested system over the whole terrace: a polyurethane (PU) liquid membrane, a torch-on or self-adhesive membrane, a cementitious coat or a flexible roof coating.",
    "We waterproof house terraces, apartment roofs, godown and factory slabs across Erode, Coimbatore, Krishnagiri and Hosur, and we supply the same Fosroc and Sika products we use, so you know exactly what goes on your roof.",
  ],
  badges: [
    ["48 h", "pond test on every terrace before handover"],
    ["Free", "site inspection, the method in writing"],
    ["Own crews", "no subcontractors on your roof"],
  ],
  hero: { src: "/images/anatomy-wp-roof.jpg", alt: "RPC crew applying a waterproof coating across a flat house terrace" },
  signs: {
    title: "Signs your terrace needs waterproofing",
    lede: "Most terrace leaks show up in the room below long before anyone looks at the roof. If you see any of these, the slab is already taking water.",
    items: [
      { title: "Damp patches on the top-floor ceiling", body: "A dark patch or bubbling paint that grows after rain, often near a corner or under the water tank." },
      { title: "Cracks in the terrace screed", body: "Hairline cracks and open joints let water reach the slab. They widen with every hot summer and cool night." },
      { title: "Water standing after rain", body: "Pools that stay for hours mean the slope is wrong or the outlets are blocked; ponding water finds every weak spot." },
      { title: "White salt marks and peeling paint", body: "Efflorescence on the ceiling or parapet shows water travelling through the concrete and leaving salts behind." },
      { title: "Leaks along the parapet and outlets", body: "The joint between slab and parapet wall, and the rainwater pipe outlets, are where most terrace leaks begin." },
      { title: "Rust stains or falling plaster", body: "Brown streaks or spalling concrete mean water has reached the steel. Waterproof before it becomes a structural repair." },
    ],
  },
  table: {
    title: "Terrace waterproofing methods we use",
    lede: "There is no single best waterproofing for every terrace. We choose the system for your slab, its exposure and how the roof is used, and name it in your quote.",
    head: ["Method", "Best for", "Foot traffic", "Over existing tiles?"],
    rows: [
      ["PU liquid membrane", "Exposed terraces with many joints, pipes and corners; long life under sun", "Light, or tiled over", "Yes, after the tiles are checked and primed"],
      ["Torch-on or self-adhesive membrane (APP / SBS)", "Large flat roofs, godowns and new slabs under a screed or tiles", "Only with a protection screed", "No, laid on the bare slab"],
      ["Flexible cementitious coat", "Terraces that will be tiled, sunken areas, around water tanks", "Yes, once tiled or screeded", "No"],
      ["Elastomeric roof coating (white or terracotta)", "Sound slabs that need a weather coat and less heat indoors", "Light", "No, on the slab or screed"],
      ["Brick bat coba repair", "Older houses with a lime and brick-bat terrace that is still mostly sound", "Yes", "Not applicable"],
    ],
    note: "Every method is laid with the same details done by hand: cracks opened and filled, fillets at the parapet, reinforcing mesh at outlets and corners.",
  },
  sections: [
    {
      id: "terrace-leakage-repair",
      title: "Terrace leakage repair: finding where the water gets in",
      paras: [
        "A stain on the ceiling is rarely under the point where water enters. Water runs along the slab, through cracks and along the steel before it shows. So before any repair we inspect the whole terrace, check the slope and outlets, look under tiles and around the tank and pipes, and read the damp in the ceiling below with a moisture meter.",
        "If the leak is from plumbing or a bathroom on the floor above, we will say so, and the job becomes a bathroom or pipe repair instead. You get a written note of what we found before we suggest anything.",
      ],
    },
    {
      id: "waterproofing-over-tiles",
      title: "Waterproofing a terrace with tiles, without breaking them",
      paras: [
        "Many terraces in Erode and Coimbatore are tiled. When the tiles are well bonded, a PU or polymer system can go over them: the joints are cleaned and re-grouted, loose tiles are re-fixed, and the whole surface is primed and coated, with the edges turned up the parapet.",
        "If tiles are hollow or the bed below is wet, coating over them only traps the water. Then we remove the failed area and waterproof the slab itself. The inspection tells us which, and the quote says so.",
      ],
    },
    {
      id: "heat-proofing",
      title: "Terrace waterproofing and heat proofing in one coat",
      paras: [
        "A white elastomeric roof coating keeps water out and reflects much of the summer sun, so the room under the terrace stays cooler. It suits sound RCC slabs in the Kongu summer, and it can be laid over a waterproofing membrane as its top coat.",
      ],
    },
    {
      id: "new-terrace",
      title: "Waterproofing a new terrace while the house is being built",
      paras: [
        "The cheapest leak is the one designed out. On new houses we add an integral waterproofing admixture to the slab concrete, form the slope and fillets in the screed, and lay the membrane before the tiles, so the terrace never has to be dug up. Building with us? Our house construction page explains how waterproofing is built into every stage.",
      ],
    },
  ],
  products: {
    title: "The products we use on terraces",
    lede: "We use branded products from Fosroc and Sika, stored and mixed as their makers specify. We also supply them, so you can see each one, its pack size and what it is for.",
    slugs: ["fosroc-brushbond-roofguard-white", "fosroc-brushbond-roofguard-terracotta", "fosroc-brushbond-rfx-grey", "sika-bit-w1", "fosroc-conplast-wl-xtra", "fosroc-rendroc-cs-white"],
    jobs: ["terrace"],
  },
  process: {
    title: "How our terrace waterproofing works",
    steps: [
      { title: "Inspection and moisture test", body: "An engineer checks the terrace, outlets and parapets, and the ceiling below, and traces the leak to its source." },
      { title: "One method, in writing", body: "You get the system, the products and the area it covers before work starts, so you know what you are paying for." },
      { title: "Surface preparation", body: "Loose screed and old coatings come off; the surface is cleaned and dried; cracks are opened and filled." },
      { title: "Details first", body: "Fillets at the parapet, mesh at outlets, pipes and corners: the places most terraces leak are sealed before the main coat." },
      { title: "The waterproofing system", body: "Primer, then the membrane or coats at the thickness the maker specifies, turned up the parapet wall." },
      { title: "Pond test and handover", body: "We hold water on the terrace for 48 hours and check the ceiling below before we hand the roof back." },
    ],
  },
  gallery: {
    title: "Terrace waterproofing, before and after",
    items: [
      { src: "/images/rain/terrace-before.webp", alt: "Cracked, stained terrace before waterproofing", caption: "Before: cracked screed and ponding water" },
      { src: "/images/rain/terrace-after.webp", alt: "The same terrace after a seamless waterproof coat", caption: "After: one seamless coat, edges turned up the parapet" },
      { src: "/images/waterproofing/terrace-parapet-outlet.jpg", alt: "Waterproofing detail where the terrace slab meets the parapet and outlet", caption: "The parapet joint and outlet, where most terrace leaks start" },
      { src: "/images/waterproofing/waterproofing-real-terrace.jpg", alt: "Cutaway of a terrace slab showing the waterproofing layers", caption: "The layers, from slab to finish" },
    ],
  },
  warranty: {
    title: "A written guarantee with every terrace",
    paras: [
      "Every terrace we waterproof is pond-tested before handover, and you get a written guarantee with the job. How long it runs depends on the system you choose, and it is stated in your quote, together with what it covers.",
      "If water comes through a terrace we have treated within that time, we come back, find out why and put it right.",
    ],
  },
  faqs: [
    { q: "Which waterproofing is best for a terrace?", a: "It depends on the terrace. A PU liquid membrane suits exposed roofs with many joints and pipes; a torch-on or self-adhesive membrane suits large flat roofs under a screed; a flexible cementitious coat suits terraces that will be tiled. We recommend one after the inspection and explain why." },
    { q: "How much does terrace waterproofing cost?", a: "The cost depends on the area, the condition of the slab and the system. We inspect free of charge and give you one fixed price in writing for your terrace before any work starts." },
    { q: "Can terrace waterproofing be done over existing tiles?", a: "Yes, if the tiles are firmly bonded. We re-grout and re-fix where needed and coat over them. If tiles are hollow or the bed below is wet, those areas are removed first, because coating over trapped water does not last." },
    { q: "Can a terrace be waterproofed in the rainy season?", a: "Most systems need a dry slab, so the best time is the dry months before the monsoon: January to May in Erode and Coimbatore, and January to March in Krishnagiri and Hosur. An active leak can still be stopped during the rains and the full system laid when the slab dries." },
    { q: "How long does terrace waterproofing take?", a: "A house terrace of 1,000 to 1,500 sq ft usually takes three to six working days, including surface preparation and curing, plus the 48-hour pond test. Large godown and factory roofs are planned in sections." },
    { q: "How long does terrace waterproofing last?", a: "A well-laid system lasts many years; membranes and PU systems last longer than coatings. Life depends on the product, the thickness laid and how the roof is used. Your quote states the guarantee for the system chosen." },
    { q: "Is the leak always from the terrace?", a: "No. Top-floor ceiling damp can come from a bathroom, a water tank or a pipe. That is why we inspect first. If the terrace is not the cause, we tell you and do not sell you a terrace job." },
    { q: "Do you waterproof factory and godown roofs too?", a: "Yes. We waterproof RCC roofs of godowns, mills and factories, and work in sections so production can continue. Sheet roofs are handled under our industrial construction service." },
  ],
  related: ["crack-and-leakage-treatment", "garden-and-podium-waterproofing", "external-wall-waterproofing"],
};
