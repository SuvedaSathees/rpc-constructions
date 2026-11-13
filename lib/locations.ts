/**
 * The towns we work from, one landing page each at /waterproofing-in/{slug}
 * (lib/pages/locations.ts), all listed on /branches.
 *
 * Every town's text is its own: why buildings leak there, the leaks we are
 * called for most, the services in the order people there ask for them, its
 * areas and its questions. A page is never the same text with the name
 * swapped, because that is what search engines treat as a doorway page.
 *
 * Branch addresses and numbers live in lib/content.ts (`branches`). A town
 * without its own address says its visits are booked through Erode.
 *
 * Climate figures are ranges, because sources use different periods and
 * stations; each entry names its sources.
 *
 * CONFIRM WITH RPC before launch: the localities and nearby towns each team
 * really covers.
 */

export interface Town {
  slug: string;
  city: string;
  district: string;
  role: "Head office" | "Branch";
  /** the place as the h1 and title name it, when it is more than the town ("Krishnagiri and Hosur") */
  place?: string;
  /** the hub card's line */
  summary: string;
  /** the opening paragraph under the h1 */
  intro: string;
  /** the meta description (about 150 characters) */
  description: string;
  climate: { rainfall: string; season: string; ground: string };
  /** two paragraphs on why buildings leak here */
  why: readonly string[];
  /** the four leaks we are called for most, each tied to a service area key */
  problems: readonly { title: string; body: string; service: string }[];
  /** the four waterproofing services asked for most here, by area key (lib/methods/doc.ts) */
  focus: readonly string[];
  /** a local line for a service, by area key, used instead of the general one */
  serviceNotes: Readonly<Record<string, string>>;
  /** product systems to show, by key (lib/products SYSTEMS) */
  systems: readonly string[];
  localities: readonly string[];
  nearby: readonly string[];
  areasNote: string;
  /** blog posts to point to, by slug */
  guides: readonly string[];
  faqs: readonly { q: string; a: string }[];
}

