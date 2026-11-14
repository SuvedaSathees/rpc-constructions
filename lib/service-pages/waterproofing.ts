import type { ServicePage } from "./types";

/** the other seven waterproofing service pages, in the order of the /services cards; same shape and tone as terrace.ts */
export const WATERPROOFING_PAGES: readonly ServicePage[] = [
  /* ------------------------------------------------------------------ bathroom */
  {
    slug: "bathroom-waterproofing",
    card: "Bathroom waterproofing",
    kind: "waterproofing",
    area: "bathroom",
    title: "Bathroom Waterproofing & Leakage Repair",
    description:
      "Bathroom waterproofing & leakage repair, often without removing tiles: joints, floor trap, sunken slab. Erode, Coimbatore, Krishnagiri & Hosur. Free visit.",
    h1: "Bathroom waterproofing services",
    intro: [
      "Bathroom waterproofing services from RPC Constructions stop water escaping from your bathroom into the walls and the room below, and in many cases we do it without breaking the tiles. An engineer traces where the water gets out, through the tile joints, the floor-wall corner, the floor trap, a pipe or the sunken slab, and our own crew seals that point with one named system.",
      "We work on houses, flats and hostels across Erode, Coimbatore, Krishnagiri and Hosur, on old bathrooms that already leak and on new ones before they are tiled. We also supply the Fosroc, Sika and Berger products we use, so you can see exactly what goes under your floor.",
    ],
    badges: [
      ["Free", "inspection and leak trace by an engineer"],
      ["Tiles stay", "when the leak is at the joints, not the slab"],
      ["Flood test", "before every bathroom is handed back"],
    ],
    hero: { src: "/images/rain/bath-after.webp", alt: "Flexible waterproof membrane laid on a bathroom floor and turned up the walls before tiling" },
    signs: {
      title: "Signs your bathroom needs waterproofing",
      lede: "A bathroom leak rarely shows in the bathroom. Look at the ceiling below and the walls next door.",
      items: [
        { title: "Damp patch on the ceiling below", body: "A stain on the ceiling of the room or flat under the bathroom, often right below the floor trap, the toilet or the shower." },
        { title: "Damp skirting on the next wall", body: "Bubbling paint or a damp line on the bedroom or hall wall that shares a side with the bathroom." },
        { title: "Dark, cracked or missing grout", body: "Open tile joints let shower water straight into the bed below the tiles, where it spreads out of sight." },
        { title: "Hollow-sounding tiles", body: "Tap the floor tiles. A hollow sound means the bed has lost its bond, usually because water is sitting under it." },
        { title: "Water around the trap or toilet base", body: "Gaps around the floor trap, the toilet pan or a pipe collar are among the most common bathroom leak points." },
      ],
    },
    table: {
      title: "Bathroom waterproofing methods we use",
      lede: "The repair depends on where the water escapes and how sound the tiles are.",
      head: ["Method", "Best for", "Tiles removed?", "When we choose it"],
      rows: [
        ["Epoxy re-grouting and joint sealing", "Leaks through worn or cracked tile joints", "No", "The tiles are well bonded and the bed below is not soaked"],
        ["Corner, trap and pipe-collar sealing", "Leaks at the floor-wall corner, floor trap, toilet base and pipe entries", "No, or a single row at most", "Damp shows on the wall outside or around one pipe"],
        ["Flexible cementitious coat under new tiles", "Bathrooms being redone, and hollow or broken floors", "Yes, floor and lower walls", "The bed is wet or the tiles have lost their bond"],
        ["Sunken slab treatment", "Older bathrooms with a sunken slab filled with debris that holds water", "Yes", "The ceiling below stays damp even after re-grouting"],
        ["Integral waterproofing in screed and plaster", "New bathrooms while the house is built", "Not applicable", "Every new bathroom we build, together with the coat"],
      ],
      note: "If the leak is from a supply pipe or a drain joint, we say so and fix the pipe first. No coating can stop a pipe that is leaking under pressure.",
    },
    sections: [
      {
        id: "bathroom-leakage-repair-without-removing-tiles",
        title: "Bathroom leakage repair without removing tiles",
        paras: [
          "Most bathroom leaks start at the joints, not through the tiles. Cement grout wears and cracks, and cleaning acids open it further. We rake the old grout out to depth, clean and dry the joints, and fill them with epoxy grout, which does not absorb water. The floor-wall corner, the floor trap and every pipe collar are sealed at the same visit.",
          "This works when the tiles are firmly bonded. If tapping shows hollow tiles, or the moisture meter shows the bed is soaked, sealing over it only hides the leak for a season. Then the quote covers lifting the floor and waterproofing the slab instead.",
        ],
      },
      {
        id: "bathroom-leakage-from-upper-floor",
        title: "Bathroom leakage from the upper floor into the ceiling below",
        paras: [
          "In flats and two-storey houses the first sign is often a damp ceiling under the bathroom. The water may come from the tile joints, the sunken slab, a drain joint or a hidden supply pipe, and each needs a different repair. We flood-test the floor and trap separately, pressure-test the supply lines and read the damp below, so we know which it is. In apartments we write down what we found for both owners.",
        ],
        img: { src: "/images/waterproofing/house-wet-zones.jpg", alt: "Cutaway of a two-storey house marking the bathrooms and wet zones above living rooms", caption: "Wet zones above living rooms, where a bathroom leak shows first" },
      },
      {
        id: "sunken-slab-waterproofing",
        title: "Toilet and sunken slab waterproofing",
        paras: [
          "Many older bathrooms in Tamil Nadu have a sunken slab: a recess filled with brick, debris and sand under the tiles, with the pipes running through it. Once water gets in, the filling holds it like a sponge for months, and re-grouting the top cannot dry it.",
          "We lift the floor, empty and dry the sunken portion, seal the pipe sleeves and lay a flexible coat over the slab and up the walls. The fill is replaced with waterproofed concrete, and the bathroom is flood-tested before the new tiles go down.",
        ],
      },
      {
        id: "bathroom-waterproofing-before-tiling",
        title: "Bathroom waterproofing before tiling, in new bathrooms",
        paras: [
          "The best time to waterproof a bathroom is after the plumbing is pressure-tested and before the screed and tiles. The floor is sloped to the trap, the corners get a fillet, and the flexible coat covers the floor and runs up the walls, to full height in the shower zone. We flood-test it, then lay the screed, the tiles and epoxy joints. Building with us? Our house construction page shows how every wet area is waterproofed as it is built.",
        ],
      },
    ],
    products: {
      title: "The products we use in bathrooms",
      lede: "Fosroc and Sika coats, polymer for the screed, and Berger adhesive and epoxy grout. We supply them too, so you can see each one.",
      slugs: ["fosroc-brushbond-rfx-grey", "fosroc-nitocote-cm210-white", "sika-seal-550", "fosroc-nitobond-sbr", "berger-hs-tile-adhesive", "berger-hs-epoxy-tile-grout"],
      jobs: ["bathroom"],
    },
    process: {
      title: "How our bathroom waterproofing works",
      steps: [
        { title: "Leak trace", body: "An engineer checks the joints, trap, pipes and the ceiling below, and tests the floor and the supply lines separately." },
        { title: "One method, in writing", body: "You get the repair, the products and what will be removed, if anything, before work starts." },
        { title: "Preparation", body: "Old grout is raked out, or the tiles and wet fill are removed and the slab dried." },
        { title: "Details first", body: "Corners, the floor trap, the toilet base and pipe collars are sealed before the main coat or grout." },
        { title: "The waterproofing", body: "Epoxy grout in the joints, or a flexible coat on the floor and walls at the thickness the maker specifies." },
        { title: "Flood test and handover", body: "We hold water on the floor, check the ceiling and walls below, and only then hand the bathroom back." },
      ],
    },
    gallery: {
      title: "Bathroom waterproofing, before and after",
      items: [
        { src: "/images/rain/bath-before.webp", alt: "Bathroom floor with stained, cracked grout before leak repair", caption: "Before: open joints letting water under the tiles" },
        { src: "/images/rain/bath-after.webp", alt: "The same bathroom floor after re-grouting and sealing", caption: "After: sealed joints and corners, tiles kept" },
        { src: "/images/anatomy-wp-interior.jpg", alt: "RPC worker brushing a waterproof coat onto a bathroom floor", caption: "A flexible coat on the slab before the new floor" },
        { src: "/images/waterproofing/bathroom-wet-zone.jpg", alt: "Shower wet zone with the waterproof layer taken up the wall", caption: "The wet zone, coated up the wall behind the shower" },
      ],
    },
    warranty: {
      title: "A written guarantee with every bathroom",
      paras: [
        "Every bathroom we waterproof is flood-tested before handover, and you get a written guarantee. How long it runs depends on the method, and it is stated in your quote with what it covers.",
        "If water comes through a bathroom we have treated within that time, we come back, find out why and put it right.",
      ],
    },
    faqs: [
      { q: "How much does bathroom waterproofing cost?", a: "It depends on whether the tiles can stay, the size of the bathroom and the state of the slab below. We inspect free of charge and give you one fixed price for your bathroom in writing before any work starts." },
      { q: "Can bathroom leakage be repaired without removing tiles?", a: "Yes, when the tiles are well bonded and the leak is at the joints, corners or pipe collars. We replace the grout with epoxy and seal those points. If the tiles are hollow or the bed is soaked, the floor has to come up, and we tell you that before we start." },
      { q: "Which waterproofing is best for a bathroom?", a: "Under the tiles, a flexible cementitious coat, because it bonds to the slab and moves with small cracks. Epoxy grout is not a waterproofing layer, but it keeps water out of the joints, so a full job uses both." },
      { q: "Should bathroom waterproofing be done before or after plastering and tiling?", a: "After the plumbing is fixed and pressure-tested and the walls are plastered, and before the screed and tiles. That way the coat covers the whole floor and runs up the walls without gaps." },
      { q: "How do I find where my bathroom is leaking from?", a: "Note when the damp below gets worse. A patch that is wet all the time points to a supply pipe; damp after use points to the joints, trap or slab. Our inspection tests each one separately." },
      { q: "How long will the bathroom be out of use?", a: "A re-grout and seal usually needs a day or two, so the epoxy can cure. A full redo takes longer, and we give you the dates in the quote." },
      { q: "How long does bathroom waterproofing last, and is there a guarantee?", a: "A properly laid coat under the tiles lasts as long as the floor, and epoxy joints last far longer than cement grout. You get a written guarantee, and its length for your method is stated in the quote." },
      { q: "Do you waterproof kitchens and utility areas too?", a: "Yes. Kitchen sinks, utility and wash areas get the same methods and the same water test as a bathroom." },
    ],
    related: ["balcony-waterproofing", "crack-and-leakage-treatment", "renovation-and-leak-repair"],
  },

  /* ------------------------------------------------------------------ water tank and sump */
  {
    slug: "water-tank-waterproofing",
    card: "Water tank waterproofing",
    kind: "waterproofing",
    area: "tank",
    title: "Water Tank & Sump Waterproofing Services",
    description:
      "Water tank & sump waterproofing with linings named in writing for drinking water. Leak repair & crystalline coats. Erode, Coimbatore, Krishnagiri & Hosur.",
    h1: "Water tank waterproofing services",
    intro: [
      "Water tank waterproofing services from RPC Constructions stop overhead tanks and underground sumps leaking, and keep the water you drink clean. We drain and clean the tank, repair cracks and joints, plug any running leak, and line the inside with a coat we name in writing, with its data sheet, so you can check it is suitable for drinking water.",
      "We treat RCC overhead tanks on house terraces, apartment sumps and large storage sumps across Erode, Coimbatore, Krishnagiri and Hosur. In Erode, hard borewell water leaves thick scale on tank walls, so descaling comes before any repair; on low-lying sites, the ground water around a sump is the bigger risk.",
    ],
    badges: [
      ["Free", "inspection and fill test of the tank"],
      ["Named", "lining and data sheet, before work"],
      ["Fill test", "before the tank goes back into use"],
    ],
    hero: { src: "/images/rain/tank-after.webp", alt: "Cutaway of an RCC overhead water tank showing the inside waterproof lining" },
    signs: {
      title: "Signs your tank or sump is leaking",
      lede: "A leak wastes water, but the bigger worry is what can get in.",
      items: [
        { title: "The level drops with no use", body: "Mark the level at night with the outlet valve closed. If it is lower by morning, the tank or sump is losing water." },
        { title: "Damp ceiling under the overhead tank", body: "A wet patch on the top-floor ceiling right below the tank, often mistaken for a terrace leak." },
        { title: "Wet ground or moss around the sump", body: "Soft, wet soil or green growth around a sump wall or lid shows water leaking out into the ground." },
        { title: "Muddy water after rain", body: "If sump water turns cloudy after heavy rain, ground water is getting in, and so can whatever it carries." },
        { title: "Cracks and white lines inside", body: "Hairline cracks with white salt lines, or rough honeycomb patches, mark where water passes through the concrete." },
        { title: "Rust stains or falling concrete", body: "Brown streaks or spalling on the tank roof slab mean the steel is corroding and needs repair before lining." },
      ],
    },
    table: {
      title: "Water tank and sump waterproofing methods",
      lede: "Most tanks need two of these: the leaks stopped first, then a lining.",
      head: ["Method", "Best for", "Applied on", "Drinking-water note"],
      rows: [
        ["Rapid plug and crack repair", "Running leaks, honeycombs, pipe entries and open joints", "Inside the tank", "Always done before any lining"],
        ["Crystalline treatment", "Concrete tanks and sumps that take water through fine cracks", "Inside, or in the concrete when it is cast", "Cured and flushed before refilling"],
        ["Cementitious waterproof coat", "A full lining for overhead tanks and sumps", "Inside walls, floor and the underside of the roof", "Named in the quote with the maker's data sheet"],
        ["Food-grade epoxy lining", "Tanks where a smooth, easy-to-clean surface is wanted", "Inside, over a sound and dry surface", "Only a coating its maker lists for potable water"],
        ["Waterstops and waterproof concrete", "New sumps and tanks while they are cast", "In the joints and the concrete mix", "Makes the shell itself watertight"],
      ],
      note: "We never use bitumen, solvent paints or roof coatings inside a drinking-water tank.",
    },
    sections: [
      {
        id: "sump-waterproofing",
        title: "Sump waterproofing",
        paras: [
          "A sump leaks both ways. When it is full, water leaks out into the ground; when the ground is wet, ground water, and sometimes seepage from a nearby drain, leaks in. That second direction is a health problem, not only a waste of water. It is worst on low-lying ground and beside open drains, where the ground water stays high through the north-east monsoon.",
          "An existing sump can only be treated from inside, because the outside is buried. We empty and clean it, cut out and plug every leaking crack and joint, seal the pipe entries, and apply a crystalline treatment and a cementitious lining over the walls and floor. New sumps are built watertight from the start: waterstops in the joints, a crystalline admixture in the concrete, and a lining inside.",
        ],
        bullets: [
          "Manhole collar raised above the floor so wash water cannot run in",
          "Lid and pipe sleeves sealed",
          "Fill test with the level marked before the sump is put back into use",
        ],
        img: { src: "/images/waterproofing/sump-cutaway.jpg", alt: "Cutaway of an underground sump showing the walls, floor and lining below ground level", caption: "A sump below ground, where water can leak out and in" },
      },
      {
        id: "overhead-tank-waterproofing",
        title: "Overhead tank waterproofing on the terrace",
        paras: [
          "RCC overhead tanks usually leak at the floor-wall joint, at pipe entries and through cracks in the roof slab. The water often shows on the top-floor ceiling, so it is easy to blame the terrace; we fill-test the tank with the valves closed to confirm it first.",
          "Inside, we descale, repair and line the tank. Outside, the walls and roof get a weather coat and the base joint with the terrace is sealed, so sun and rain do not crack the shell again.",
        ],
      },
      {
        id: "water-tank-leakage-repair",
        title: "Water tank leakage repair: find the leak first",
        paras: [
          "Before we touch the tank, we check whether it is the tank or the plumbing. A level that drops with the outlet closed means the tank; a level that only drops when the pump runs often means a float valve, an overflow or a pipe. Those are fixed as plumbing.",
        ],
      },
      {
        id: "drinking-water-safety",
        title: "Safe for drinking water: what goes inside your tank",
        paras: [
          "Anything we put inside a tank is named in your quote, with the maker's data sheet, so you can see it is meant for drinking-water structures. Each coat cures for the time the maker sets, with the tank ventilated, and the tank is flushed before it is refilled.",
        ],
      },
    ],
    products: {
      title: "The products we use in tanks and sumps",
      lede: "Crystalline and cementitious systems, a rapid plugging mortar and joint waterstops from Fosroc and Sika. We supply them too, so you can check each one before it goes into your tank.",
      slugs: ["fosroc-conplast-crystalline", "penetron-penetron-admix", "fosroc-brushbond-grey", "fosroc-rendroc-plug", "fosroc-supercast-sw20", "sika-seal-551", "fosroc-nitocote-cm210-white"],
      jobs: ["tank"],
    },
    process: {
      title: "How our water tank waterproofing works",
      steps: [
        { title: "Drain, clean and inspect", body: "The tank is emptied, cleaned and descaled, and an engineer marks every crack, joint, pipe entry and weak patch." },
        { title: "One method, in writing", body: "You get the repair, the lining and its data sheet, and the date the tank can be used again, before work starts." },
        { title: "Repair and plug", body: "Running leaks are plugged; cracks and honeycombs are cut out and filled; exposed steel is cleaned and repaired." },
        { title: "Joints and pipe entries", body: "The floor-wall joint, the corners and every pipe sleeve are sealed before the lining." },
        { title: "Lining and curing", body: "The crystalline treatment and the lining coats go on at the maker's thickness, then cure for the time it sets." },
        { title: "Fill test and refill", body: "We fill the tank, mark the level and check it, then flush it, so it goes back into use clean." },
      ],
    },
    gallery: {
      title: "Water tank and sump waterproofing, before and after",
      items: [
        { src: "/images/rain/tank-before.webp", alt: "Inside of a concrete water tank with cracks, scale and damp patches", caption: "Before: scale, cracks and wet joints" },
        { src: "/images/rain/tank-after.webp", alt: "The same water tank after repair and a fresh waterproof lining", caption: "After: repaired, lined and fill-tested" },
        { src: "/images/methods/concrete.webp", alt: "Close-up of a dense concrete block with waterproofing admixture", caption: "Waterproof concrete: the shell itself resists water" },
      ],
    },
    warranty: {
      title: "A written guarantee with every tank",
      paras: [
        "Every tank and sump we treat is fill-tested before it goes back into use, and you get a written guarantee with the job. How long it runs depends on the system, and it is stated in your quote together with what it covers.",
        "If the tank loses water through the walls or floor we treated within that time, we come back, find out why and put it right.",
      ],
    },
    faqs: [
      { q: "How much does water tank or sump waterproofing cost?", a: "It depends on the size of the tank, how much repair the concrete needs and the lining chosen. After a free inspection we give you one fixed price for the whole tank, in writing, before we start." },
      { q: "Is the waterproofing safe for drinking water?", a: "We line drinking-water tanks only with products made for water-retaining and drinking-water use, and we name them in the quote with the maker's data sheet. Each coat is fully cured and the tank is flushed before it is refilled." },
      { q: "Which waterproofing is best for a water tank?", a: "For most concrete tanks and sumps, a crystalline treatment with a cementitious lining is the right choice: it bonds to the concrete and seals fine cracks. An epoxy lining suits tanks where a smooth, easy-to-clean surface matters. Running leaks are always plugged first, whichever lining is used." },
      { q: "How long must the tank stay empty?", a: "Usually a few days, for cleaning, repair, the lining and its curing. We give you the date in writing, so you can plan another water source." },
      { q: "Should a sump be waterproofed from the inside or the outside?", a: "Both, if the sump is being built: a lining inside and waterproof concrete and joints in the shell. An existing sump can only be treated from inside, which works well when the leaks are plugged first and the lining is laid over sound concrete." },
      { q: "How do I know if my sump or overhead tank is leaking?", a: "Close the outlet valve at night and mark the water level. If it drops by morning, the tank is leaking. Damp ceilings below an overhead tank, wet soil around a sump, or muddy water after rain are other signs." },
      { q: "Do you clean the tank before waterproofing?", a: "Yes. Scale, silt and loose concrete must come off for the lining to bond, including the thick deposits hard borewell water leaves in Erode tanks." },
      { q: "Can you waterproof a new sump while the house is being built?", a: "Yes, and it is the best time. We fix waterstops in the joints, add a crystalline admixture to the concrete and line the inside, so the sump is watertight from the first fill." },
    ],
    related: ["basement-waterproofing", "terrace-waterproofing", "crack-and-leakage-treatment"],
  },

  /* ------------------------------------------------------------------ basement */
  {
    slug: "basement-waterproofing",
    card: "Basement waterproofing",
    kind: "waterproofing",
    area: "basement",
    title: "Basement & Lift Pit Waterproofing",
    description:
      "Basement waterproofing services for basements, lift pits, retaining walls & cellar parking. Membrane, crystalline & injection. Erode, Coimbatore, Krishnagiri.",
    h1: "Basement waterproofing services",
    intro: [
      "Basement waterproofing services from RPC Constructions keep ground water out of basements, lift pits, retaining walls and cellar car parks, in new buildings and in ones that already leak. On new work we wrap the structure from outside and seal every joint before backfilling; on a basement that already leaks, we stop the running water and treat the walls and floor from inside.",
      "Basements on low-lying ground sit in high ground water through the north-east monsoon, and sites in Erode, Coimbatore, Krishnagiri and Hosur on clay or near channels see the water rise each rainy season. An engineer reads the site and the structure first, and we supply the Sika and Fosroc membranes and admixtures we use.",
    ],
    badges: [
      ["Free", "site inspection by an engineer"],
      ["Both sides", "outside on new work, inside on existing"],
      ["Own crews", "no subcontractors below ground"],
    ],
    hero: { src: "/images/anatomy-wp-foundation.jpg", alt: "RPC worker sealing the outside face of a basement wall before backfilling" },
    signs: {
      title: "Signs your basement needs waterproofing",
      lede: "Below ground, water pushes in from every side. These signs usually get worse after rain, when the water table rises.",
      items: [
        { title: "Damp walls after rain", body: "Dark patches on the basement walls that spread during the monsoon and shrink in the dry months." },
        { title: "Water at the floor-wall joint", body: "A wet line or puddles where the floor meets the walls, the joint between two separate pours." },
        { title: "Seepage at joints and tie holes", body: "Water through construction joints, form-tie holes and pipe entries, the weak points of any basement." },
        { title: "White salts on the concrete", body: "Efflorescence on walls and columns shows water travelling through the concrete and drying on the face." },
        { title: "Water standing in the lift pit", body: "A wet or flooded lift pit, which can damage the lift equipment and stop the lift." },
        { title: "Rust and falling concrete", body: "Brown stains or spalling on columns and the slab soffit in a cellar car park mean the steel is corroding." },
      ],
    },
    table: {
      title: "Basement waterproofing methods we use",
      lede: "The side we can reach decides most of the method. Positive side is the face the ground water reaches; negative side is the face inside the basement.",
      head: ["Method", "Stage", "Side", "Best for"],
      rows: [
        ["HDPE or bituminous membrane", "New construction", "Outside (positive)", "Raft, walls and retaining walls before backfilling"],
        ["Waterstops in construction joints", "New construction", "In the joint", "Every raft-to-wall and wall-to-wall joint"],
        ["Crystalline treatment", "New or existing", "In the concrete, or inside", "Walls and rafts that take water through fine cracks"],
        ["Injection grouting", "Existing", "From inside", "Leaking cracks, joints and tie holes"],
        ["Rapid plug and cementitious lining", "Existing", "Inside (negative)", "Running leaks first, then a lining for damp walls"],
      ],
      note: "Outside is always the better side. On a finished building, inside is often the only face we can reach, so the leaks are stopped first and the lining is built to resist water pressure.",
    },
    sections: [
      {
        id: "basement-seepage-repair",
        title: "Basement seepage and leakage repair in existing buildings",
        paras: [
          "In an existing basement the soil is already against the walls, so the repair is done from inside. We map every leak with the walls dry, then stop running water at joints and holes with a rapid-setting plug, inject leaking cracks and joints, and apply a crystalline treatment and a cementitious lining over the walls and the floor-wall joint.",
          "Where water rises through the raft, the floor is treated too, and we check the drainage around the building, because a blocked drain or a broken rainwater pipe outside often feeds the leak.",
        ],
      },
      {
        id: "lift-pit-waterproofing",
        title: "Lift pit waterproofing",
        paras: [
          "A lift pit is the lowest point of the building, so it takes the most water pressure. Even a small leak floods the pit and can damage the buffers and the wiring. For new pits we waterproof the outside and the joints before the walls are backfilled; for wet pits in use, we pump out, plug and inject the leaks, and line the pit from inside. We work with the lift company so the lift is stopped for as short a time as possible.",
        ],
      },
      {
        id: "retaining-wall-waterproofing",
        title: "Retaining wall and foundation waterproofing",
        paras: [
          "Retaining walls hold back wet soil on one side and must let that water drain away rather than build up. We lay a membrane or a waterproof coat on the soil face, protect it, and add a drainage layer and weep holes where the design needs them. For foundations and rafts, the membrane goes under and around the concrete, with waterstops in every joint, before the soil comes back.",
        ],
        img: { src: "/images/methods/joint.webp", alt: "Construction joint between two concrete pours, the weak point a waterstop seals", caption: "A construction joint, sealed with a waterstop before the next pour" },
      },
      {
        id: "cellar-parking-waterproofing",
        title: "Cellar and underground parking waterproofing",
        paras: [
          "Apartment and commercial cellars take water from the ground and from the podium or ramp above. We treat the walls and joints, the ramp drain and the slab above, and repair columns where the steel has started to rust. Work is planned in bays, so most of the parking stays in use. Sumps and underground water tanks are covered on our water tank waterproofing page.",
        ],
        img: { src: "/images/rain/basement-after.webp", alt: "Underground apartment car park with waterproofed walls and columns", caption: "A cellar car park, treated bay by bay" },
      },
    ],
    products: {
      title: "The products we use below ground",
      lede: "HDPE and bituminous membranes, joint waterstops, crystalline admixtures and a rapid plugging mortar from Sika and Fosroc. We supply them too, so you can see each one and what it is for.",
      slugs: ["sikaproof-312-hdpe", "sika-bit-w1", "fosroc-supercast-sw20", "sikaswell-a2010-bar", "fosroc-conplast-crystalline", "penetron-penetron-admix", "fosroc-rendroc-plug"],
      jobs: ["basement"],
    },
    process: {
      title: "How our basement waterproofing works",
      steps: [
        { title: "Site and structure check", body: "An engineer checks the walls, joints, raft and drainage, and how high the ground water rises in the rains." },
        { title: "One method, in writing", body: "You get the system for each part, the products and the work sequence before we start." },
        { title: "Stop the running water", body: "Active leaks are plugged and leaking cracks are injected, so the surface can be prepared dry." },
        { title: "Joints and details", body: "Construction joints, tie holes, pipe entries and corners are sealed before the main layer." },
        { title: "The waterproofing system", body: "A membrane outside on new work, or a crystalline treatment and lining inside on existing basements." },
        { title: "Check after rain and handover", body: "We inspect the walls and joints again once the ground is wet, before we hand the basement back." },
      ],
    },
    gallery: {
      title: "Basement waterproofing, before and after",
      items: [
        { src: "/images/rain/basement-before.webp", alt: "Basement wall with damp patches and seepage at the floor joint", caption: "Before: seepage at the floor-wall joint" },
        { src: "/images/rain/basement-after.webp", alt: "The same basement wall dry after waterproofing from inside", caption: "After: leaks plugged and the wall lined" },
        { src: "/images/rain/basement-after.webp", alt: "Cutaway of a basement wall showing the membrane, protection layer and soil", caption: "The layers on the outside of a new basement wall" },
        { src: "/images/methods/sheet.webp", alt: "Roll of waterproofing membrane laid out on a concrete surface", caption: "Membrane sheet, laid before the soil goes back" },
      ],
    },
    warranty: {
      title: "A written guarantee with every basement",
      paras: [
        "Every basement we waterproof is checked again after the ground is wet, and you get a written guarantee with the job. How long it runs depends on the system and the side we could treat, and it is stated in your quote together with what it covers.",
        "If water comes through walls or joints we have treated within that time, we come back, find out why and put it right.",
      ],
    },
    faqs: [
      { q: "How much does basement waterproofing cost?", a: "It depends on the area, the water pressure on the walls and whether we can reach the outside face. We inspect free of charge and give you one fixed price in writing, broken down by part, before any work starts." },
      { q: "Can a leaking basement be waterproofed from the inside?", a: "Yes. The leaks are plugged and injected first, then a crystalline treatment and a cementitious lining go on the inside face. It is the usual repair for a finished building, where the outside is buried." },
      { q: "Which method is best for a basement?", a: "On a new basement, a membrane on the outside with waterstops in the joints and a crystalline admixture in the concrete. On an existing basement, injection grouting for the leaks and a crystalline lining inside. Most basements need two or three methods together." },
      { q: "When should basement waterproofing be done?", a: "During construction, before the walls are backfilled. That is the only time the outside face can be reached, and it costs far less than repairing a leak later. Talk to us before the raft is cast if you can." },
      { q: "Why does my basement leak only in the rainy season?", a: "Because the ground water rises. In the dry months the water table is below the floor; in the monsoon it climbs the walls and pushes water through every joint and crack. That is why we check the work again once the ground is wet." },
      { q: "How long does basement waterproofing last?", a: "A membrane laid outside during construction lasts as long as the building if it is not damaged. Inside repairs last well when the leaks are stopped first. The guarantee for your system is stated in the quote." },
      { q: "Can you work while the car park is in use?", a: "Yes. We work in bays and move cars in stages, so most of the parking stays open. Lift pits need the lift stopped for a short time, which we plan with the lift company." },
    ],
    related: ["water-tank-waterproofing", "crack-and-leakage-treatment", "commercial-construction"],
  },

  /* ------------------------------------------------------------------ balcony */
  {
    slug: "balcony-waterproofing",
    card: "Balcony waterproofing",
    kind: "waterproofing",
    area: "balcony",
    title: "Balcony Waterproofing & Leak Repair",
    description:
      "Balcony waterproofing services, often without removing tiles: joints, skirting, drain outlet & slope. Stop leaks below. Erode, Coimbatore, Krishnagiri & Hosur.",
    h1: "Balcony waterproofing services",
    intro: [
      "Balcony waterproofing services from RPC Constructions stop rain and washing water leaking through your balcony into the room or flat below, and in most cases the tiles can stay. We seal the tile joints, the skirting, the door threshold and the drain outlet; where the bed under the tiles is already wet, we lift them and lay a flexible waterproof coat on the slab.",
      "We treat open and covered balconies, sit-outs, utility areas and open-to-sky areas in houses and apartments across Erode, Coimbatore, Krishnagiri and Hosur. Driving rain in the October to December monsoon finds every open joint on an exposed balcony, so we look at the slope and the drain as well as the floor.",
    ],
    badges: [
      ["Free", "inspection, the method in writing"],
      ["Tiles stay", "when they are firmly bonded"],
      ["Water test", "before the balcony is handed back"],
    ],
    hero: { src: "/images/waterproofing/villa-upper-floors.jpg", alt: "Upper floors of a house with open balconies exposed to rain" },
    signs: {
      title: "Signs your balcony needs waterproofing",
      lede: "A balcony leak usually shows in the room below or on the wall beside the balcony door, not on the balcony itself.",
      items: [
        { title: "Damp or dripping ceiling below", body: "A stain or drips on the ceiling under the balcony slab, or on the soffit outside, after rain or after washing." },
        { title: "Damp wall by the balcony door", body: "Peeling paint or a damp skirting on the room side of the door, where water creeps under the threshold." },
        { title: "Water flowing towards the room", body: "Rain that pools on the balcony or runs back to the door means the slope is wrong or the outlet is blocked." },
        { title: "Cracked grout and open skirting", body: "Gaps between the floor tiles, or between the floor and the skirting, let water straight into the bed." },
        { title: "Stains and algae at the edge", body: "Dark streaks or green growth on the outer edge and the face below show water running through the slab." },
        { title: "A gap around the drain pipe", body: "A loose or cracked outlet lets water go around the pipe instead of down it, into the slab below." },
      ],
    },
    table: {
      title: "Balcony waterproofing methods we use",
      lede: "We choose by the tiles, the exposure and where the water gets in, and name the method in your quote.",
      head: ["Method", "Best for", "Tiles removed?", "Exposure"],
      rows: [
        ["Epoxy re-grouting and skirting seal", "Balconies with sound tiles and worn joints", "No", "Covered or partly covered"],
        ["Tile-compatible coating over the tiles", "Open balconies with sound, well-bonded tiles", "No", "Open to rain"],
        ["Drain outlet and threshold sealing", "Leaks around the outlet pipe and under the door step", "No, only around the outlet", "Any"],
        ["Flexible cementitious coat under new tiles", "Hollow tiles, a wet bed, or a balcony being retiled", "Yes", "Any"],
        ["Liquid membrane on the bare slab", "Open balconies and open-to-sky areas without tiles", "Not applicable", "Full sun and rain"],
      ],
      note: "Every method includes the edges: the coat or seal is turned up the skirting and wall, and finished at the outer drip edge.",
    },
    sections: [
      {
        id: "balcony-waterproofing-without-removing-tiles",
        title: "Balcony waterproofing without removing tiles",
        paras: [
          "Most balcony tiles are sound; it is the joints and edges that let water in. We rake out the old grout, fill the joints with epoxy grout, seal the gap between the floor and the skirting, and seal around the drain outlet and under the door threshold. On open balconies that take direct rain, a tile-compatible waterproof coating can go over the whole floor as well.",
          "If tapping shows hollow tiles, or the moisture meter shows the bed is soaked, sealing the top would only trap the water. Then we lift those tiles, dry the slab, lay a flexible coat and re-tile. The inspection tells us which, and the quote says so.",
        ],
      },
      {
        id: "balcony-leakage-repair",
        title: "Balcony leakage repair: water dripping on the floor below",
        paras: [
          "In apartments, a leaking balcony is often first reported by the neighbour below. The water may come through the floor joints, around the outlet, under the threshold, or from a pipe in the wall, and the stain below does not always sit under the cause. We test the floor, the outlet and the pipes separately and trace the leak before we suggest anything.",
          "If the water is coming from a washing machine point or a pipe, we fix that instead, and we write down what we found for both flats.",
        ],
      },
      {
        id: "balcony-slope-drain-and-threshold",
        title: "Balcony slope, drain outlet and door threshold",
        paras: [
          "A balcony should shed water away from the room to the outlet. Many do not, after re-tiling or settlement, and the water stands against the door. Where the slope is wrong we correct it in the screed, we fit a proper collar around the outlet pipe, and we raise or seal the threshold so rain cannot creep under the door frame.",
        ],
        img: { src: "/images/detail-01.jpg", alt: "Row of apartment balconies with slab edges, drains and railings", caption: "Apartment balconies, where slope and outlets decide where water goes" },
      },
      {
        id: "sit-out-and-utility-area-waterproofing",
        title: "Sit-out, utility and open-to-sky area waterproofing",
        paras: [
          "Sit-outs, utility areas with a washing machine, and open-to-sky areas inside the house leak in the same ways as balconies, but with more water. We treat them with the same methods, add a water test, and keep the coat running up the walls behind taps and machine points.",
        ],
      },
    ],
    products: {
      title: "The products we use on balconies",
      lede: "Flexible and cementitious coats from Fosroc and Sika, polymer for the screed, and Berger adhesive and epoxy grout for the tiles. We supply them too, so you can see each one and what it is for.",
      slugs: ["fosroc-brushbond-rfx-grey", "fosroc-nitocote-cm210-white", "sika-seal-551", "fosroc-nitobond-sbr", "berger-hs-tile-adhesive-plus", "berger-hs-epoxy-tile-grout"],
      jobs: ["bathroom"],
    },
    process: {
      title: "How our balcony waterproofing works",
      steps: [
        { title: "Inspection and leak trace", body: "An engineer checks the tiles, joints, slope, outlet and threshold, and the ceiling or wall below." },
        { title: "One method, in writing", body: "You get the method, the products and whether any tiles will be lifted, before work starts." },
        { title: "Preparation", body: "Old grout is raked out and the surface cleaned, or hollow tiles are lifted and the slab is dried." },
        { title: "Edges and outlet first", body: "Skirting joints, the drain outlet, the threshold and pipe entries are sealed before the main work." },
        { title: "The waterproofing", body: "Epoxy grout and a seal coat, or a flexible coat under new tiles, turned up the walls." },
        { title: "Water test and handover", body: "We hold water on the balcony and check below before we hand it back." },
      ],
    },
    gallery: {
      title: "Balcony waterproofing, before and after",
      items: [
        { src: "/images/rain/balcony-before.webp", alt: "Balcony floor with open joints and water stains before waterproofing", caption: "Before: open joints and water standing at the door" },
        { src: "/images/rain/balcony-after.webp", alt: "The same balcony after joint sealing and a waterproof coat", caption: "After: joints, skirting and outlet sealed" },
        { src: "/images/waterproofing/house-wet-zones.jpg", alt: "House cutaway marking balconies and other wet areas that can leak into rooms below", caption: "Balconies sit over living space, so a small leak shows fast" },
      ],
    },
    warranty: {
      title: "A written guarantee with every balcony",
      paras: [
        "Every balcony we waterproof is water-tested before handover, and you get a written guarantee with the job. How long it runs depends on the method, and it is stated in your quote together with what it covers.",
        "If water comes through a balcony we have treated within that time, we come back, find out why and put it right.",
      ],
    },
    faqs: [
      { q: "How much does balcony waterproofing cost?", a: "It depends on the size, whether the tiles can stay and how exposed the balcony is. The inspection is free, and you get one fixed price for the job in writing before we begin." },
      { q: "Can a balcony be waterproofed without removing the tiles?", a: "Yes, if the tiles are firmly bonded. We re-grout with epoxy, seal the skirting, outlet and threshold, and coat over the tiles on open balconies. Hollow tiles or a wet bed have to be lifted first, and we tell you that before we start." },
      { q: "Why is my balcony leaking into the flat below?", a: "Usually through worn tile joints, a gap around the drain outlet, or water standing against the door because the slope is wrong. Sometimes it is a pipe in the wall. We test each one to find the cause." },
      { q: "Which waterproofing is best for an open balcony?", a: "One that takes sun and rain: a tile-compatible coating over sound tiles, or a flexible coat under new tiles. A liquid membrane suits open balconies and open-to-sky areas without tiles. We recommend one after the inspection." },
      { q: "How long does it take, and when can I use the balcony?", a: "A re-grout and seal usually takes a day or two, with the balcony kept dry while the epoxy cures. A full redo with new tiles takes longer. We give you the dates in the quote." },
      { q: "Can balcony waterproofing be done in the rainy season?", a: "Joint sealing and coatings need a dry surface, so the dry months are best. An active leak can still be stopped during the rains, and the full work done when the balcony dries." },
      { q: "Is the leak always from the balcony floor?", a: "No. Damp beside a balcony can come from the wall, the door frame or a pipe. If the balcony is not the cause, we say so and point you to the right repair." },
    ],
    related: ["bathroom-waterproofing", "external-wall-waterproofing", "terrace-waterproofing"],
  },

  /* ------------------------------------------------------------------ external walls */
  {
    slug: "external-wall-waterproofing",
    card: "External wall waterproofing",
    kind: "waterproofing",
    area: "walls",
    title: "External Wall Waterproofing & Seepage",
    description:
      "External wall waterproofing to stop wall seepage & dampness from rain: crack filling, plaster repair & a flexible coat. Erode, Coimbatore, Krishnagiri & Hosur.",
    h1: "External wall waterproofing",
    intro: [
      "External wall waterproofing from RPC Constructions stops rain soaking through your outer walls and showing up inside as seepage, damp patches and peeling paint. We fill the cracks, repair hollow plaster, seal the window and sunshade joints, and finish the exterior wall with a flexible waterproof coating named in your quote.",
      "Wind-driven rain is the cause in most homes we see. Erode and Coimbatore get their main rains from October to December, with drizzle in Coimbatore from June, and Krishnagiri and Hosur get the south-west monsoon after the April and May storms. The treatment is the same; the timing is planned around your town's dry months.",
    ],
    badges: [
      ["Free", "inspection of the walls inside and out"],
      ["Cracks first", "every crack opened and filled before the coat"],
      ["Own crews", "no subcontractors on your walls"],
    ],
    hero: { src: "/images/anatomy-wp-walls.jpg", alt: "RPC worker rolling a waterproof coating onto the external wall of a house" },
    signs: {
      title: "Signs your external walls need waterproofing",
      lede: "If the damp inside gets worse after rain and fades in the dry months, the water is coming through the outer wall.",
      items: [
        { title: "Damp patches after rain", body: "Dark patches on the inside face of outer walls that appear in the rains, often under windows or at corners." },
        { title: "Peeling paint and white salts", body: "Paint that blisters or flakes, with a white powder behind it, shows water passing through the wall." },
        { title: "Hairline cracks in the plaster", body: "Fine cracks on the outer face, often in a map pattern, let rain into the plaster and the blockwork." },
        { title: "Damp around windows", body: "Wet patches at the corners of windows and below sills, where the frame meets the wall." },
        { title: "Black streaks and algae", body: "Dark staining on the outer face shows walls that stay wet for long after rain." },
        { title: "Hollow or loose plaster", body: "Plaster that sounds hollow when tapped has lost its bond and holds water behind it." },
      ],
    },
    table: {
      title: "External wall waterproofing methods",
      lede: "Most walls need a mix of these. We inspect the wall first and name each treatment and product in the quote.",
      head: ["Treatment", "Best for", "On a painted wall?", "Notes"],
      rows: [
        ["Crack filling and joint sealing", "Hairline and plaster cracks, wall-to-frame and wall-to-beam joints", "Yes, after the cracks are opened", "Always done before any coat"],
        ["Flexible elastomeric coating", "Walls that take driving rain", "Yes, over sound paint once cleaned and primed", "Stretches over fine cracks and keeps rain out"],
        ["Plaster repair with waterproofed mortar", "Hollow, cracked or crumbling plaster", "The failed area is replaced", "Bonded with polymer and waterproofed with an admixture"],
        ["Window, sill and sunshade sealing", "Damp around frames, sills and chajjas", "Yes", "Sealant joint around the frame and a drip edge below"],
        ["Water-repellent treatment", "Exposed brick, stone and textured walls", "For unpainted surfaces", "Keeps the look of the wall and lets it breathe"],
      ],
      note: "Paint alone is not waterproofing. Even a good exterior paint cracks with the wall; the coating has to stretch.",
    },
    sections: [
      {
        id: "wall-seepage-treatment",
        title: "Wall seepage treatment: stopping damp walls from rain",
        paras: [
          "Wall seepage starts outside. Rain finds a crack, an open joint around a window or a patch of hollow plaster, soaks into the blockwork and dries out on the inside face, leaving damp patches, salts and peeling paint. Repainting the inside only hides it until the next monsoon.",
          "We start by mapping the damp inside and matching it to the outer face. Then the cracks and joints are opened and filled, the failed plaster is replaced, and the whole elevation is coated. The inside is repaired and repainted only once the wall has dried.",
        ],
        bullets: [
          "Damp mapped inside with a moisture meter",
          "Cracks, joints and window frames sealed outside",
          "Hollow plaster replaced",
          "Flexible coat over the whole wall, not only the patch",
        ],
      },
      {
        id: "exterior-wall-waterproofing-coating",
        title: "Exterior wall waterproofing coating: paint or elastomeric?",
        paras: [
          "Ordinary exterior emulsion is a decorative coat; it resists a shower but cracks when the wall moves with the heat. An elastomeric waterproof coating is thicker and stretches, so it bridges hairline cracks and keeps out wind-driven rain. On walls that face the monsoon, we use the elastomeric system and can finish it in the colour you choose.",
        ],
      },
      {
        id: "external-wall-crack-filling",
        title: "External wall crack filling",
        paras: [
          "Hairline and plaster cracks are opened into a V, cleaned, and filled with a polymer-modified mortar or a flexible sealant before the coat goes on. Wide, active or structural cracks need more than filling; our crack and leakage treatment page explains how we assess and repair them.",
        ],
        img: { src: "/images/anatomy-wp-windows.jpg", alt: "RPC worker sealing the joint between a window frame and the external wall", caption: "Sealing the joint where a window frame meets the wall" },
      },
      {
        id: "parapet-and-sunshade-waterproofing",
        title: "Parapet wall and sunshade (chajja) waterproofing",
        paras: [
          "Parapet tops and sunshades take rain from above and send it into the wall below if they have no slope or drip. We slope and coat the top of the parapet and the sunshade, cut a drip groove under the edge, and seal the joint where the sunshade meets the wall.",
          "Damp low down on a wall that rises from the ground is a different problem, rising damp, which we treat on our crack and leakage treatment page.",
        ],
      },
    ],
    products: {
      title: "The products we use on external walls",
      lede: "Integral waterproofing and polymer bonding agents from Fosroc and CCI for crack and plaster repair, Renacon ready-mix plaster, and a flexible Fosroc coat for sills and sunshades. The finish coat is named in your quote.",
      slugs: ["fosroc-conplast-wl-xtra", "fosroc-nitobond-sbr", "cci-neo-bond-sbr", "fosroc-rendroc-cs-white", "renacon-renaplast-ready-mix-plaster", "fosroc-brushbond-rfx-grey"],
    },
    process: {
      title: "How our external wall waterproofing works",
      steps: [
        { title: "Inspection inside and out", body: "An engineer maps the damp inside, checks the outer face, windows and sunshades, and taps the plaster." },
        { title: "One method, in writing", body: "You get the treatments, the products, the wall area and the colour before work starts." },
        { title: "Access and cleaning", body: "Scaffolding goes up; the wall is cleaned of dirt, algae and loose paint." },
        { title: "Cracks, joints and plaster", body: "Cracks are opened and filled, hollow plaster is replaced, and window and sunshade joints are sealed." },
        { title: "Primer and waterproof coats", body: "Primer, then the coating in the coats and thickness the maker specifies, over the whole elevation." },
        { title: "Check and handover", body: "We check the inside faces once the wall has dried, then repair and repaint inside if that is part of the job." },
      ],
    },
    gallery: {
      title: "External wall waterproofing, before and after",
      items: [
        { src: "/images/rain/wall-before.webp", alt: "Outer wall of a house with damp patches, cracks and peeling paint", caption: "Before: cracks and damp patches after the rains" },
        { src: "/images/rain/wall-after.webp", alt: "The same outer wall after crack filling and an elastomeric coat", caption: "After: cracks filled and one flexible coat" },
        { src: "/stages/08-plastering.jpg", alt: "Mason plastering an outer wall with waterproofed mortar", caption: "Plaster repaired with waterproofed mortar before the coat" },
      ],
    },
    warranty: {
      title: "A written guarantee with every wall",
      paras: [
        "Every wall we waterproof comes with a written guarantee. How long it runs depends on the coating system, and it is stated in your quote together with what it covers.",
        "If rain comes through a wall we have treated within that time, we come back, find out why and put it right.",
      ],
    },
    faqs: [
      { q: "How much does external wall waterproofing cost?", a: "It depends on the wall area, its height and access, the number of cracks and the coating chosen. After a free look at your walls we send one fixed price in writing, scaffolding included, before work starts." },
      { q: "Why do my inside walls get damp in the rainy season?", a: "Because rain is getting through the outer wall: through cracks, open joints around windows, or hollow plaster. It soaks the blockwork and dries out on the inside face. Fixing the outside stops it; repainting the inside does not." },
      { q: "Is waterproof exterior paint enough?", a: "On sheltered walls with no cracks, sometimes. On walls that face the monsoon, an elastomeric coating is needed, because it stretches over fine cracks where paint splits. We tell you which your walls need after the inspection." },
      { q: "Can external wall waterproofing be done on a painted wall?", a: "Yes, if the paint is sound. We clean it, remove any loose paint, fill the cracks, prime and coat over it. Flaking or chalky paint is scraped back first so the coat can bond." },
      { q: "How long does exterior wall waterproofing last?", a: "A good elastomeric system lasts several times longer than ordinary exterior paint, depending on the product, the thickness and the exposure. Walls facing the sea or the monsoon wear faster. Your quote states the guarantee for the system chosen." },
      { q: "When is the best time to waterproof external walls?", a: "In the dry months before your monsoon: January to September in Erode, and January to March in Krishnagiri and Hosur, before the April and May storms. In Coimbatore, the drier spells between the two monsoons work best. The wall must be dry for the coat to bond." },
      { q: "Do you waterproof apartment blocks and tall walls?", a: "Yes. We work from scaffolding and plan the work elevation by elevation, so residents can stay in their flats." },
    ],
    related: ["crack-and-leakage-treatment", "terrace-waterproofing", "balcony-waterproofing"],
  },

  /* ------------------------------------------------------------------ terrace garden and podium */
  {
    slug: "garden-and-podium-waterproofing",
    card: "Garden and podium waterproofing",
    kind: "waterproofing",
    area: "podium",
    title: "Terrace Garden & Podium Waterproofing",
    description:
      "Terrace garden waterproofing for roof gardens, podiums & planters: membrane, root barrier & drainage, flood-tested. Erode, Coimbatore, Krishnagiri, Hosur.",
    h1: "Terrace garden waterproofing",
    intro: [
      "Terrace garden waterproofing from RPC Constructions lets you grow plants, lawns and planters on a roof or podium without water or roots getting into the slab. We lay a waterproofing membrane, a root barrier, a protection layer and a drainage layer, and flood-test the slab before any soil goes on.",
      "We waterproof house terrace gardens, apartment podium gardens over car parks, planter boxes, landscaped decks and pool decks across Erode, Coimbatore, Krishnagiri and Hosur. A garden keeps the slab wet all year, not only in the monsoon, so the system has to be built for constant moisture.",
    ],
    badges: [
      ["Root barrier", "under every terrace garden"],
      ["Flood test", "before the soil goes on"],
      ["Free", "inspection, the layers in writing"],
    ],
    hero: { src: "/images/waterproofing/villa-pool-deck.jpg", alt: "Landscaped pool deck and planters on a villa podium slab" },
    signs: {
      title: "Signs your terrace garden or podium is leaking",
      lede: "A garden hides the slab, so the first signs are almost always in the space below.",
      items: [
        { title: "Damp ceiling under a planter", body: "A wet patch on the ceiling right below a planter, a lawn or a raised bed, that does not dry between rains." },
        { title: "Leaks into the car park below", body: "Drips, white salts or rust stains on the podium slab soffit over a cellar car park." },
        { title: "Water standing in the soil", body: "Soggy soil and pools after watering mean the drainage under the garden is blocked or missing." },
        { title: "Roots in cracks and joints", body: "Roots growing into the parapet joint or the slab cracks, which open them wider every year." },
        { title: "Stains on planter walls", body: "Damp patches and salts on the outer face of planter boxes show water passing through the walls." },
        { title: "Blocked outlets", body: "Soil and leaves in the rainwater outlets, so water backs up over the waterproofing edge." },
      ],
    },
    table: {
      title: "Terrace garden and podium waterproofing layers",
      lede: "A garden needs more than a terrace coating. Each layer does one job, and we name every one in your quote.",
      head: ["Layer", "What it does", "Where it matters most"],
      rows: [
        ["Waterproofing membrane", "Keeps water out of the slab, turned up the parapet and planter walls", "The whole garden area and every upstand"],
        ["Root barrier", "Stops roots piercing the membrane and the joints", "Under lawns, trees and climbers"],
        ["Protection board or screed", "Shields the membrane from tools, stones and foot traffic", "Paths, play areas and anywhere people dig"],
        ["Drainage layer and filter fabric", "Lets water run to the outlets while holding the soil back", "Large gardens and podiums with deep soil"],
        ["Planter box lining", "Waterproofs the inside of raised planters and boxes", "Planters on terraces, balconies and podiums"],
      ],
      note: "Outlets get an inspection chamber, so they can be cleared without digging up the garden.",
    },
    sections: [
      {
        id: "podium-waterproofing",
        title: "Podium slab and podium garden waterproofing",
        paras: [
          "A podium is a slab with use on top, a garden, a driveway or a play area, and parking or shops below. It takes the weight of soil and traffic and stays wet, so it needs a membrane that bonds well and is protected from damage. We lay the membrane over the whole podium, seal the expansion and construction joints, and add a protection layer and drainage before the landscape goes on.",
          "On podiums already in use, we work in sections, lifting the landscape or paving in one area at a time, so the rest of the podium and the car park below stay open.",
        ],
      },
      {
        id: "root-barrier",
        title: "Root barrier membrane: why a terrace garden needs one",
        paras: [
          "Plant roots look for water, and a hairline crack in a waterproofing layer is exactly where they find it. Over a few seasons they open the crack and let water into the slab. A root barrier is a tough sheet laid over the membrane, with sealed laps, that roots cannot get through. Under trees, palms and bamboo it is essential; we never lay a terrace garden without one.",
        ],
      },
      {
        id: "planter-box-waterproofing",
        title: "Planter box and landscape area waterproofing",
        paras: [
          "Planter boxes hold wet soil against their walls all year. We line the inside with a flexible waterproof coat, add a drainage layer and weep outlet at the base, and seal where the planter meets the slab. Built-in planters on apartment balconies and terrace edges are treated the same way.",
        ],
        img: { src: "/images/waterproofing/villa-with-pool.jpg", alt: "Villa with a pool and planted terrace areas over occupied rooms", caption: "Pools, lawns and planters, each over a room or a car park" },
      },
      {
        id: "terrace-garden-leakage",
        title: "Terrace garden leakage under an existing garden",
        paras: [
          "There is no reliable way to waterproof a slab through the soil. When an existing terrace garden leaks, we trace the leak from below, then lift the garden in the affected area, repair or replace the waterproofing with a root barrier and drainage, flood-test it, and lay the soil and plants back. Pots can be moved; built-in beds are lifted in stages.",
        ],
      },
    ],
    products: {
      title: "The products we use under terrace gardens and podiums",
      lede: "HDPE and bituminous membranes from Sika, flexible coats and joint waterstops from Fosroc, and an integral admixture for the screed. The root barrier and drainage board are named in your quote.",
      slugs: ["sikaproof-312-hdpe", "sika-bit-w1", "sikashield-w159", "fosroc-brushbond-rfx-grey", "fosroc-supercast-sw20", "fosroc-conplast-wl-xtra"],
    },
    process: {
      title: "How our terrace garden and podium waterproofing works",
      steps: [
        { title: "Inspection", body: "An engineer checks the slab, joints, outlets and the space below, and how the garden will be used." },
        { title: "The layers, in writing", body: "You get each layer and product, the slopes and the outlet details before work starts." },
        { title: "Slab preparation", body: "The slab is cleaned, cracks are repaired, slopes are corrected and fillets are formed at every upstand." },
        { title: "Membrane and root barrier", body: "The membrane is laid and turned up the walls and planters; the root barrier goes over it with sealed laps." },
        { title: "Flood test", body: "We hold water on the slab and check below before anything covers the membrane." },
        { title: "Protection, drainage and handover", body: "The protection layer, drainage board and filter fabric go down, ready for the soil and planting." },
      ],
    },
    gallery: {
      title: "Terrace garden and podium waterproofing, before and after",
      items: [
        { src: "/images/rain/podium-before.webp", alt: "Podium slab with leaking joints and stains before waterproofing", caption: "Before: leaking joints under the garden" },
        { src: "/images/rain/podium-after.webp", alt: "The same podium slab after membrane, root barrier and drainage layers", caption: "After: membrane, root barrier and drainage in place" },
        { src: "/images/waterproofing/waterproofing-real-terrace.jpg", alt: "Cutaway of a roof slab showing the layers under a terrace garden", caption: "The layers between the slab and the soil" },
      ],
    },
    warranty: {
      title: "A written guarantee with every terrace garden and podium",
      paras: [
        "Every terrace garden and podium we waterproof is flood-tested before it is covered, and you get a written guarantee with the job. How long it runs depends on the system, and it is stated in your quote together with what it covers.",
        "If water comes through a slab we have treated within that time, we come back, find out why and put it right.",
      ],
    },
    faqs: [
      { q: "Is normal terrace waterproofing enough for a terrace garden?", a: "No. A terrace coating is built to shed rain and dry out; a garden keeps the slab wet all the time and sends roots looking for cracks. A terrace garden needs a membrane, a root barrier, protection and drainage." },
      { q: "What is a root barrier, and why does a terrace garden need one?", a: "It is a tough sheet laid over the waterproofing that roots cannot pierce. Without it, roots grow into small cracks in the membrane and open them over time, and the slab starts to leak." },
      { q: "What does terrace garden or podium waterproofing cost?", a: "It depends on the area, the layers needed and whether an existing garden has to be lifted. We inspect free of charge and quote one fixed price in writing, layer by layer, before any work starts." },
      { q: "Can waterproofing be done under an existing garden without removing it?", a: "Not reliably. Injecting or coating through the soil does not seal the slab. We lift the garden in the leaking area, redo the waterproofing and lay it back, in stages if needed." },
      { q: "How is drainage handled under a podium garden?", a: "A drainage board under the soil carries water to the outlets, and a filter fabric keeps the soil out of it. Outlets get inspection chambers, so they can be cleared without digging." },
      { q: "Can I add a garden to my existing terrace?", a: "Often, yes, but wet soil is heavy. A structural engineer should check that the slab can carry it before we plan the layers. Light planters and pots need less; deep beds and trees need more." },
      { q: "Do you waterproof pool decks and landscaped podiums too?", a: "Yes. Pool surrounds, decks and paved podiums use the same membrane and protection layers, with joints and drains detailed for the finish on top." },
    ],
    related: ["terrace-waterproofing", "basement-waterproofing", "balcony-waterproofing"],
  },

  /* ------------------------------------------------------------------ cracks and leaks */
  {
    slug: "crack-and-leakage-treatment",
    card: "Crack and leakage treatment",
    kind: "waterproofing",
    area: "cracks",
    title: "Crack Repair & Leak Injection Grouting",
    description:
      "Wall crack repair & leakage treatment: we trace the leak, then seal it by PU or epoxy injection. Ceiling leaks, rising damp. Erode, Coimbatore, Krishnagiri.",
    h1: "Wall crack repair and leakage treatment",
    intro: [
      "Wall crack repair and leakage treatment from RPC Constructions starts with finding the leak. An engineer traces where the water comes from and what the crack means, and then our own crew seals it, by injection grouting, crack filling or structural repair, depending on the cause.",
      "This is the service to call when you can see the damage but not the source: a ceiling that drips, a wall that stays damp, a crack that keeps coming back. We work across Erode, Coimbatore, Krishnagiri and Hosur, and if the cause turns out to be the terrace, a bathroom or an outer wall, we say so and treat that.",
    ],
    badges: [
      ["Free", "leak trace and crack check by an engineer"],
      ["Source first", "we find the cause before we quote"],
      ["Own crews", "no subcontractors on your site"],
    ],
    hero: { src: "/images/rain/leak-before.webp", alt: "Ceiling with a spreading leak stain and dripping water before treatment" },
    signs: {
      title: "Signs you need crack or leak treatment",
      lede: "Some cracks are only in the plaster; others let water in or point to movement. Have these checked.",
      items: [
        { title: "A ceiling that drips or stays damp", body: "Water on the ceiling with no obvious source above, or a stain that grows after rain or after the tank fills." },
        { title: "Cracks that grow or come back", body: "Cracks that widen, or reopen after they have been filled and painted, show the wall or slab is still moving." },
        { title: "Diagonal cracks at doors and windows", body: "Cracks running at an angle from the corners of openings can point to settlement and need an engineer's look." },
        { title: "Damp at the bottom of walls", body: "A damp band up to knee height with a salt line above it, inside and out: rising damp from the ground." },
        { title: "Rust stains and falling concrete", body: "Brown streaks or pieces of concrete dropping from beams, columns or slabs mean the steel inside is corroding." },
        { title: "Water through joints", body: "Seepage along the joint between two pours of concrete, or between a wall and a beam." },
      ],
    },
    table: {
      title: "Crack and leak repair methods",
      lede: "Whether the crack is wet or dry, and still moving or not, decides the method.",
      head: ["Method", "Best for", "Works on an active leak?", "Notes"],
      rows: [
        ["PU injection grouting", "Leaking cracks and joints in slabs, walls and basements", "Yes", "The resin reacts with water and expands to fill the crack"],
        ["Epoxy injection", "Dry structural cracks that need their strength back", "No, the crack must be dry", "Bonds the two faces of the concrete back together"],
        ["Cementitious injection grouting", "Honeycombs and voids inside concrete", "After the flow is stopped", "Fills hollow concrete from inside"],
        ["Rapid plug", "Running leaks at spots, holes and pipe entries", "Yes", "Sets in minutes against flowing water"],
        ["Crack filling", "Plaster and hairline cracks", "No", "V-cut, filled with polymer mortar or sealant, then coated"],
        ["Structural concrete repair", "Spalled concrete with rusting steel", "No", "Steel cleaned and primed, then rebuilt with repair mortar"],
      ],
      note: "Filling a crack that is still moving only moves the crack. Where there are signs of settlement, an engineer checks the structure first.",
    },
    sections: [
      {
        id: "water-leakage-detection",
        title: "Water leakage detection: finding the source first",
        paras: [
          "A stain is rarely under the point where water enters. Water travels along slabs, steel and pipes before it shows. So we start with the pattern: when the damp appears, after rain, after a bath, when the tank fills, or all the time. Then we read the damp with a moisture meter, flood-test bathrooms and terraces one at a time, and pressure-test the pipes, without breaking tiles.",
          "You get a written note of what we found. If the source is a terrace, a bathroom, a tank or an outer wall, we treat that; if it is a crack, a joint or the structure, the repair is done here.",
        ],
        bullets: [
          "Moisture-meter readings of walls and ceilings",
          "Flood tests of terraces and wet areas, one at a time",
          "Pressure tests of supply lines",
          "A written note of the cause before any quote",
        ],
      },
      {
        id: "injection-grouting",
        title: "Injection grouting: PU and epoxy",
        paras: [
          "Injection grouting seals a crack from inside instead of patching the surface. We drill small holes along the crack, fix injection ports, and pump in the grout under pressure until it comes out at the next port. PU grout reacts with water and foams to fill the crack, so it stops leaks even while water is flowing. Epoxy grout sets hard and bonds the concrete back together, so it is used on dry cracks that need their strength restored.",
          "Once the grout has set, the ports come out and the holes are filled, ready for paint or a waterproof coat.",
        ],
        img: { src: "/artwp/grout.webp", alt: "Crack in concrete filled with injected grout along its length", caption: "A crack filled from inside with injected grout" },
      },
      {
        id: "ceiling-leakage-repair",
        title: "Ceiling leakage repair",
        paras: [
          "Ceiling leakage is the problem we are called for most. Once we know where the water comes from, the repair is two parts: stop the water at the source, and treat the slab itself. Leaking cracks and joints are injected from below; where the steel has rusted, the concrete is cut back, the bars cleaned and primed, and the section rebuilt with repair mortar.",
        ],
      },
      {
        id: "rising-damp-treatment",
        title: "Rising damp treatment",
        paras: [
          "Rising damp is ground water drawn up into the wall, common in older houses with no damp-proof course. It shows as a damp band at the bottom of the wall with a salt line above it. We remove the salt-loaded plaster, inject a chemical damp-proof barrier just above floor level, and re-plaster with a waterproofed, breathable mortar. Damp higher up that comes with rain is treated with external wall waterproofing.",
        ],
      },
    ],
    products: {
      title: "The products we use for crack and leak repair",
      lede: "A rapid plugging mortar, an epoxy bonding agent, structural repair mortars, and a rust cleaner and primer for exposed steel, from Fosroc and Sika. We supply them too, so you can see each one and what it is for.",
      slugs: ["fosroc-rendroc-plug", "fosroc-nitobond-ep", "fosroc-rendroc-sp40", "fosroc-nitozinc-primer", "sika-emaco-s348", "fosroc-reebaklens-rr"],
      jobs: ["repair", "grouting"],
    },
    process: {
      title: "How our crack and leakage treatment works",
      steps: [
        { title: "Leak trace and crack check", body: "An engineer finds the source of the water and judges each crack: plaster, leaking or structural." },
        { title: "One method, in writing", body: "You get the cause, the repair, the products and the extent before work starts." },
        { title: "Stop the water", body: "Running leaks are plugged and the source, a pipe, a drain or an outlet, is dealt with first." },
        { title: "Inject and repair", body: "Cracks and joints are injected; spalled concrete is cut back, the steel treated and the section rebuilt." },
        { title: "Finish", body: "Ports are removed, holes and cracks are filled, and the surface is plastered and made ready for paint." },
        { title: "Check and handover", body: "We check the repair after rain or a water test, and the room below once it has dried." },
      ],
    },
    gallery: {
      title: "Crack and leak repair, before and after",
      items: [
        { src: "/images/rain/leak-after.webp", alt: "The same ceiling dry and repainted after the leak was injected and sealed", caption: "After: the leak traced, injected and the ceiling made good" },
        { src: "/artwp/crack.webp", alt: "Open crack running across a plastered wall", caption: "A crack opened up for assessment" },
        { src: "/images/methods/joint.webp", alt: "Leaking joint between two concrete sections ready for injection", caption: "A leaking construction joint, a common injection job" },
      ],
    },
    warranty: {
      title: "A written guarantee with every repair",
      paras: [
        "Every crack and leak repair comes with a written guarantee. How long it runs depends on the method and the cause, and it is stated in your quote together with what it covers.",
        "If water comes through a crack or joint we have treated within that time, we come back, find out why and put it right.",
      ],
    },
    faqs: [
      { q: "How much does crack repair or injection grouting cost?", a: "It depends on the length and number of cracks, the method and the access. We trace the leak free of charge and give you one fixed price in writing for the whole repair before we start." },
      { q: "Are wall cracks dangerous?", a: "Most hairline cracks are in the plaster and are not structural. Cracks that are wide, growing, diagonal from door and window corners, or through beams and columns need an engineer to look at them. We tell you which kind you have." },
      { q: "How do you find a leak without breaking tiles?", a: "We read the damp with a moisture meter, flood-test the terrace and each wet area separately, and pressure-test the supply pipes. That narrows the source down without opening the floor." },
      { q: "PU or epoxy grouting: which is right for my crack?", a: "PU grout for cracks that leak, because it reacts with water and expands to seal them. Epoxy for dry cracks in concrete that need their strength back. Some jobs use both, PU to stop the water and epoxy once the crack is dry." },
      { q: "Can a crack be repaired while water is still leaking?", a: "Yes. Running leaks are stopped with a rapid plug or PU injection, which both work against flowing water. The rest of the repair follows once the leak is stopped." },
      { q: "How long does injection grouting last?", a: "A properly injected crack stays sealed for many years, as long as the cause, such as movement or a leaking pipe, has been dealt with. The guarantee for your repair is stated in the quote." },
      { q: "Where is my leak coming from?", a: "Top-floor ceiling leaks usually come from the terrace; ceilings under bathrooms from the bathroom; damp outer walls from rain through the wall. If you are not sure, start here: we trace it and point you to the right repair, terrace, bathroom or external wall waterproofing." },
      { q: "Will repainting fix a damp or cracked wall?", a: "No. Paint covers the mark but not the cause, so the damp and the crack come back. Fill or inject the crack and stop the water first." },
    ],
    related: ["terrace-waterproofing", "external-wall-waterproofing", "bathroom-waterproofing"],
  },
];
