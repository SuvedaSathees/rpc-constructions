import type { ServicePage } from "./types";

/**
 * The six construction service pages (kind "building"), in the order of the
 * cards on /services. Same shape and tone as the terrace model entry. No
 * prices, no warranty years: the estimate and the contract carry both.
 */
export const BUILDING_PAGES: readonly ServicePage[] = [
  // ─────────────────────────────────────────────────────────────── residential
  {
    slug: "residential-construction",
    card: "Residential Construction",
    kind: "building",
    title: "House Construction Contractors",
    description:
      "House construction contractors in Erode, Coimbatore, Krishnagiri & Hosur: turnkey homes, plan drawings, waterproofing built in. Free site visit & estimate.",
    h1: "House construction contractors",
    intro: [
      "RPC Constructions are house construction contractors who build independent houses, villas, duplexes and apartment blocks turnkey, from the soil test and plan drawings to painting and handover, under one contract. Every terrace, bathroom and sump is waterproofed and water-tested while the house goes up, so you move into a dry home instead of chasing the first leak after the first monsoon.",
      "Our head office is at Kurikaran Palayam in Erode, with branches in Coimbatore and Krishnagiri, so our own site teams build across the Kongu belt and around Hosur. We also supply the Fosroc, Sika, Berger and Renacon AAC products that go into your house, so you can see exactly what is in its slabs and walls.",
    ],
    badges: [
      ["8 – 24 months", "typical build time, by size and scope"],
      ["Water-tested", "every terrace, bathroom and sump"],
      ["One contract", "building and waterproofing together"],
    ],
    hero: {
      src: "/images/projects/thindal-courtyard-villa-erode.jpg",
      alt: "Finished courtyard villa with a sloping tiled roof and an open central courtyard",
    },
    signs: {
      title: "Is this for you?",
      lede: "We build new houses for families and owners who want one builder answerable for the whole job. You are in the right place if any of these sound like you.",
      items: [
        { title: "You own a plot and want one builder", body: "One contract for drawings, structure, services, finishes and waterproofing, so no gap opens between trades and no one can blame someone else." },
        { title: "You want the scope fixed before you commit", body: "You get an itemised estimate that names the specification of each item, from cement and steel to tiles and fittings, before any work starts." },
        { title: "You have lived in a house that leaked", body: "Our background is waterproofing. Terraces, bathrooms, sumps and tanks are sealed and tested at the stage they are built, not patched later." },
        { title: "You are building a villa or duplex", body: "Courtyards, sloping tiled roofs, double-height rooms and split levels need careful detailing at every joint. We draw and build those details." },
        { title: "You are building to rent or sell", body: "Small apartment blocks and rows of houses, built to one specification and handed over with the test records for each flat." },
        { title: "You want a house that suits the heat", body: "AAC block walls, cool roof coatings and well-placed openings keep rooms cooler through the Kongu summer." },
      ],
    },
    table: {
      title: "What we build, stage by stage",
      lede: "A house is built in stages, and each stage is checked by an engineer before the next one covers it. This is what we do at each one, and what you have at the end of it.",
      head: ["Stage", "What we do", "What you get"],
      rows: [
        ["Soil test and design", "Soil test, foundation design, floor plans, elevations and structural drawings", "Drawings and an itemised estimate before work starts"],
        ["Approvals", "We prepare the drawings and documents for DTCP or local-body plan approval and help you through the process", "A complete file for the authority"],
        ["Foundation and plinth", "Excavation, footings, plinth beam, anti-termite treatment and damp-proof course", "A level, dry base for the house"],
        ["RCC frame", "Columns, beams and slabs, with a waterproofing admixture in the roof and wet-area slabs", "An engineer's check before every concrete pour"],
        ["Walls", "Brick or AAC block masonry, lintels, sunshades and parapets", "Walls true to the drawing, ready for services"],
        ["Waterproofing", "Terrace, bathrooms, balconies, sump and overhead tank sealed in layers", "Each area water-tested before tiles go on"],
        ["Electrical and plumbing", "Conduits, wiring, water supply, drainage and rainwater pipes", "Pipes tested before walls are plastered"],
        ["Finishes and handover", "Plastering, flooring, joinery, painting and landscaping", "A finished house, with drawings and test records"],
      ],
      note: "The estimate lists the material and brand for each item. If anything changes during the build, we agree it with you in writing first.",
    },
    sections: [
      {
        id: "plan-approval",
        title: "Plan approval and building permits",
        paras: [
          "Before a house can be built, its plan needs approval from the local body, or from DTCP in most of Tamil Nadu. We prepare the architectural and structural drawings to the rules that apply to your plot, collect the documents the authority asks for and help you through each step of the application.",
          "Setbacks, floor area and height limits shape the design, so we check them at the first drawing, not after. That way the house you approve on paper is the house the authority will accept.",
        ],
      },
      {
        id: "waterproofing-built-in",
        title: "Waterproofing built in at every stage",
        paras: [
          "Most house leaks start at a stage nobody checked: a bathroom slab tiled before it was tested, a terrace screed laid without a slope, a sump wall cast without a waterstop. We build waterproofing into the stage where it belongs, and an engineer inspects each layer before the next trade covers it.",
          "This is the same work our terrace and bathroom waterproofing teams do on existing houses, done once and done first.",
        ],
        bullets: [
          "Foundation: damp-proof course at plinth level against rising damp",
          "Slabs: an integral waterproofing admixture in the roof and wet-area concrete",
          "Sump and tank: waterstops in the joints and a cementitious coat inside",
          "Bathrooms: a flexible coat on the floor and up the walls, then a flood test",
          "Terrace: slope, fillets at the parapet and a membrane or roof coat, then a pond test",
        ],
      },
      {
        id: "turnkey-house-construction",
        title: "Turnkey house construction: independent houses, villas and apartments",
        paras: [
          "Turnkey means you hand us the plot and we hand back the keys. We take the house from drawings to finished floors, and you deal with one engineer and one contract instead of a separate mason, plumber, electrician and painter.",
          "We build homes from about 1,500 sq ft up to apartment blocks of 80,000 sq ft. Independent houses and duplexes are the most common; villas often add a courtyard, a tiled roof or a pool, and apartment blocks add sumps, lifts and shared terraces.",
        ],
        img: {
          src: "/images/projects/kaveri-residences-perundurai-road.jpg",
          alt: "Multi-storey residential apartment block with balconies on each floor",
          caption: "Apartment blocks follow the same stage checks as a single house",
        },
      },
      {
        id: "house-construction-erode-coimbatore",
        title: "House construction in Erode, Coimbatore, Krishnagiri and Hosur",
        paras: [
          "Erode is our head office, and the towns around it, Perundurai, Bhavani and Gobichettipalayam, are within easy reach of our teams. From our Coimbatore branch we build across the city and its suburbs, and from Krishnagiri we cover Hosur and the surrounding area.",
          "Soil, ground water and rainfall differ from one place to the next, so the foundation and the waterproofing are designed for your site, not copied from the last one.",
        ],
      },
    ],
    products: {
      title: "Materials that go into your house",
      lede: "We use branded admixtures, curing compounds, blocks and adhesives, and we supply them too, so you can look up each product and what it is for.",
      slugs: ["fosroc-conplast-wl-xtra", "fosroc-conplast-sp430", "fosroc-concure-wb-white", "renacon-aac-block-6-inch", "renacon-renaplast-ready-mix-plaster", "berger-hs-tile-adhesive"],
      jobs: ["pour", "aac"],
    },
    process: {
      title: "How we build your house",
      lede: "Eight steps, from the first visit to the keys.",
      steps: [
        { title: "Free site visit", body: "An engineer visits the plot, notes the access, soil and neighbouring buildings, and listens to what you want from the house." },
        { title: "Drawings and estimate", body: "Plans, elevations and structural drawings, with an itemised estimate that names the material for each item." },
        { title: "Contract and programme", body: "One contract with the scope, the stage-wise payment schedule and a programme for each stage." },
        { title: "Approvals", body: "We prepare the approval drawings and documents and help you through the local body or DTCP process." },
        { title: "Foundation and frame", body: "Footings, plinth, columns, beams and slabs, each checked by an engineer before concrete is poured." },
        { title: "Walls, services and waterproofing", body: "Masonry, wiring and plumbing, then each wet area and the terrace sealed and water-tested." },
        { title: "Finishes", body: "Plastering, flooring, joinery, painting and the work outside the house." },
        { title: "Handover", body: "A walk-through with you, the snag list closed, and the drawings and test records handed over." },
      ],
    },
    gallery: {
      title: "Stage by stage",
      items: [
        { src: "/stages/03-foundation.jpg", alt: "Footings and plinth beams cast on a cleared house plot", caption: "Foundation and plinth, checked before backfilling" },
        { src: "/stages/06-structural-frame.jpg", alt: "Reinforced concrete columns, beams and slabs of a house frame", caption: "The RCC frame, floor by floor" },
        { src: "/stages/08-plastering.jpg", alt: "Walls of a house being plastered after masonry is complete", caption: "Plastering, after the pipes and conduits are tested" },
        { src: "/stages/12-completed.jpg", alt: "Completed house with finished exterior and landscaped front", caption: "Handed over, with the test records" },
      ],
    },
    warranty: {
      title: "A written guarantee with every house",
      paras: [
        "Every house we build comes with a written guarantee. What it covers, including the structure and the waterproofing, and how long each part runs, is stated in your contract before work starts.",
        "If something we built does not perform as the contract says, we come back, find the cause and put it right.",
      ],
    },
    faqs: [
      { q: "What is the house construction cost per sq ft in Erode or Coimbatore?", a: "It depends on the size of the house, the soil, the number of floors and the finishes you choose. We visit your plot free of charge and give you an itemised estimate in writing, with the material for each item, so you can compare it line by line." },
      { q: "What is included in your construction package?", a: "Drawings, foundation, RCC frame, walls, electrical and plumbing, waterproofing, plastering, flooring, joinery and painting are all part of a turnkey contract. Anything that is not included, such as a compound wall or interiors, is listed separately in the estimate so there are no surprises." },
      { q: "How long does it take to build a 1,500 sq ft house?", a: "Our houses and apartment blocks take between 8 and 24 months, depending on size and scope. A 1,500 sq ft independent house sits near the shorter end of that range. Your contract carries a programme with a target date for each stage." },
      { q: "Do you handle plan approval (DTCP / CMDA) and the building permit?", a: "We prepare the drawings and documents the authority needs and help you through the approval. The approval itself is granted by the local body, DTCP or CMDA, and we plan the build around it." },
      { q: "Is waterproofing included during construction?", a: "Yes. The terrace, bathrooms, balconies, sump and overhead tank are waterproofed as they are built, and each is water-tested before tiles or finishes cover it. An engineer inspects every layer." },
      { q: "How are payments staged during construction?", a: "Payments are tied to stages of the work, such as foundation, each slab, walls, plastering and finishes, not to dates. The schedule is written into the contract, and each payment falls due when that stage is complete and checked." },
      { q: "Can I choose my own materials and brands?", a: "Yes. The estimate names a material and brand for each item, and you can change any of them. We price the change and confirm it in writing before we order." },
      { q: "Do you build houses outside Erode?", a: "Yes. From our branches in Coimbatore and Krishnagiri we build in Coimbatore and its suburbs, and in Hosur and Krishnagiri, as well as across the Erode district." },
    ],
    related: ["interiors", "bathroom-waterproofing", "terrace-waterproofing"],
  },

  // ──────────────────────────────────────────────────────────────── commercial
  {
    slug: "commercial-construction",
    card: "Commercial Construction",
    kind: "building",
    title: "Commercial Building Construction Company",
    description:
      "Commercial building construction company for offices, showrooms, hospitals & complexes in Erode, Coimbatore, Krishnagiri & Hosur. Design-build. Get a quote.",
    h1: "Commercial building construction company",
    intro: [
      "RPC Constructions is a commercial building construction company that builds offices, showrooms, shopping and mixed-use complexes, hospitals and hotels, from the structural design to a shell-and-core handover or a full fit-out. We build for heavy daily use, with basement car parks that stay dry and façades sealed against driving rain.",
      "We work from our head office in Erode and our branches in Coimbatore and Krishnagiri, so we build on busy roads such as Avinashi Road in Coimbatore, around Hosur and across the Kongu belt. Our own site teams carry out the structure and the waterproofing under one contract.",
    ],
    badges: [
      ["12 – 30 months", "typical programme, by size and scope"],
      ["10,000 – 2,50,000", "sq ft of built-up area"],
      ["One contract", "structure, services and waterproofing"],
    ],
    hero: {
      src: "/images/projects/avinashi-corporate-centre-coimbatore.jpg",
      alt: "Glass-fronted multi-storey office tower beside a main road",
    },
    signs: {
      title: "Is this for you?",
      lede: "We take on commercial buildings where one contractor is responsible for the structure, the services coordination and the waterproofing.",
      items: [
        { title: "You are building an office or showroom", body: "A G+2 showroom on a main road or a multi-storey office, with long spans, large openings and glazing." },
        { title: "Your building needs a basement", body: "Basement car parks and service floors below ground need waterproofing designed in from the raft up." },
        { title: "You are building a hospital or hotel", body: "Buildings with heavy services, lifts and fire systems, where MEP has to be coordinated before the slabs are cast." },
        { title: "You are a developer leasing space", body: "Shell-and-core handover for tenants to fit out, or a full fit-out ready to occupy." },
        { title: "Part of your site must stay open", body: "Phased work, separated access and night pours where a shop, clinic or office next door keeps running." },
      ],
    },
    table: {
      title: "What we deliver, by package",
      lede: "Choose how far you want us to take the building. Each package includes the waterproofing of the parts it covers.",
      head: ["Package", "What we do", "What you get"],
      rows: [
        ["Structure only", "Foundations, basement, RCC frame and slabs, with waterproofing below ground and on the roof", "A sound, sealed structure for others to complete"],
        ["Shell and core", "Structure plus façade, masonry, staircases, lift cores, common areas and main service risers", "A building ready for tenants to fit out"],
        ["Full fit-out", "Shell and core plus floors, ceilings, partitions, toilets, lighting and finishes", "A building ready to occupy"],
        ["Design and build", "Structural and architectural drawings, approvals support, then construction under one contract", "One party answerable from drawing to handover"],
      ],
      note: "Fire safety, lifts, HVAC and electrical services are coordinated with their specialists on the same drawings, so openings and sleeves are cast in, not cut later.",
    },
    sections: [
      {
        id: "office-and-showroom-construction",
        title: "Office, showroom and complex construction",
        paras: [
          "Commercial buildings carry more people, heavier loads and longer spans than houses, so we use flat-slab and long-span RCC structures where the layout needs open floors. We plan the frame around the use of each floor, from a ground-floor showroom with a wide frontage to office floors above.",
        ],
        bullets: [
          "Offices and IT floors: open plates, raised services and lift cores",
          "Showrooms and retail: wide frontages, high ground floors and display glazing",
          "Shopping and mixed-use complexes: shops below, offices or flats above",
          "Hospitals and clinics: heavy services, lifts and wet areas on every floor",
          "Hotels and lodges: many bathrooms stacked floor on floor, each one tested",
        ],
      },
      {
        id: "design-and-build",
        title: "Design and build: structure, MEP and approvals",
        paras: [
          "In a design-and-build contract we prepare the structural and architectural drawings, coordinate the mechanical, electrical and plumbing services, and build the building. We prepare the drawings and documents for building approval and fire clearance and help you through the process with the authorities.",
          "One set of drawings for every trade means fewer clashes on site, and one contract means one party to answer to on cost, quality and programme.",
        ],
      },
      {
        id: "dry-basements-and-sealed-facades",
        title: "Dry basements and sealed façades",
        paras: [
          "A basement car park is a box sitting in ground water. We cast it with waterstops in every joint, a waterproofing admixture in the concrete and a membrane on the face the water reaches. Our basement waterproofing work on existing buildings is where we learned what fails.",
          "Above ground, driving rain finds every joint between frame, wall and window. Façades are detailed and sealed at those joints, and roofs and podiums are waterproofed before handover.",
        ],
      },
      {
        id: "commercial-construction-coimbatore-erode",
        title: "Commercial construction in Erode, Coimbatore, Krishnagiri and Hosur",
        paras: [
          "Our Coimbatore branch builds along Avinashi Road, Trichy Road and the city's growing suburbs. From Erode we build showrooms and complexes across the Kongu belt, and from Krishnagiri we cover Hosur, where offices and showrooms grow around the industrial estates.",
          "Warehouses, godowns and factory buildings are covered on our industrial construction page.",
        ],
      },
    ],
    products: {
      title: "Products we use in commercial structures",
      lede: "Admixtures for high-strength concrete, waterstops and membranes for basements, and curing compounds for large slabs. We supply them all, so you can check each one.",
      slugs: ["fosroc-conplast-sp430", "fosroc-auramix-300", "fosroc-conplast-wl-xtra", "fosroc-supercast-sw20", "sikaproof-312-hdpe", "fosroc-concure-wb-white"],
      jobs: ["pour", "basement"],
    },
    process: {
      title: "How a commercial build runs",
      steps: [
        { title: "Brief and site visit", body: "We study the site, the use of each floor and your programme, and visit with an engineer free of charge." },
        { title: "Drawings and estimate", body: "Structural and architectural drawings, services coordination and an itemised estimate for the package you choose." },
        { title: "Approvals support", body: "We prepare the approval drawings and documents and help you through the building and fire approvals." },
        { title: "Foundations and basement", body: "Excavation, raft or footings, basement walls with waterstops and membrane, each checked before backfilling." },
        { title: "Frame and envelope", body: "RCC frame, slabs, masonry and façade, with sleeves and openings cast in for the services." },
        { title: "Services and finishes", body: "MEP installation with its specialists, then floors, ceilings, toilets and finishes for the package agreed." },
        { title: "Testing and handover", body: "Wet areas, roofs and basements water-tested, the snag list closed and the as-built drawings handed over." },
      ],
    },
    gallery: {
      title: "From our sites",
      items: [
        { src: "/stages/06-structural-frame.jpg", alt: "Multi-storey commercial building under construction with its concrete frame exposed", caption: "A structural frame going up floor by floor" },
        { src: "/stages/05-beams-and-slabs.jpg", alt: "Reinforcement for beams and a floor slab laid out before a concrete pour", caption: "Beams and slabs, checked before every pour" },
        { src: "/images/completed-frame.jpg", alt: "Finished multi-storey building with its façade complete", caption: "Complete, sealed and ready to occupy" },
      ],
    },
    warranty: {
      title: "A written guarantee with every building",
      paras: [
        "Every commercial building we hand over comes with a written guarantee. What it covers, including the structure, roofs, basements and wet areas, and how long each part runs, is stated in the contract.",
        "If any part we built does not perform as the contract says, we come back, find the cause and put it right.",
      ],
    },
    faqs: [
      { q: "What is the commercial building construction cost per sq ft in Tamil Nadu?", a: "It depends on the structure, the number of floors, whether there is a basement and how far the fit-out goes. After a free site visit we give you an itemised estimate in writing for the package you choose, so each cost is visible." },
      { q: "How long does a G+2 or G+3 commercial building take to build?", a: "Our commercial buildings take between 12 and 30 months, depending on size, basements and fit-out. A G+2 or G+3 building without a basement sits at the shorter end. The contract carries a programme for each stage." },
      { q: "Do you handle approvals, structural design and MEP?", a: "Yes, in a design-and-build contract. We prepare the structural and architectural drawings, coordinate the MEP services, and prepare the approval drawings and documents and help you through the process." },
      { q: "Can you build while part of the site stays operational?", a: "Yes. We phase the work, separate the access routes and plan noisy work and concrete pours around your business hours, so a shop or clinic next door can keep running." },
      { q: "How do you keep a basement car park dry?", a: "We design the waterproofing with the structure: waterstops in every construction joint, a waterproofing admixture in the concrete and a membrane on the outside face. Each basement is checked before it is backfilled." },
      { q: "What is the difference between shell-and-core and full fit-out?", a: "Shell-and-core gives you the structure, façade, lifts, staircases and common areas, ready for tenants to fit out their own space. Full fit-out adds floors, ceilings, partitions, toilets and finishes, so the building is ready to occupy." },
      { q: "What quality checks and guarantee do you provide?", a: "An engineer checks each stage before the next one covers it, and every wet area, roof and basement is water-tested before handover. You get a written guarantee, with its terms stated in the contract." },
      { q: "Do you build warehouses and factories too?", a: "Yes. Factories, warehouses, godowns and PEB sheds are handled by our industrial construction team, with its own page." },
    ],
    related: ["industrial-construction", "basement-waterproofing", "project-management"],
  },

  // ──────────────────────────────────────────────────────────────── industrial
  {
    slug: "industrial-construction",
    card: "Industrial Construction",
    kind: "building",
    title: "Industrial, Factory & PEB Construction",
    description:
      "Industrial construction company for factories, warehouses & PEB sheds in Hosur, Krishnagiri, Coimbatore & Erode. Civil, floors & roofing.",
    h1: "Industrial construction company",
    intro: [
      "RPC Constructions is an industrial construction company that builds factories, warehouses, godowns and pre-engineered (PEB) steel sheds, with the civil foundations, machine pits, industrial floors, roofing and drainage under one contract. Roofs, gutters and floors are detailed to keep machinery and stock dry through the monsoon.",
      "We build in the SIPCOT estates at Hosur and Krishnagiri, in Perundurai near our Erode head office, and around Coimbatore. Our branches in Krishnagiri and Coimbatore keep our own site teams close to each site.",
    ],
    badges: [
      ["6 – 18 months", "typical programme, by size and scope"],
      ["20,000 – 4,00,000", "sq ft of factory and warehouse floor"],
      ["One contract", "civil, steel, floors and roofing"],
    ],
    hero: {
      src: "/images/projects/sipcot-textile-unit-perundurai.jpg",
      alt: "Steel portal frames of a factory shed being erected on concrete pedestals",
    },
    signs: {
      title: "Is this for you?",
      lede: "We build industrial buildings for owners who want the civil work, the steel and the roof answerable to one contractor.",
      items: [
        { title: "You have an industrial plot to build on", body: "A SIPCOT or private industrial park plot that needs a factory, from site levelling to a working floor." },
        { title: "You need a warehouse or godown", body: "Clear-span storage with loading docks, a hard-wearing floor and a roof that does not leak on your stock." },
        { title: "You are expanding a running plant", body: "A new bay, mezzanine or shed beside a line that cannot stop, with the work phased around production." },
        { title: "Your machines need foundations", body: "Machine foundations, pits and anchor bolts set to the maker's drawings and grouted with non-shrink grout." },
        { title: "Your shed roof leaks every monsoon", body: "Sheeting, laps, gutters and valleys that let water in. We repair them, or re-roof and detail them properly." },
        { title: "Your floor is dusting or cracking", body: "Forklift and pallet traffic wear out weak floors. We lay trimix and VDF floors with a hardened surface." },
      ],
    },
    table: {
      title: "What we build, stage by stage",
      lede: "An industrial building goes up fast once the steel arrives, but the civil work beneath it decides how long it lasts.",
      head: ["Stage", "What we do", "What you get"],
      rows: [
        ["Survey and layout", "Site survey, soil test, plant layout with your process engineer, structural design", "Drawings and an itemised estimate"],
        ["Approvals", "We prepare the drawings and documents for building and factory approvals and help you through them", "A complete file for the authorities"],
        ["Site preparation", "Clearing, cutting and filling, compaction and site levels for drainage", "A level, drained site"],
        ["Foundations", "Column footings, pedestals with anchor bolts, plinth beams, machine foundations and pits", "Bolts set to the steel drawings, grouted"],
        ["Frame", "PEB steel frames erected on the pedestals, or an RCC frame where the use needs it", "A plumb, braced structure"],
        ["Roof and cladding", "Roof sheeting, ridge, gutters, valleys, down pipes and wall cladding", "A sealed envelope before the floor is laid"],
        ["Industrial floor", "Sub-base, trimix or VDF floor with a surface hardener and cut joints", "A flat, hard-wearing floor"],
        ["External works", "Storm drains, roads, loading docks, sump, compound wall and services", "A site ready to run"],
      ],
      note: "Machine foundations are cast to the machine supplier's drawings, and we check bolt positions against them before every pour.",
    },
    sections: [
      {
        id: "peb-vs-rcc",
        title: "PEB vs RCC factory buildings",
        paras: [
          "A pre-engineered building (PEB) uses steel frames made in a factory and bolted together on site. It suits large clear spans, warehouses and sheds where speed matters. An RCC frame is cast on site and suits multi-storey blocks, heavy floor loads above ground, wet processes and buildings that need fire separation.",
          "Many factories use both: a PEB production shed with an RCC office and amenities block in front. We advise which suits each part of your plant once we know the process, the loads and the programme.",
        ],
        bullets: [
          "PEB: clear spans, fast erection, easy to extend later",
          "RCC: multi-storey blocks, wet processes, heavy upper floors",
          "Both stand on civil foundations we design and build",
        ],
      },
      {
        id: "warehouse-construction",
        title: "Warehouse, godown and industrial shed construction",
        paras: [
          "A warehouse is a floor, a roof and the drainage around them. We set the floor level above the surrounding ground, lay a floor designed for racking and forklift loads, and detail the roof laps, gutters and down pipes so monsoon rain leaves the building quickly.",
          "Loading docks, dock levellers, ramps and truck yards are built with the shed, so the building works on the day you move in.",
        ],
      },
      {
        id: "industrial-flooring",
        title: "Industrial flooring: trimix and VDF floors",
        paras: [
          "Industrial floors are laid as trimix or vacuum dewatered (VDF) concrete, finished with a power trowel and a dry-shake surface hardener so they resist abrasion from wheels and pallets. An integral waterproofing admixture keeps ground moisture out of the slab, and joints are cut and sealed to control cracking.",
        ],
      },
      {
        id: "factory-construction-hosur-coimbatore",
        title: "Factory construction in Hosur, Krishnagiri, Coimbatore and Erode",
        paras: [
          "Our Krishnagiri branch covers the SIPCOT estates at Hosur and Krishnagiri, where engineering and electronics plants keep expanding. Around Perundurai and Erode we build for textile, food processing and engineering units, and from Coimbatore we serve the city's foundries, pump makers and textile mills.",
          "Industrial RCC roofs and godown slabs that need waterproofing on their own are handled by our terrace waterproofing team.",
        ],
      },
    ],
    products: {
      title: "Products we use in industrial buildings",
      lede: "Floor hardeners, non-shrink grouts, anchoring resins and admixtures for heavy-duty concrete. We supply them too, so you can see each one.",
      slugs: ["sika-chapdur", "fosroc-nitoflor-hardtop-standard", "fosroc-conbextra-gp2", "fosroc-lokfix-s", "fosroc-auramix-300"],
      jobs: ["grouting", "pour"],
    },
    process: {
      title: "How an industrial build runs",
      steps: [
        { title: "Site visit and brief", body: "We walk the plot with you, understand the process and loads, and note access for cranes and trucks." },
        { title: "Layout and design", body: "Plant layout with your process engineer, structural design for PEB or RCC, and an itemised estimate." },
        { title: "Approvals support", body: "We prepare the drawings and documents for building and factory approvals and help you through them." },
        { title: "Civil works", body: "Site levels, footings, pedestals, anchor bolts and machine foundations, checked against the steel drawings." },
        { title: "Steel and roof", body: "PEB frames erected, then roof sheeting, gutters and cladding to close the building in." },
        { title: "Floors and external works", body: "Trimix or VDF floors, drains, roads, docks and services." },
        { title: "Testing and handover", body: "Roof and gutters water-tested, floors checked for level, and the as-built drawings handed over." },
      ],
    },
    gallery: {
      title: "From our sites",
      items: [
        { src: "/stages/02-site-preparation.jpg", alt: "Cleared and levelled ground marked out for foundations", caption: "Site levels set for drainage before anything is built" },
        { src: "/stages/04-rcc-columns.jpg", alt: "Reinforced concrete columns rising from a plinth on site", caption: "RCC columns for an office and amenities block" },
        { src: "/stages/03-foundation.jpg", alt: "Concrete footings and plinth beams cast on a levelled site before the floor is laid", caption: "Footings and plinth beams beneath the floor slab" },
      ],
    },
    warranty: {
      title: "A written guarantee with every building",
      paras: [
        "Every industrial building we hand over comes with a written guarantee. What it covers, including the roof, floor and civil works, and how long each part runs, is stated in the contract.",
        "If any part we built does not perform as the contract says, we come back, find the cause and put it right, planned around your production.",
      ],
    },
    faqs: [
      { q: "What is the factory or industrial shed construction cost per sq ft?", a: "It depends on the span, the height, the roof, the floor loads and how much civil work the site needs. We visit free of charge and give you an itemised estimate in writing, with the steel, civil works and floor priced separately so you can compare them." },
      { q: "PEB vs RCC construction for a factory: which is better?", a: "PEB suits single-storey sheds and warehouses with large clear spans and a tight programme. RCC suits multi-storey blocks, wet processes and heavy upper floors. Many factories combine a PEB shed with an RCC office block." },
      { q: "How long does it take to build a PEB factory or warehouse?", a: "Our industrial buildings take between 6 and 18 months, depending on size and civil works. A PEB shed on a level site with simple foundations sits at the shorter end. The contract carries a programme for each stage." },
      { q: "Do you handle factory approvals, layout and civil foundations?", a: "We work out the plant layout with your process engineer, design and build the civil foundations, and prepare the drawings and documents for building and factory approvals, then help you through them." },
      { q: "Can you build or expand while the plant is running?", a: "Yes. We fence off the work area, keep separate access for our trucks and cranes, and phase the work so your production lines keep running." },
      { q: "Which floor is best for forklifts and racking?", a: "A trimix or VDF concrete floor with a dry-shake surface hardener, designed for the wheel and rack loads you expect. We ask for your racking layout before we design the slab and its joints." },
      { q: "Do you fix leaking factory roofs?", a: "Yes. We repair laps, ridges, gutters and valleys on sheet roofs, or re-sheet them where needed. RCC factory and godown roofs are waterproofed by our terrace waterproofing team." },
    ],
    related: ["commercial-construction", "terrace-waterproofing", "project-management"],
  },

  // ──────────────────────────────────────────────────────────────── renovation
  {
    slug: "renovation-and-leak-repair",
    card: "Renovation & Leak Repair",
    kind: "building",
    title: "House Renovation & Repair Services",
    description:
      "House renovation services in Erode, Coimbatore, Krishnagiri & Hosur: re-plastering, re-flooring, bathroom remodels, extensions & structural repair. Free visit.",
    h1: "House renovation services",
    intro: [
      "RPC Constructions' house renovation services repair and upgrade the house you already own: re-plastering, re-flooring, bathroom and kitchen remodels, roof repair, structural strengthening and extensions, planned around the family still living in it. We survey the house first, so the work fixes causes, not just surfaces.",
      "We renovate homes and small buildings from our head office in Erode and our branches in Coimbatore and Krishnagiri, which covers the Kongu belt and Hosur. Our own site teams do the civil work and the waterproofing, so a new floor or a fresh coat of paint is never laid over a problem that will spoil it.",
    ],
    badges: [
      ["2 – 10 months", "typical renovation, by scope"],
      ["Free", "site visit, the scope in writing"],
      ["Own site teams", "civil work and waterproofing together"],
    ],
    hero: {
      src: "/images/anatomy-wp-windows.jpg",
      alt: "Worker sealing the joint around a window frame in an existing house",
    },
    signs: {
      title: "When to renovate your house",
      lede: "Houses age in the same places: plaster, floors, bathrooms, roofs and the steel inside the concrete. If you see any of these, a planned renovation costs less than repairs one at a time.",
      items: [
        { title: "Plaster that sounds hollow or falls", body: "Tap the wall: a hollow sound means the plaster has lost its bond. It will crack and fall, and paint will not hold it." },
        { title: "Floors that are cracked or uneven", body: "Old mosaic or tiles that have lifted or cracked, often because the bed below has settled or got wet." },
        { title: "A bathroom or kitchen past its life", body: "Old pipes, worn tiles, low water pressure or damp in the room next door. A remodel replaces all of it at once." },
        { title: "Stains that return after painting", body: "Patches that come back each monsoon mean water is still getting in. That is fixed first, before any finish." },
        { title: "Rust stains or exposed steel", body: "Brown streaks, cracked cover or bare bars in a slab or column need structural repair, not more plaster." },
        { title: "You need more room", body: "An extra floor, a new room or a larger kitchen, built after we check the existing structure can carry it." },
      ],
    },
    table: {
      title: "What a house renovation can include",
      lede: "Most renovations combine several of these. We survey the house, then list the work you need and the order it should be done in.",
      head: ["Work", "What we do", "When you need it"],
      rows: [
        ["Condition survey", "Walls, floors, roof, plumbing and structure inspected, damp read with a moisture meter", "Before any renovation, to set the scope"],
        ["Re-plastering", "Hollow and cracked plaster removed, a bonding coat applied, then new plaster", "Plaster that is hollow, cracked or falling"],
        ["Re-flooring", "Old floor and bed removed where needed, new screed, then tiles or stone", "Lifting, cracked or worn floors"],
        ["Bathroom remodel", "Tiles and pipes replaced, floor and walls waterproofed and flood-tested, then retiled", "Old bathrooms, or damp in the room beside or below"],
        ["Kitchen remodel", "Platform, sink, plumbing, wall tiles and electrical points rebuilt", "Before new modular cabinets go in"],
        ["Roof and terrace repair", "Screed, slope, parapet joints and outlets repaired, then waterproofed", "Damp top-floor ceilings and worn terraces"],
        ["Structural repair", "Rust cleaned, steel primed, sections rebuilt in repair mortar; jacketing where needed", "Rusted steel, spalling concrete, cracked members"],
        ["Extensions", "A new room or an extra floor, after a check of the existing structure", "When the family needs more space"],
        ["Water and damp problems", "The source traced and sealed through our crack and leakage treatment work", "Stains or seepage that keep coming back"],
      ],
      note: "Modular kitchens, wardrobes and false ceilings are fitted by our interiors team, once the civil work underneath is done.",
    },
    sections: [
      {
        id: "old-house-renovation",
        title: "Old house renovation or rebuild?",
        paras: [
          "Many older houses in Erode, Coimbatore and Krishnagiri have a sound structure under tired finishes. If the foundation, columns and slabs are in good condition, renovating keeps what works and replaces what does not, and you can often stay in the house.",
          "If the steel in the slabs is badly rusted, the house has settled, or the layout no longer suits the family, rebuilding can be the better choice. Our survey tells you which, and we put the reasons in writing. If you decide to rebuild, our house construction team takes it from there.",
        ],
      },
      {
        id: "structural-repair",
        title: "Structural repair and strengthening",
        paras: [
          "When water reaches the steel inside a slab, beam or column, the steel rusts, swells and pushes the concrete off. Plastering over it only hides the damage. We break out the loose concrete, clean the steel, prime it against corrosion, apply a bonding coat and rebuild the section with a repair mortar or micro-concrete.",
          "Where a column or beam needs to carry more, for an extra floor or because it has lost strength, we strengthen it by jacketing, designed by a structural engineer.",
        ],
        img: {
          src: "/images/anatomy-wp-walls.jpg",
          alt: "Worker applying a protective coat to a repaired external wall",
          caption: "A repaired wall protected before it is painted",
        },
      },
      {
        id: "bathroom-and-kitchen-renovation",
        title: "Bathroom and kitchen renovation",
        paras: [
          "A bathroom renovation is the best chance to fix what is under the tiles. We remove the old tiles and bed, replace the pipes, waterproof the floor and walls, flood-test the room and only then retile it. Kitchens get new plumbing and electrical points, a new platform and wall tiles, ready for modular cabinets.",
        ],
      },
      {
        id: "renovation-while-you-live-in",
        title: "Renovating while you live in the house",
        paras: [
          "Most families stay at home during a renovation. We work room by room or floor by floor, keep one bathroom and the kitchen working wherever possible, seal off dusty work and clear the site at the end of each day. The programme in your contract shows which rooms are out of use and when.",
        ],
      },
    ],
    products: {
      title: "Repair products we use",
      lede: "Repair mortars, bonding agents, steel primers and flexible coats from Fosroc and Sika. We supply them too, so you can see what goes into your walls.",
      slugs: ["fosroc-rendroc-sp40", "fosroc-nitobond-sbr", "sika-emaco-s348", "fosroc-nitozinc-primer", "fosroc-brushbond-rfx-grey"],
      jobs: ["repair"],
    },
    process: {
      title: "How a renovation runs",
      steps: [
        { title: "Free site visit", body: "An engineer walks through the house with you and notes what you want to change." },
        { title: "Condition survey", body: "Plaster, floors, roof, plumbing and structure inspected, and damp measured with a moisture meter." },
        { title: "Scope and estimate in writing", body: "The work, the order it is done in and an itemised estimate, before anything starts." },
        { title: "Programme around your family", body: "Which rooms are out of use and when, agreed with you and written into the contract." },
        { title: "Causes first", body: "Water sources sealed and structural repairs done before any new plaster, floor or paint." },
        { title: "Rebuild and finish", body: "Plastering, flooring, bathrooms, kitchen and painting, room by room." },
        { title: "Test and hand over", body: "Bathrooms flood-tested, terraces pond-tested, and each room handed back clean." },
      ],
    },
    gallery: {
      title: "Before and after",
      items: [
        { src: "/images/rain/leak-before.webp", alt: "Stained, peeling interior wall before renovation", caption: "Before: stains and peeling paint that returned every monsoon" },
        { src: "/images/rain/leak-after.webp", alt: "The same wall dry and freshly finished after the cause was fixed", caption: "After: the cause sealed first, then a new finish" },
        { src: "/stages/10-exterior-finishing.jpg", alt: "House exterior being plastered and painted", caption: "Exterior plaster and paint renewed" },
      ],
    },
    warranty: {
      title: "A written guarantee with every renovation",
      paras: [
        "Every renovation comes with a written guarantee. What it covers, including the waterproofing and structural repairs, and how long each part runs, is stated in your contract.",
        "If something we repaired does not perform as the contract says, we come back, find the cause and put it right.",
      ],
    },
    faqs: [
      { q: "What is the cost of house renovation per sq ft?", a: "Renovation is priced by the work, not just the floor area, because one house needs new floors and another needs structural repair. After a free survey we give you an itemised estimate in writing, so you can choose what to do now and what can wait." },
      { q: "Is it better to renovate or rebuild an old house?", a: "If the foundation, columns and slabs are sound, renovating is usually quicker and keeps you in the house. If the steel is badly rusted or the house has settled, rebuilding can make more sense. Our survey tells you which, with the reasons in writing." },
      { q: "Can you fix leaks and dampness as part of a renovation?", a: "Yes, and we do it first. We trace where the water comes in and seal it through our crack and leakage treatment work, then plaster, tile and paint over a dry structure." },
      { q: "How long does a full house renovation take, and can we stay in the house?", a: "Our renovations take between 2 and 10 months, depending on the scope. Most families stay at home: we work room by room, keep a bathroom and the kitchen working where possible and clean up each day." },
      { q: "Do I need approval to renovate or add a floor?", a: "Repairs and refinishing inside the house usually do not need approval. Adding a floor or extending the house usually needs a revised plan approval from the local body. We prepare the drawings and help you through it." },
      { q: "Can my house take an extra floor?", a: "Only if the foundation and columns can carry it. A structural engineer checks the existing drawings and the building itself before we advise you, and strengthens the structure where needed." },
      { q: "Can you fit new modular kitchens and wardrobes too?", a: "Yes. Our interiors team fits modular kitchens, wardrobes and false ceilings once the civil work, plumbing and waterproofing underneath are done." },
    ],
    related: ["crack-and-leakage-treatment", "bathroom-waterproofing", "interiors"],
  },

  // ───────────────────────────────────────────────────────────────── interiors
  {
    slug: "interiors",
    card: "Interiors",
    kind: "building",
    title: "Home Interior Design & Modular Kitchens",
    description:
      "Home interior designers in Erode, Coimbatore, Krishnagiri & Hosur: modular kitchens, wardrobes, false ceilings & panelling, fitted over tested wet areas.",
    h1: "Home interior designers",
    intro: [
      "RPC Constructions' home interior designers plan and fit modular kitchens, wardrobes, false ceilings, TV units and wall panelling to the same drawings as the building, so cabinets, lights, plumbing and switches line up the first time. Sinks, bathrooms and utility areas are sealed and water-tested before tiles and cabinets cover them.",
      "We design and fit home interiors from our head office in Erode and our branches in Coimbatore and Krishnagiri, for new houses we build, flats you have just bought and homes we are renovating, in Erode, Coimbatore, Krishnagiri and Hosur. One team handles the civil work and the interiors, so nothing is cut open after it is finished.",
    ],
    badges: [
      ["1 – 6 months", "typical fit-out, by scope"],
      ["Tested first", "wet areas sealed before cabinets go in"],
      ["One team", "civil work and interiors together"],
    ],
    hero: {
      src: "/images/interior-joinery.jpg",
      alt: "Living room with floor-to-ceiling timber panelling and built-in joinery",
    },
    signs: {
      title: "Is this for you?",
      lede: "Interiors work best when they are planned with the building, not squeezed in after it. We are a good fit if any of these apply.",
      items: [
        { title: "You are building a new house", body: "Kitchen layouts, wardrobe recesses, ceiling heights and lighting points planned with the structure, before walls are plastered." },
        { title: "You have just bought a 2BHK or 3BHK flat", body: "A bare flat fitted out room by room: kitchen, wardrobes, TV unit, ceilings and lighting." },
        { title: "Your kitchen is old and cramped", body: "A new layout, storage that suits how you cook, and new plumbing and electrical points under it." },
        { title: "You are renovating with us", body: "Interiors follow the civil work and waterproofing, so new cabinets never sit against a damp wall." },
        { title: "You want timber, stone or panelling", body: "Custom joinery, timber wall panelling and stone or tile floors, detailed and fitted by our own teams." },
      ],
    },
    table: {
      title: "What we design and fit, room by room",
      lede: "Each room is drawn before anything is made, and the work under it is checked before it is covered.",
      head: ["Room", "What we design and fit", "What we check first"],
      rows: [
        ["Kitchen", "Modular base and wall units, platform, chimney and appliance spaces, tall storage", "Sink waterproofing, plumbing and electrical points"],
        ["Bedrooms", "Wardrobes, loft storage, bed back panels, study units", "Wall straightness and any damp on outer walls"],
        ["Living and dining", "TV unit, display and storage, wall panelling, crockery unit", "Conduits for TV, data and lighting"],
        ["Bathrooms", "Vanity units, mirror cabinets, tile layouts, glass partitions", "Floor and wall waterproofing, flood test"],
        ["Ceilings and lighting", "False ceilings in gypsum or board, cove and spot lighting", "Ceiling height, fans and AC routes"],
        ["Floors", "Stone, tile and timber-look floors laid with branded adhesives and grouts", "A level, dry screed"],
        ["Offices", "Workstations, cabins, storage and reception for small offices", "Power and data layout"],
      ],
      note: "Materials, finishes and hardware for each unit are listed in the estimate, so you know what you are getting before it is made.",
    },
    sections: [
      {
        id: "modular-kitchens-and-wardrobes",
        title: "Modular kitchens and wardrobes",
        paras: [
          "A modular kitchen is built from units made to measure and fitted on site: base cabinets under the platform, wall cabinets above, and tall units for storage and appliances. We plan the layout around how you cook, then fix the positions of the sink, hob, chimney, fridge and every socket before the units are made.",
          "Under the sink is where kitchen cabinets fail first. We waterproof the platform and the wall behind it and test the plumbing before the units go in. Wardrobes are planned with the room, with lofts, drawers, hanging space and mirrors where you need them.",
        ],
      },
      {
        id: "false-ceiling-and-panelling",
        title: "False ceilings, lighting and wall panelling",
        paras: [
          "False ceilings hide wiring and AC pipes and carry cove and spot lighting. We plan them with the fan, light and AC positions so nothing is cut later. Timber wall panelling, bed back panels and TV walls are detailed with the joinery, so the grain, joints and edges line up across the room.",
        ],
      },
      {
        id: "2bhk-3bhk-interiors",
        title: "2BHK and 3BHK home interiors",
        paras: [
          "For a 2BHK or 3BHK flat, most families start with the kitchen, the wardrobes in each bedroom, a TV unit and the ceilings in the living room. We draw each room, list the materials and finishes, and fit the work in an order that lets you move in as soon as the kitchen and one bedroom are ready.",
          "In a new flat we first check what the builder has left: the waterproofing under the kitchen and bathrooms, the positions of the plumbing and electrical points, and the level of the floors. Anything that needs fixing is put right before the units are made, so the kitchen and wardrobes fit the room as it really is.",
        ],
      },
      {
        id: "interior-designers-erode-coimbatore",
        title: "Interior designers in Erode, Coimbatore, Krishnagiri and Hosur",
        paras: [
          "Our Erode head office designs and fits interiors across the Erode district. From Coimbatore we serve the city and its suburbs, and from Krishnagiri we cover Hosur. Wherever you are, the same team that checks the civil work fits the interiors over it.",
        ],
      },
    ],
    products: {
      title: "Products we use under the finishes",
      lede: "Tile adhesives, epoxy grouts and waterproof coats from Berger and Fosroc. We supply them too, so you can see what holds your tiles and keeps the wet areas dry.",
      slugs: ["berger-hs-tile-adhesive-plus", "berger-hs-epoxy-tile-grout", "berger-hs-tile-bond-anti-slip-grey", "fosroc-brushbond-rfx-grey"],
      jobs: ["bathroom"],
    },
    process: {
      title: "How an interiors job runs",
      steps: [
        { title: "Free consultation", body: "We visit the house or flat, measure it and talk about how you use each room." },
        { title: "Layout and drawings", body: "A plan of each room and an elevation of each wall, with the units, lights and points marked." },
        { title: "Materials and estimate", body: "Boards, finishes and hardware chosen with you, with an itemised estimate in writing." },
        { title: "Site checks", body: "Wet areas sealed and tested, plumbing and electrical points set, walls and floors checked for level." },
        { title: "Making the units", body: "Kitchen, wardrobe and storage units made to the measured drawings." },
        { title: "Fitting and finishing", body: "Ceilings, units, panelling, lights and fittings installed room by room." },
        { title: "Handover", body: "Every door, drawer and fitting checked with you, and the room handed over clean." },
      ],
    },
    gallery: {
      title: "From our sites",
      items: [
        { src: "/images/architectural-craft-detail.jpg", alt: "Close view of stone cladding meeting timber joinery", caption: "Stone and timber, joined cleanly" },
        { src: "/images/waterproofing/bathroom-wet-zone.jpg", alt: "Bathroom wet zone with waterproofed floor and walls before fittings", caption: "Wet areas sealed and tested before tiles and vanities" },
        { src: "/images/detail-02.jpg", alt: "Timber wall panelling framing a doorway with matching trim", caption: "Panelling and doorway trim detailed together" },
      ],
    },
    warranty: {
      title: "A written guarantee with every interior",
      paras: [
        "Every interiors job comes with a written guarantee. What it covers, including the units, hardware and the waterproofing under them, and how long each part runs, is stated in your contract.",
        "If anything we fitted does not perform as the contract says, we come back and put it right.",
      ],
    },
    faqs: [
      { q: "What does home interior design cost for a 2BHK or 3BHK?", a: "It depends on how many rooms you fit out, the materials and the finishes. We visit, measure and give you an itemised estimate in writing, room by room, so you can decide what to do now and what can wait." },
      { q: "How much does a modular kitchen cost?", a: "The size of the kitchen, the board, the shutter finish and the hardware decide the price. After we measure we list each unit and its material in a written estimate, and price any change before we make it." },
      { q: "How long do home interiors take to complete?", a: "Our interiors jobs take between one and six months, depending on the number of rooms and the units. A kitchen and wardrobes for a flat sit at the shorter end. The programme is agreed before work starts." },
      { q: "Do you provide drawings or 3D designs before work starts?", a: "You approve drawings of each room before anything is made: the plan, an elevation of each wall and a list of finishes. If you would like 3D views as well, ask at the first meeting and we will tell you what we can provide for your job." },
      { q: "What guarantee do you give on modular furniture?", a: "Every interiors job comes with a written guarantee. What it covers, including the units and hardware, and how long it runs, is stated in your contract." },
      { q: "Can you do interiors in a house someone else built?", a: "Yes. We check the wet areas, plumbing and electrical points first, and if anything needs fixing before the units go in, we tell you and include it in the estimate." },
      { q: "Do you do office interiors too?", a: "Yes, for small offices: workstations, cabins, storage, reception, ceilings and lighting, planned around your power and data layout." },
      { q: "Can interiors be planned while the house is still being built?", a: "Yes, and that is the best time. If we know the kitchen layout, wardrobe positions and ceiling design before the walls are plastered, the pipes, switches and lighting points go exactly where the units need them, and nothing is cut open later." },
    ],
    related: ["renovation-and-leak-repair", "bathroom-waterproofing", "residential-construction"],
  },

  // ──────────────────────────────────────────────────────── project management
  {
    slug: "project-management",
    card: "Project Management",
    kind: "building",
    title: "Construction Project Management Services",
    description:
      "Construction project management services (PMC) for homes, factories & commercial builds: site supervision, QS & quality audit. Erode, Coimbatore, Krishnagiri.",
    h1: "Construction project management services",
    intro: [
      "RPC Constructions' construction project management services give owners and developers independent control of cost, programme and quality on a house, factory or commercial building, whether we build it or another contractor does. We plan the project, check each stage on site, measure and certify the bills, and keep the records you need at handover.",
      "We manage projects from our head office in Erode and our branches in Coimbatore and Krishnagiri, which covers the Kongu belt and Hosur. We also act for NRI owners building at home. One check sets us apart: an engineer inspects each waterproofing layer before the next trade covers it.",
    ],
    badges: [
      ["Full lifecycle", "from brief to handover"],
      ["Every layer", "waterproofing inspected before it is covered"],
      ["All sizes", "one house to a factory"],
    ],
    hero: {
      src: "/images/bp-1.jpg",
      alt: "Blueprint-style wireframe drawing of a multi-storey building",
    },
    signs: {
      title: "When to call us",
      lede: "A project manager is on your side of the table. These are the situations where owners most often need one.",
      items: [
        { title: "You live abroad or in another city", body: "You need someone on site who reports to you, not to the contractor, with photos and measured progress at each stage." },
        { title: "You have a contractor but no engineer", body: "Someone has to check the steel before a pour, the waterproofing before tiling and the bills before you pay." },
        { title: "You are a developer with several contractors", body: "Civil, MEP, façade and interiors contractors need one programme and one person coordinating them." },
        { title: "Your last project ran over", body: "Late changes, unmeasured extras and unchecked work are where budgets go. We control all three." },
        { title: "You are expanding a plant", body: "A new shed or block that must be built around a running factory, on a fixed date." },
      ],
    },
    table: {
      title: "What our project management covers, stage by stage",
      lede: "You can hire us for the whole project or for the stages where you need help most.",
      head: ["Stage", "What we do", "What you get"],
      rows: [
        ["Brief and feasibility", "Your needs, budget and site studied; options compared", "A clear brief and a budget to work to"],
        ["Design and approvals", "Architect and structural engineer coordinated; we prepare the drawings and help you through DTCP or local-body approvals", "Approved drawings ready to build from"],
        ["BOQ and tendering", "Bill of quantities prepared, contractors invited, bids compared like for like", "A contractor chosen on a fair comparison"],
        ["Contract and programme", "Contract terms, payment stages and a programme agreed with the contractor", "A signed contract and a dated programme"],
        ["Site supervision", "Engineer on site at each stage: setting out, steel, concrete, masonry, services", "Stage checks before work is covered"],
        ["Quality audit", "Concrete, materials and waterproofing checked, pond and flood tests witnessed", "Inspection and test records"],
        ["Cost control and billing", "Work measured, bills checked, variations priced before they are approved", "Payments only for work done and checked"],
        ["Handover", "Snag lists closed, as-built drawings and documents collected", "A complete handover file"],
      ],
      note: "You can use RPC as your project management consultant even when another contractor is building.",
    },
    sections: [
      {
        id: "pmc-services",
        title: "PMC services: what a project management consultant does",
        paras: [
          "A project management consultant (PMC) acts for the owner. The contractor builds; the PMC makes sure what is built matches the drawings, the specification, the budget and the programme. We set the programme, coordinate the designers and contractors, check work before it is covered, measure progress and certify bills before you pay them.",
          "Because we build and waterproof ourselves, we know where corners get cut on site, and that is where we look hardest.",
        ],
      },
      {
        id: "nri-house-construction-supervision",
        title: "NRI house construction supervision",
        paras: [
          "Building a house in Tamil Nadu while living abroad is hard to do by phone. We act as your representative on site: we check the contractor's work at each stage, measure what has been built, check each bill against it and send you progress reports with photos, so you pay for work done, not work promised.",
          "If you have not yet chosen a builder, we can prepare the drawings and the bill of quantities, compare quotes for you, or build the house ourselves under our house construction service.",
        ],
      },
      {
        id: "quantity-surveying-and-quality-audit",
        title: "Quantity surveying, billing and quality audit",
        paras: [
          "Quantity surveying turns the drawings into a bill of quantities, and later checks each running bill against what was actually built. Variations are priced before they are approved, not argued over at the end.",
          "Our quality audit covers the work most likely to cause trouble later: concrete placing and curing, cover to the steel, and every waterproofing layer, with pond and flood tests witnessed and recorded.",
        ],
        bullets: [
          "Bill of quantities and cost plan",
          "Running bill checks and variation pricing",
          "Steel and concrete checks before every pour",
          "Waterproofing inspected layer by layer, tests recorded",
        ],
      },
      {
        id: "project-management-consultants-coimbatore",
        title: "Project management consultants in Erode, Coimbatore and Krishnagiri",
        paras: [
          "Our Coimbatore branch manages homes and commercial buildings across the city. From our Erode head office we cover the Kongu belt, and our Krishnagiri branch covers the factories and homes around Hosur.",
        ],
      },
    ],
    products: {
      title: "Products we check on site",
      lede: "We supply these admixtures, curing compounds and waterstops, so we know how each should be used, and we check that it is used that way on your site.",
      slugs: ["fosroc-concure-wb-white", "fosroc-conplast-sp430", "fosroc-conplast-wl-xtra", "fosroc-supercast-sw20"],
      jobs: ["pour"],
    },
    process: {
      title: "How we manage your project",
      steps: [
        { title: "First meeting", body: "We learn what you are building, your budget and your dates, and what help you need." },
        { title: "Scope and fee in writing", body: "The stages we will manage and the fee for them, agreed before we start." },
        { title: "Plan and programme", body: "Design coordination, approvals support and a programme with a date for every stage." },
        { title: "Tender and contract", body: "Bill of quantities, contractor bids compared, contract and payment stages agreed." },
        { title: "Stage checks on site", body: "An engineer checks each stage, including every waterproofing layer, before it is covered." },
        { title: "Bills and reports", body: "Work measured, bills checked and a progress report with photos sent to you." },
        { title: "Handover", body: "Snags closed, tests recorded and the drawings and documents handed over." },
      ],
    },
    gallery: {
      title: "Stage by stage",
      items: [
        { src: "/images/process-03.jpg", alt: "Construction site with a tower crane lifting materials to the upper floors", caption: "Programme and site checked at every stage" },
        { src: "/images/process-04.jpg", alt: "Aerial view of a completed apartment block with its surroundings", caption: "Handed over with a complete file" },
        { src: "/images/bp-3.jpg", alt: "Aerial view of a building under construction with its upper floors in progress", caption: "Progress measured and reported at each stage" },
      ],
    },
    warranty: {
      title: "What we stand behind",
      paras: [
        "Our project management agreement states the stages we manage, the checks we make, the reports you receive and our fee, in writing before we start.",
        "When we also build the project, it comes with our written guarantee, with its terms set out in the construction contract.",
      ],
    },
    faqs: [
      { q: "What does a construction project management consultant (PMC) do?", a: "A PMC acts for the owner. We plan the programme, coordinate the designers and contractors, check work on site before it is covered, measure progress and check bills before you pay, so the building matches the drawings, budget and dates." },
      { q: "How much do PMC services cost?", a: "The fee depends on the size of the project and the stages you want us to manage. We agree the scope with you and give you the fee in writing before we start." },
      { q: "Do I need a PMC if I already have a contractor?", a: "A contractor's engineer works for the contractor. A PMC works for you, checking quality, measuring work and controlling extras. You can use RPC as your PMC even when another contractor is building." },
      { q: "Can you manage my house construction while I live abroad?", a: "Yes. We act as your representative on site, check each stage, check bills against measured work and send you progress reports with photos, so you can follow the build from anywhere." },
      { q: "How do you control cost overruns and delays?", a: "We fix the scope in a bill of quantities, price every variation before it is approved, pay only against measured work, and track the programme stage by stage so delays are caught early." },
      { q: "Do you handle approvals?", a: "We prepare the drawings and documents and help you through DTCP or local-body approvals. The approval is granted by the authority, and we plan the programme around it." },
      { q: "Can you take over a project that is already under way?", a: "Yes. We start with a site audit of the work done so far, measure it against the drawings and bills paid, and list what needs correcting. From there we manage the remaining stages like any other project." },
      { q: "What reports will I receive?", a: "Stage inspection notes, test records for concrete and waterproofing, checked bills and progress reports with photos. Everything is collected into a handover file at the end." },
    ],
    related: ["residential-construction", "commercial-construction", "industrial-construction"],
  },
];