export const towns: readonly Town[] = [
  {
    slug: "erode",
    city: "Erode",
    district: "Erode",
    role: "Head office",
    summary: "Our head office and the team that inspects, quotes and runs every RPC job: houses, godowns, textile units and new buildings.",
    intro:
      "RPC Constructions is an Erode waterproofing contractor and construction chemicals supplier, with our office in Kurikaran Palayam. We fix terrace, bathroom, sump and godown leaks across the city, and build new homes and factories with the waterproofing designed in.",
    description: "Waterproofing contractors in Erode for terraces, bathrooms, sumps and godown roofs. Products from Fosroc, Sika and more. Free site inspection.",
    climate: {
      // TNAU district plan about 772 mm; Anna University CCCDM district profile 895.8 mm (1951-2020)
      rainfall: "About 770 to 900 mm a year",
      season: "Most rain falls in the northeast monsoon, October to December, often in heavy bursts.",
      ground: "Hot, dry summers and hard borewell water; flat RCC roofs on houses, and wide godown and shed roofs for turmeric and textiles.",
    },
    why: [
      "Erode's rain comes in short, heavy spells after months of dry heat. A terrace that has baked all summer opens hairline cracks, and the first October storm finds them. Water then travels along the slab and shows up as a ceiling stain far from where it got in.",
      "The city also stores a great deal: turmeric, yarn, cloth and finished garments sit under wide sheet and concrete roofs. A single leak over a godown can spoil stock, so roof outlets, sheet laps and parapet joints matter as much here as the slab itself. Below ground, Erode's hard borewell water leaves white salt marks on sump and tank walls and works into any crack in the plaster.",
    ],
    problems: [
      { title: "Terrace leaks after the first rains", body: "Sun-cracked roof slabs and failed old coatings that let water in at the first heavy October rain.", service: "terrace" },
      { title: "Godown and shed roof leaks", body: "Leaks at sheet laps, gutters and parapet joints over stored turmeric, yarn and cloth.", service: "cracks" },
      { title: "Bathroom seepage into rooms below", body: "Damp ceilings and peeling paint under bathrooms, usually from the floor's edge and pipe openings.", service: "bathroom" },
      { title: "Sumps and overhead tanks losing water", body: "Leaking sumps and tanks that waste water and can let dirty ground water in.", service: "tank" },
    ],
    focus: ["terrace", "bathroom", "tank", "cracks"],
    serviceNotes: {
      terrace: "A flexible coat or membrane that moves with Erode's summer heat, with the parapet and outlets sealed first.",
      cracks: "Roof sheet laps, gutters and cracked slabs over godowns and sheds, sealed before the northeast monsoon.",
    },
    systems: ["terrace", "bathroom", "tank", "basement"],
    localities: ["Kurikaran Palayam", "Perundurai Road", "Brough Road", "Surampatti", "Thindal", "Veerappanchatram", "Periyar Nagar", "Moolapalayam"],
    nearby: ["Perundurai", "SIPCOT Perundurai", "Bhavani", "Chithode", "Gobichettipalayam", "Chennimalai", "Sathyamangalam"],
    areasNote: "Our head office is in Erode, so most visits here can be booked for the same week.",
    guides: ["terrace-waterproofing-systems-erode", "waterproofing-before-the-monsoon", "bathroom-leakage-repair"],
    faqs: [
      { q: "Do you waterproof godown and shed roofs in Erode?", a: "Yes. We seal sheet laps, gutters, parapet joints and concrete roofs over godowns, and plan the work to finish before the northeast monsoon." },
      { q: "When is the best time to waterproof a terrace in Erode?", a: "Before October. A coat needs a few dry days to cure, and Erode's heaviest rain usually comes between October and December." },
      { q: "How much does waterproofing cost in Erode?", a: "It depends on the area, the surface and the method. The site inspection is free, and you get one method and one price in writing before any work starts." },
      { q: "Where is your office in Erode?", a: "No. 26, Bharathi Palayam, 2nd Street, Kurikaran Palayam, Erode 638002. You can visit Monday to Saturday, 8:30 am to 6:30 pm." },
      { q: "Do you also sell waterproofing chemicals in Erode?", a: "Yes. We supply products from Fosroc, Sika and the other brands on our list. Ask on WhatsApp for today's rate and pack sizes." },
    ],
  },
  {
    slug: "coimbatore",
    city: "Coimbatore",
    district: "Coimbatore",
    role: "Branch",
    summary: "Houses, apartments and office buildings across Coimbatore, with basements and terraces detailed for both monsoons.",
    intro:
      "RPC Constructions works across Coimbatore as a waterproofing contractor and construction chemicals supplier. We seal terraces, bathrooms, basements and external walls in homes, apartments and offices, backed by our Erode head office.",
    description: "Waterproofing contractors in Coimbatore for terraces, basements, bathrooms and walls. Fosroc and Sika products supplied. Free site inspection.",
    climate: {
      // TNAU district plan about 604 mm (plains); Madras Agricultural Journal 1916-2015 study about 675 mm; NE about 307 mm, SW about 153 mm
      rainfall: "About 600 to 700 mm a year in the city",
      season: "The main rains come from October to December; from June to September the southwest monsoon brings drizzle and damp air through the Palghat Gap.",
      ground: "Expansive black soil in parts of the city, a growing number of apartments with basement parking, and engineering and textile units.",
    },
    why: [
      "Coimbatore gets rain from both monsoons, so walls and terraces are wet for long stretches rather than in one season. Damp that never fully dries out leads to peeling paint, fungus on external walls and slow seepage through plaster.",
      "Parts of the city sit on black soil that swells when wet and shrinks when dry. That movement opens cracks in plinths, basement walls and floors, and new apartment basements below the ground take water from the soil around them.",
    ],
    problems: [
      { title: "Damp and seepage in basements", body: "Water through basement walls and floors of apartments and offices, worst after long rains.", service: "basement" },
      { title: "Damp external walls", body: "Rain driven into plaster through months of wet weather, leaving damp patches and fungus inside.", service: "walls" },
      { title: "Terrace leaks in older houses", body: "Old lime or brick-bat terraces that have cracked and hold water after rain.", service: "terrace" },
      { title: "Cracks from soil movement", body: "Plinth, floor and wall cracks where black soil swells and shrinks, letting water in.", service: "cracks" },
    ],
    focus: ["basement", "walls", "terrace", "bathroom"],
    serviceNotes: {
      basement: "Crystalline treatment, membranes and joint sealing for apartment and office basements below the soil.",
      walls: "A breathable waterproof coat for walls that stay wet through both of Coimbatore's monsoons.",
      terrace: "For older lime and brick-bat terraces in the city: cracks opened and filled, then a coat that bridges them.",
      bathroom: "Floors and wall corners sealed under the tiles in Coimbatore apartments, so the flat below stays dry.",
      tank: "Sumps and overhead tanks sealed inside against hard borewell water, which marks and weakens their walls.",
      cracks: "Plinth and floor cracks where black soil swells in the rains and shrinks in the dry months, sealed so they stay closed.",
      balcony: "Balcony slabs in high-rise flats, sealed at the edge and the door so rain does not run into the room below.",
    },
    systems: ["basement", "terrace", "bathroom", "tank"],
    localities: ["RS Puram", "Gandhipuram", "Saibaba Colony", "Peelamedu", "Saravanampatti", "Singanallur", "Vadavalli", "Ganapathy", "Thudiyalur"],
    nearby: ["Tiruppur", "Pollachi", "Mettupalayam", "Sulur", "Annur", "Karamadai"],
    areasNote: "Visits in and around Coimbatore are planned by our team with the Erode head office.",
    guides: ["basement-waterproofing-coimbatore", "waterproofing-before-the-monsoon", "questions-to-ask-a-waterproofing-contractor"],
    faqs: [
      { q: "Do you waterproof apartment basements in Coimbatore?", a: "Yes. We treat basement walls, floors and construction joints in apartments and offices, using crystalline treatment or a membrane depending on the site." },
      { q: "Why does my external wall stay damp in Coimbatore?", a: "With rain from both monsoons, walls can stay wet for months. A crack or weak plaster lets water in; we find the entry point and apply a coat that lets the wall breathe." },
      { q: "How much does waterproofing cost in Coimbatore?", a: "It depends on the area, the surface and the method. The inspection is free, and the method and price come in writing before work starts." },
      { q: "How do I book a site inspection in Coimbatore?", a: "Call us or send a photo on WhatsApp. Our team arranges the visit with the Erode head office and tells you the date." },
    ],
  },
  {
    slug: "krishnagiri",
    city: "Krishnagiri",
    district: "Krishnagiri",
    role: "Branch",
    place: "Krishnagiri and Hosur",
    summary: "Factories, warehouses and processing units around Krishnagiri and Hosur, with roofs, gutters and floors detailed for the monsoon.",
    intro:
      "RPC Constructions works in Krishnagiri and Hosur on factory, warehouse and house waterproofing, and supplies construction chemicals for new building work. Our branch covers the town and the industrial belt toward Hosur, backed by our Erode head office.",
    description: "Waterproofing contractors in Krishnagiri and Hosur for factory roofs, warehouses, houses and sumps. Construction chemicals supplied. Free inspection.",
    climate: {
      // ICAR-CRIDA/TNAU district plan about 847 mm; Anna University 850.6 mm; CGWB 750-900 mm across the district, lowest near Hosur
      rainfall: "About 750 to 900 mm a year",
      season: "Unlike most of Tamil Nadu, the main rains come with the southwest monsoon, June to September, after strong April and May storms; the northeast monsoon follows in October and November.",
      ground: "Hard granite and gneiss rock close to the surface, with factory sheds, warehouses and mango-pulp units along the highway and in SIPCOT Hosur.",
    },
    why: [
      "Krishnagiri's rain arrives as strong storms in both monsoons. Large factory and warehouse roofs collect a lot of water quickly, so blocked gutters, open sheet laps and badly sloped roofs leak first, often over machines or stored goods.",
      "Hard rock lies only a few metres down in much of the district, so rain runs off fast instead of soaking away. Water gathers against plinths and below-ground walls, and sumps cut into rock take water through its cracks and leak at their joints.",
    ],
    problems: [
      { title: "Factory and warehouse roof leaks", body: "Leaks at sheet laps, gutters and roof joints over machines, goods and production floors.", service: "cracks" },
      { title: "Leaking sumps and tanks", body: "Sumps and tanks in hard ground leaking at their joints and pipe openings.", service: "tank" },
      { title: "Terrace leaks in houses", body: "Flat RCC terraces that crack in the summer heat and leak in the first storm.", service: "terrace" },
      { title: "Water at plinths and floors", body: "Rainwater that runs off rocky ground and seeps in at the plinth and ground floor.", service: "walls" },
    ],
    focus: ["cracks", "tank", "terrace", "walls"],
    serviceNotes: {
      cracks: "Roof sheet laps, gutters and joints on factory and warehouse roofs, sealed with the right product for each.",
      tank: "Sumps and tanks cut into rocky ground, sealed inside with a product safe for drinking water.",
    },
    systems: ["terrace", "tank", "repair", "grouting"],
    localities: ["Krishnagiri town", "Rayakottai Road", "Bengaluru Road", "Hosur", "Mathigiri", "SIPCOT Hosur"],
    nearby: ["Shoolagiri", "Bagalur", "Bargur", "Kaveripattinam", "Rayakottai", "Denkanikottai", "Pochampalli"],
    areasNote: "Our Krishnagiri team covers the town and the industrial belt toward Hosur, with jobs planned through the Erode head office.",
    guides: ["sump-and-water-tank-waterproofing", "waterproofing-before-the-monsoon", "questions-to-ask-a-waterproofing-contractor"],
    faqs: [
      { q: "Do you waterproof factory and warehouse roofs in Krishnagiri?", a: "Yes. We seal sheet laps, gutters, joints and concrete roofs on factories and warehouses, planned around your production so work can carry on." },
      { q: "When is the best time to waterproof in Krishnagiri?", a: "Between January and March. Storms start in April and the main rains come with the southwest monsoon from June, earlier than in most of Tamil Nadu." },
      { q: "Do you also supply chemicals for new building work in Krishnagiri?", a: "Yes. We supply admixtures, grouts, repair mortars and waterproofing products for new work. Ask on WhatsApp for today's rate and pack sizes." },
      { q: "How much does waterproofing cost in Krishnagiri?", a: "It depends on the area, the surface and the method. The inspection is free, and you get the method and the price in writing first." },
      { q: "Do you work in Hosur and SIPCOT?", a: "Yes. Our Krishnagiri team covers Hosur and its SIPCOT industrial areas, including factory roofs, sheds and warehouses." },
      { q: "How do I book a site inspection in Krishnagiri or Hosur?", a: "Call us or send photos on WhatsApp. Our team plans the visit with the Erode head office and confirms the date." },
    ],
  },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);
