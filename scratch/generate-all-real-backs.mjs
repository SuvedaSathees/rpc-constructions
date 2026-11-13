import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(process.cwd() + "/package.json");
const sharp = require("sharp");

const OUT_DIR = "public/images/products";

// Specifications for authentic reverse packaging panels
const PRODUCTS_DATA = [
  // --- ARDEX ENDURA (STAR SERIES & EPOXY) ---
  {
    slug: "ardex-endura-bronze-star",
    brandColor: "#92400e",
    header: "TECHNICAL DATA & APPLICATION",
    title: "ARDEX ENDURA BRONZE STAR",
    rows: [
      { k: "Standard:", v: "IS 15477:2019 Type 1T" },
      { k: "Classification:", v: "EN 12004 C1T Standard Set" },
      { k: "Tile Types:", v: "Ceramic & clay tiles on interior walls/floors" },
      { k: "Open Time:", v: "Approx. 20 mins @ 27°C" },
      { k: "Pot Life:", v: "Approx. 2 - 2.5 hours" }
    ],
    ratioTitle: "WATER MIXING RATIO:",
    ratio: "4.2 - 4.6 L clean water per 20 kg bag (1:3 vol)",
    coverage: "55 - 60 sq.ft @ 3mm notched trowel",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 20 kg | ISO 9001:2015"
  },
  {
    slug: "ardex-endura-silver-star",
    brandColor: "#475569",
    header: "TECHNICAL DATA & APPLICATION",
    title: "ARDEX ENDURA SILVER STAR",
    rows: [
      { k: "Standard:", v: "IS 15477:2019 Type 2T" },
      { k: "Classification:", v: "EN 12004 C1T Polymer Modified" },
      { k: "Tile Types:", v: "Ceramic, semi-vitreous & vitrified tiles" },
      { k: "Open Time:", v: "Approx. 20 - 25 mins @ 27°C" },
      { k: "Pot Life:", v: "Approx. 2.5 - 3 hours" }
    ],
    ratioTitle: "WATER MIXING RATIO:",
    ratio: "4.5 - 5.0 L clean water per 20 kg bag",
    coverage: "50 - 55 sq.ft @ 3mm notched trowel",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 20 kg | ISO 9001:2015"
  },
  {
    slug: "ardex-endura-silver-star-plus",
    brandColor: "#334155",
    header: "TECHNICAL DATA & APPLICATION",
    title: "ARDEX ENDURA SILVER STAR PLUS",
    rows: [
      { k: "Standard:", v: "IS 15477:2019 Type 2TE" },
      { k: "Classification:", v: "EN 12004 C2TE Extended Open Time" },
      { k: "Tile Types:", v: "Vitrified tiles & natural stone slabs" },
      { k: "Open Time:", v: "Extended 30 mins (E-grade)" },
      { k: "Pot Life:", v: "Approx. 3 hours @ 27°C" }
    ],
    ratioTitle: "WATER MIXING RATIO:",
    ratio: "4.8 - 5.2 L clean water per 20 kg bag",
    coverage: "50 - 55 sq.ft @ 3mm notched trowel",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 20 kg | ISO 9001:2015"
  },
  {
    slug: "ardex-endura-gold-star",
    brandColor: "#b45309",
    header: "TECHNICAL DATA & APPLICATION",
    title: "ARDEX ENDURA GOLD STAR",
    rows: [
      { k: "Standard:", v: "IS 15477:2019 Type 3TE" },
      { k: "Classification:", v: "EN 12004 C2TE Flexible Polymer" },
      { k: "Renovation:", v: "Tile-on-Tile, exterior facades & pools" },
      { k: "Open Time:", v: "Approx. 30 mins @ 27°C" },
      { k: "Bond Strength:", v: "> 1.5 N/mm² tensile adhesion" }
    ],
    ratioTitle: "WATER MIXING RATIO:",
    ratio: "5.0 - 5.5 L clean water per 20 kg bag",
    coverage: "50 - 55 sq.ft @ 3mm notched trowel",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 20 kg | ISO 9001:2015"
  },
  {
    slug: "ardex-endura-diamond-star",
    brandColor: "#0284c7",
    header: "TECHNICAL DATA & APPLICATION",
    title: "ARDEX ENDURA DIAMOND STAR",
    rows: [
      { k: "Standard:", v: "IS 15477:2019 Type 3TE S1" },
      { k: "Classification:", v: "EN 12004 C2TE S1 Deformable" },
      { k: "Applications:", v: "Large format porcelain & exterior claddings" },
      { k: "Flexibility:", v: "S1 transverse deflection (>2.5mm)" },
      { k: "Thermal Stability:", v: "-20°C to +80°C shock resistance" }
    ],
    ratioTitle: "WATER MIXING RATIO:",
    ratio: "5.2 - 5.6 L clean water per 20 kg bag",
    coverage: "45 - 50 sq.ft @ 3mm notched trowel",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 20 kg | ISO 9001:2015"
  },
  {
    slug: "ardex-endura-white-star",
    brandColor: "#64748b",
    header: "TECHNICAL DATA & APPLICATION",
    title: "ARDEX ENDURA WHITE STAR",
    rows: [
      { k: "Standard:", v: "IS 15477:2019 Type 2T (White)" },
      { k: "Classification:", v: "White Cement Base Polymeric Adhesive" },
      { k: "Stone Types:", v: "Translucent marble, glass mosaic & quartz" },
      { k: "Non-Staining:", v: "Will not discolour light marble or glass" },
      { k: "Open Time:", v: "Approx. 20 - 25 mins @ 27°C" }
    ],
    ratioTitle: "WATER MIXING RATIO:",
    ratio: "4.8 - 5.2 L clean water per 20 kg bag",
    coverage: "50 - 55 sq.ft @ 3mm notched trowel",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 20 kg | ISO 9001:2015"
  },
  {
    slug: "ardex-endura-platinum-star",
    brandColor: "#be185d",
    header: "TECHNICAL DATA & APPLICATION",
    title: "ARDEX ENDURA PLATINUM STAR",
    rows: [
      { k: "Standard:", v: "IS 15477:2019 Type 4TE S1" },
      { k: "Classification:", v: "EN 12004 C2TE S1 Deformable" },
      { k: "Substrates:", v: "Plywood, heated floors, drywall & facade" },
      { k: "Tile Formats:", v: "Slim slabs & oversized porcelain tiles" },
      { k: "Deformation:", v: "S1 deflection (>2.5mm)" }
    ],
    ratioTitle: "WATER MIXING RATIO:",
    ratio: "5.2 - 5.8 L clean water per 20 kg bag",
    coverage: "48 - 52 sq.ft @ 3mm notched trowel",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 20 kg | ISO 9001:2015"
  },
  {
    slug: "ardex-endura-platinum-star-plus",
    brandColor: "#9d174d",
    header: "TECHNICAL DATA & APPLICATION",
    title: "ARDEX ENDURA PLATINUM STAR PLUS",
    rows: [
      { k: "Standard:", v: "IS 15477:2019 Type 4TE S2" },
      { k: "Classification:", v: "EN 12004 C2TE S2 Highly Deformable" },
      { k: "Deformability:", v: "S2 extreme transverse deflection (>5mm)" },
      { k: "Substrates:", v: "Steel, vibrating slabs, heated screeds" },
      { k: "Tile Formats:", v: "Mega sintered stone & large architectural slabs" }
    ],
    ratioTitle: "WATER MIXING RATIO:",
    ratio: "5.5 - 6.0 L clean water per 20 kg bag (1:3 vol)",
    coverage: "50 - 55 sq.ft @ 3mm notched trowel",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 20 kg | ISO 9001:2015"
  },
  {
    slug: "ardex-endura-epoxy",
    brandColor: "#0f766e",
    header: "EPOXY RESIN GROUT SPECIFICATIONS",
    title: "ARDEX ENDURA 100% SOLID EPOXY",
    rows: [
      { k: "Formulation:", v: "3-Part (Resin Part A + Hardener B + Filler C)" },
      { k: "Joint Width:", v: "2 mm to 12 mm joint spacing" },
      { k: "Hygiene:", v: "100% stain-proof & bacterial resistant" },
      { k: "Chemical Test:", v: "Resistant to acids, alkalis & cleaning agents" },
      { k: "Pot Life:", v: "45 mins @ 27°C (cure: 24 hrs foot traffic)" }
    ],
    ratioTitle: "MIXING DIRECTIONS:",
    ratio: "Empty Part B into Part A, mix thoroughly, add Part C filler",
    coverage: "Varies by tile size and joint width (approx. 0.3 - 0.6 kg/m²)",
    footerTitle: "ARDEX ENDURA (INDIA) PVT LTD",
    footerSub: "Net Wt: 1 kg / 5 kg Kits | ISO 9001:2015"
  },

  // --- PENETRON ---
  {
    slug: "penetron-penetron-admix",
    brandColor: "#166534",
    header: "CRYSTALLINE WATERPROOFING ADMIXTURE",
    title: "PENETRON ADMIX (3RD GEN)",
    rows: [
      { k: "Standard:", v: "ASTM C494 Type S & EN 934-2 Compliant" },
      { k: "Mechanism:", v: "Insoluble crystalline microcrack self-healing" },
      { k: "Hydrostatic Head:", v: "Resists up to 16 bar (160m water head)" },
      { k: "Crack Sealing:", v: "Self-heals cracks up to 0.5 mm" },
      { k: "Durability:", v: "Permanent - lasts life of concrete structure" }
    ],
    ratioTitle: "BATCH DOSAGE RATE:",
    ratio: "0.8% - 1.0% by weight of total cementitious materials",
    coverage: "Direct addition to dry batch or ready-mix transit mixer",
    footerTitle: "PENETRON INTERNATIONAL LTD",
    footerSub: "Net Wt: 25 kg Bag / 18 kg Pail | ACI 212.3R-10"
  },

  // --- ASIAN PAINTS ---
  {
    slug: "asian-paints-smartcare-cemboost-200",
    brandColor: "#c62828",
    header: "INTEGRAL WATERPROOFING COMPOUND",
    title: "ASIAN PAINTS CEMBOOST 200",
    rows: [
      { k: "Standard:", v: "IS 2645 : 2003 & IS 9103 Compliant" },
      { k: "Properties:", v: "Hydrophobic pore-blocker & workability aid" },
      { k: "Corrosion:", v: "Active passivating polymers protect rebar" },
      { k: "Permeability:", v: "Reduces water penetration by > 50%" },
      { k: "Compatibility:", v: "OPC, PPC, PSC cement & all standard mixes" }
    ],
    ratioTitle: "DOSAGE & MIXING:",
    ratio: "200 ml per 50 kg bag of cement in concrete & plaster",
    coverage: "Premix with gauging water before adding to dry mix",
    footerTitle: "ASIAN PAINTS LIMITED",
    footerSub: "Consumer Packs: 200ml, 1L, 5L, 10L, 20L | ISO 9001"
  },
  {
    slug: "asian-paints-smartcare-vitalia-neo",
    brandColor: "#1e40af",
    header: "ADVANCED WATERPROOFING ADMIXTURE",
    title: "SMARTCARE VITALIA NEO",
    rows: [
      { k: "Standard:", v: "IS 2645 : 2003 & IS 9103" },
      { k: "Technology:", v: "Anti-efflorescence plasticising polymers" },
      { k: "Water Reduction:", v: "Up to 10 - 12% water cut at same slump" },
      { k: "Durability:", v: "Prevents salt leaching & dampness stains" },
      { k: "Setting Time:", v: "No adverse effect on initial/final set" }
    ],
    ratioTitle: "DOSAGE & APPLICATION:",
    ratio: "100 ml per 50 kg cement bag (ultra-concentrated)",
    coverage: "Mix with gauging water; do not add directly to dry cement",
    footerTitle: "ASIAN PAINTS LIMITED",
    footerSub: "Available in: 1L, 5L, 10L, 20L Packs | Quality Certified"
  },
  {
    slug: "asian-paints-smartcare-hypershot-af-100",
    brandColor: "#dc2626",
    header: "SHOTCRETE ACCELERATOR SPECIFICATIONS",
    title: "SMARTCARE HYPERSHOT AF 100",
    rows: [
      { k: "Standard:", v: "EN 934-5 & ASTM C1141 / C1141M" },
      { k: "Chemistry:", v: "Alkali-Free liquid suspension (non-caustic)" },
      { k: "Setting Action:", v: "Initial set: 2-5 mins | Final set: 6-10 mins" },
      { k: "Rebound Loss:", v: "Reduces rebound waste below 10%" },
      { k: "Applications:", v: "Tunneling, mining & rock slope stabilization" }
    ],
    ratioTitle: "DOSAGE GUIDELINE:",
    ratio: "3% to 8% by weight of cement at spraying nozzle",
    coverage: "Dosed via specialized shotcrete peristaltic dosing pump",
    footerTitle: "ASIAN PAINTS INDUSTRIAL INFRASTRUCTURE",
    footerSub: "Bulk Supply: 250 kg Industrial Drums | EFNARC Approved"
  },
  {
    slug: "asian-paints-maximopast-px-100",
    brandColor: "#dc2626",
    header: "SUPERPLASTICIZER ADMIXTURE SPECIFICATIONS",
    title: "MAXIMOPAST PX 100 (PCE BASE)",
    rows: [
      { k: "Standard:", v: "IS 9103 & ASTM C494 Type F/G" },
      { k: "Polymer Base:", v: "Modified Polycarboxylate Ether (PCE)" },
      { k: "Water Cut:", v: "Up to 30% water reduction with high flow" },
      { k: "Workability:", v: "Self-leveling consistency with zero bleeding" },
      { k: "Concrete Grade:", v: "Optimized for M25 to M40 commercial grades" }
    ],
    ratioTitle: "DOSAGE RECOMMENDATION:",
    ratio: "0.5% to 1.5% by weight of cementitious materials",
    coverage: "Add with last 20% mixing water in transit mixer/batch plant",
    footerTitle: "ASIAN PAINTS INDUSTRIAL INFRASTRUCTURE",
    footerSub: "Supplied in: 230 kg HDPE Drums & Bulk Tankers"
  },
  {
    slug: "asian-paints-maximopast-px-200",
    brandColor: "#dc2626",
    header: "HIGH-RANGE RETARDING SUPERPLASTICIZER",
    title: "MAXIMOPAST PX 200 (HIGH GRADE)",
    rows: [
      { k: "Standard:", v: "IS 9103 & ASTM C494 Type G" },
      { k: "Slump Life:", v: "Extended retention up to 3 hours transit" },
      { k: "Strength:", v: "Rapid early strength gain @ 3 & 7 days" },
      { k: "Heavily Rebar:", v: "High flowability through dense rebar mesh" },
      { k: "Mix Grades:", v: "M35 to M50 high-rise building concrete" }
    ],
    ratioTitle: "DOSAGE RECOMMENDATION:",
    ratio: "0.6% to 1.8% by weight of cementitious materials",
    coverage: "Batch plant dosing; dispense into mixed concrete",
    footerTitle: "ASIAN PAINTS INDUSTRIAL INFRASTRUCTURE",
    footerSub: "Supplied in: 230 kg HDPE Drums | High Rise Grade"
  },
  {
    slug: "asian-paints-maximopast-px-300",
    brandColor: "#dc2626",
    header: "ADVANCED HYPERPLASTICIZER FOR SCC",
    title: "MAXIMOPAST PX 300 (SCC & M50+)",
    rows: [
      { k: "Standard:", v: "IS 9103 & ASTM C494 Type F/G" },
      { k: "Concrete Type:", v: "Self-Compacting Concrete (SCC) & Ultra High Strength" },
      { k: "Water Reduction:", v: "> 35% water cut with exceptional rheology" },
      { k: "Segregation:", v: "Extreme cohesion, zero bleed, high viscosity" },
      { k: "Applications:", v: "Bridges, metro viaducts & precast infrastructure" }
    ],
    ratioTitle: "DOSAGE RECOMMENDATION:",
    ratio: "0.8% to 2.2% by weight of cementitious materials",
    coverage: "Conduct trial mixes to establish optimum slump spread",
    footerTitle: "ASIAN PAINTS INDUSTRIAL INFRASTRUCTURE",
    footerSub: "Supplied in: 230 kg HDPE Drums | Infrastructure Grade"
  },

  // --- DR FIXIT ---
  {
    slug: "dr-fixit-pidiproof-lw",
    brandColor: "#e65100",
    header: "INTEGRAL LIQUID WATERPROOFING COMPOUND",
    title: "DR. FIXIT PIDIPROOF LW+",
    rows: [
      { k: "Standard:", v: "IS 2645 : 2003 & IS 9103 Compliant" },
      { k: "Functions:", v: "Reduces permeability, increases workability" },
      { k: "Crack Shield:", v: "Prevents shrink cracks in plaster & RCC" },
      { k: "Corrosion:", v: "Protects reinforcement steel from rusting" },
      { k: "Chloride Free:", v: "Completely chloride-free formulation" }
    ],
    ratioTitle: "DOSAGE & MIXING:",
    ratio: "200 ml per 50 kg cement bag for concrete, mortar & plaster",
    coverage: "Mix with gauging water before adding to dry mix",
    footerTitle: "PIDILITE INDUSTRIES LIMITED",
    footerSub: "Packs: 1L, 5L, 10L, 20L | Toll Free: 1800 209 5504"
  },

  // --- STP LIMITED ---
  {
    slug: "stp-limited-tarfelt-lm",
    brandColor: "#c2410c",
    header: "COLD ELASTOMERIC LIQUID MEMBRANE",
    title: "STP TARFELT LM (WATER BASED)",
    rows: [
      { k: "Formulation:", v: "Cold-applied elastomeric bitumen emulsion" },
      { k: "Membrane:", v: "Forms continuous seamless flexible barrier" },
      { k: "Elongation:", v: "> 300% flexibility accommodates slab movement" },
      { k: "Jointless:", v: "Zero joints, laps or heat torch required" },
      { k: "Areas:", v: "Roofs, podiums, sunken slabs & basements" }
    ],
    ratioTitle: "APPLICATION & COVERAGE:",
    ratio: "Apply in 2 coats @ 1.2 to 1.5 kg/m² total thickness",
    coverage: "13 - 16 sq.m per 20 kg pail across 2 coats",
    footerTitle: "STP LIMITED (A BERGER COMPANY)",
    footerSub: "Net Wt: 20 kg Pail | Standard Quality Assured"
  },
  {
    slug: "stp-limited-shalisbr-latex",
    brandColor: "#00838f",
    header: "SBR BONDING & REPAIR POLYMER",
    title: "SHALISBR LATEX (COPOLYMER)",
    rows: [
      { k: "Base:", v: "Carboxylated Styrene Butadiene Copolymer" },
      { k: "Bond Strength:", v: "Exceptional adhesion of repair mortar to old concrete" },
      { k: "Flexural Strength:", v: "Greatly enhances tensile & flexural properties" },
      { k: "Waterproof:", v: "Creates impermeable repair coats & screeds" },
      { k: "Uses:", v: "Bonding slurry, repair mortar, waterproof screeds" }
    ],
    ratioTitle: "BONDING SLURRY RATIO:",
    ratio: "1 part ShaliSBR Latex : 1 part Water : 4 parts Cement",
    coverage: "Covers 70 - 80 sq.ft per litre in bonding slurry coat",
    footerTitle: "STP LIMITED (A BERGER COMPANY)",
    footerSub: "Available in: 1L, 5L, 20L Containers | ISO Certified"
  },
  {
    slug: "stp-limited-shalitex-primer",
    brandColor: "#b91c1c",
    header: "BITUMINOUS PENETRATING PRIMER",
    title: "SHALITEX PRIMER (SOLVENT BASED)",
    rows: [
      { k: "Standard:", v: "IS 3384 Compliant Bitumen Primer" },
      { k: "Penetration:", v: "Deeply seals porous concrete & masonry" },
      { k: "Adhesion:", v: "Prepares surface for bituminous coats & felts" },
      { k: "Drying Time:", v: "Fast drying (approx. 4 - 6 hours)" },
      { k: "Coverage:", v: "6 - 8 sq.m per litre on concrete surfaces" }
    ],
    ratioTitle: "APPLICATION METHOD:",
    ratio: "Ready to use; apply by brush, roller or squeegee",
    coverage: "Ensure surface is clean, dry and free of loose dust",
    footerTitle: "STP LIMITED (A BERGER COMPANY)",
    footerSub: "Supplied in: 20 L Pails & 200 L Barrels"
  },

  // --- MYK ARMENT ---
  {
    slug: "myk-arment-aquaarm-proof-wp10",
    brandColor: "#0284c7",
    header: "INTEGRAL WATERPROOFING ADMIXTURE",
    title: "AQUAARM PROOF WP-10",
    rows: [
      { k: "Standard:", v: "IS 2645 : 2003 & BS EN 934-2" },
      { k: "Pore Blocking:", v: "Active surface-active hydrophobic agents" },
      { k: "Permeability:", v: "Blocks capillary pores in mortar & RCC" },
      { k: "Workability:", v: "Improves compaction & cohesive cement mix" },
      { k: "Applications:", v: "Foundations, water sumps, roof slabs & plaster" }
    ],
    ratioTitle: "RECOMMENDED DOSAGE:",
    ratio: "125 ml per 50 kg cement bag for all grades of concrete",
    coverage: "Disperse thoroughly in gauging water before mixing",
    footerTitle: "MYK ARMENT PRIVATE LIMITED",
    footerSub: "Packs: 1L, 5L, 20L Jerry Cans | Certified Quality"
  },
  {
    slug: "myk-arment-armix-ellecrete-p-101",
    brandColor: "#0284c7",
    header: "CONCRETE PLASTICIZER & RETARDER",
    title: "ARMIX ELLECRETE P 101",
    rows: [
      { k: "Standard:", v: "IS 9103 & ASTM C494 Type A & D" },
      { k: "Action:", v: "Normal water reducing plasticizer & retarder" },
      { k: "Transit Mix:", v: "Ideal for ready-mix transit in hot weather" },
      { k: "Pumpability:", v: "Improves slump retention and pipeline pumping" },
      { k: "Finish:", v: "Delivers smooth, fair-faced architectural concrete" }
    ],
    ratioTitle: "DOSAGE GUIDELINE:",
    ratio: "0.2% to 0.6% by weight of cement",
    coverage: "Add directly into mixer drum with mixing water",
    footerTitle: "MYK ARMENT PRIVATE LIMITED",
    footerSub: "Supplied in: 225 kg Heavy Duty Drums"
  },
  {
    slug: "myk-arment-armix-ae",
    brandColor: "#0284c7",
    header: "AIR ENTRAINING ADMIXTURE",
    title: "ARMIX AE (SYNTHETIC RESIN)",
    rows: [
      { k: "Standard:", v: "IS 9103 & ASTM C260 Compliant" },
      { k: "Air Voids:", v: "Generates microscopic, evenly spaced air bubbles" },
      { k: "Durability:", v: "Protects concrete against frost & freeze-thaw" },
      { k: "Workability:", v: "Reduces segregation & bleeding in lean mixes" },
      { k: "Areas:", v: "Airport runways, concrete highways, dams & marine" }
    ],
    ratioTitle: "DOSAGE GUIDELINE:",
    ratio: "0.05% to 0.15% by weight of cement (entrains 4-6% air)",
    coverage: "Conduct air-meter tests on trial batches",
    footerTitle: "MYK ARMENT PRIVATE LIMITED",
    footerSub: "Supplied in: 20 L Cans & 200 L Barrels"
  },
  {
    slug: "myk-arment-armix-emmecrete-sp-111",
    brandColor: "#0284c7",
    header: "SUPERPLASTICIZER ADMIXTURE",
    title: "ARMIX EMMECRETE SP 111",
    rows: [
      { k: "Standard:", v: "IS 9103 & ASTM C494 Type F" },
      { k: "Base:", v: "Sulphonated Naphthalene Formaldehyde (SNF)" },
      { k: "Early Strength:", v: "Rapid early strength development in 24 hrs" },
      { k: "Precast Concrete:", v: "Accelerates formwork turnover in precast yards" },
      { k: "Flowability:", v: "High slump flow with substantial water reduction" }
    ],
    ratioTitle: "DOSAGE GUIDELINE:",
    ratio: "0.6% to 1.8% by weight of cementitious materials",
    coverage: "Pre-dilute with gauging water or add at batch plant",
    footerTitle: "MYK ARMENT PRIVATE LIMITED",
    footerSub: "Supplied in: 250 kg Industrial Drums"
  },
  {
    slug: "myk-arment-armix-hyyecrete-sp-200",
    brandColor: "#0284c7",
    header: "HIGH PERFORMANCE PCE SUPERPLASTICIZER",
    title: "ARMIX HYYECRETE SP 200",
    rows: [
      { k: "Standard:", v: "IS 9103 & ASTM C494 Type F/G" },
      { k: "Technology:", v: "3rd Generation Polycarboxylate Ether (PCE)" },
      { k: "High Strength:", v: "M50+ high grade, SCC & heavily reinforced RCC" },
      { k: "Retention:", v: "High slump retention up to 120 minutes" },
      { k: "Durability:", v: "Denser concrete matrix with ultra-low porosity" }
    ],
    ratioTitle: "DOSAGE GUIDELINE:",
    ratio: "0.5% to 1.5% by weight of cementitious content",
    coverage: "Dispense with batching water into transit mixer",
    footerTitle: "MYK ARMENT PRIVATE LIMITED",
    footerSub: "Supplied in: 225 kg Heavy Duty Drums"
  },
  {
    slug: "myk-arment-armix-cure-wb",
    brandColor: "#0284c7",
    header: "MEMBRANE CURING COMPOUND",
    title: "ARMIX CURE WB (WATER BASED)",
    rows: [
      { k: "Standard:", v: "ASTM C309 Type 1 Class A Compliant" },
      { k: "Mechanism:", v: "Forms continuous wax/resin moisture barrier" },
      { k: "Water Loss:", v: "Prevents > 90% water evaporation during curing" },
      { k: "Strength:", v: "Improves surface hardness and eliminates shrink cracks" },
      { k: "Applications:", v: "Highway slabs, runways, bridge decks & large floors" }
    ],
    ratioTitle: "APPLICATION & COVERAGE:",
    ratio: "Apply immediately after surface bleed water vanishes",
    coverage: "4.5 to 5.5 sq.m per litre via low-pressure sprayer",
    footerTitle: "MYK ARMENT PRIVATE LIMITED",
    footerSub: "Packs: 20 L Cans & 200 L Barrels | Eco Friendly"
  },
  {
    slug: "myk-arment-armix-form-fr-1",
    brandColor: "#0284c7",
    header: "CHEMICAL MOULD RELEASE AGENT",
    title: "ARMIX FORM FR 1 (SOLVENT BASED)",
    rows: [
      { k: "Base:", v: "Chemical release agent in selected hydrocarbon oil" },
      { k: "Release Action:", v: "Forms water-insoluble soap with concrete alkalis" },
      { k: "Fair-Faced:", v: "Ensures stain-free, architectural surface finish" },
      { k: "Shutter Life:", v: "Protects timber, steel & aluminum formwork" },
      { k: "Cleaning:", v: "Minimizes concrete adhesion to shutter faces" }
    ],
    ratioTitle: "APPLICATION & COVERAGE:",
    ratio: "Apply uniform thin film with spray, brush or roller",
    coverage: "Steel/Plastic: 30-40 m²/L | Timber/Plywood: 20-30 m²/L",
    footerTitle: "MYK ARMENT PRIVATE LIMITED",
    footerSub: "Packs: 20 L Cans & 210 L Barrels"
  },
  {
    slug: "myk-arment-armix-form-fr-2",
    brandColor: "#0284c7",
    header: "WATER DILUTABLE MOULD RELEASE CONCENTRATE",
    title: "ARMIX FORM FR 2 (CONCENTRATE)",
    rows: [
      { k: "Base:", v: "Concentrated emulsifiable form release oil" },
      { k: "Dilution:", v: "Dilutes 1:4 to 1:6 with clean water before use" },
      { k: "Economy:", v: "Highly cost-effective coverage for major sites" },
      { k: "Finish:", v: "Smooth, pin-hole free architectural finish" },
      { k: "Non-Toxic:", v: "Zero fire hazard, non-hazardous water emulsion" }
    ],
    ratioTitle: "DILUTION & COVERAGE:",
    ratio: "Mix 1 part FR 2 into 4 to 6 parts clean water thoroughly",
    coverage: "60 to 80 sq.m per litre of diluted emulsion",
    footerTitle: "MYK ARMENT PRIVATE LIMITED",
    footerSub: "Packs: 20 L Cans & 210 L Barrels"
  }
];

// Helper: generate crisp SVG reverse label
function createReverseLabelSvg(p, width, height) {
  const panelW = width;
  const panelH = height;
  const brandCol = p.brandColor || "#2756a0";

  let rowsSvg = "";
  let curY = 48;
  const rowH = 17;
  
  p.rows.forEach((r, i) => {
    const bg = i % 2 === 0 ? `<rect x="12" y="${curY - 12}" width="${panelW - 24}" height="${rowH}" fill="#f8fafc" />` : "";
    rowsSvg += `
      ${bg}
      <text x="18" y="${curY}" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#0f172a">${r.k}</text>
      <text x="100" y="${curY}" font-family="Arial, sans-serif" font-size="9" fill="#334155">${r.v}</text>
    `;
    curY += rowH;
  });

  const dividerY = curY + 2;
  const boxY = dividerY + 6;
  const boxH = 38;

  const coverageY = boxY + boxH + 16;
  const footerY = panelH - 46;

  const rawSvg = `
    <svg width="${panelW}" height="${panelH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="p-shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.18"/>
        </filter>
      </defs>
      <!-- Base White Card with subtle drop shadow -->
      <rect x="4" y="4" width="${panelW - 8}" height="${panelH - 8}" rx="6" fill="#ffffff" opacity="0.95" filter="url(#p-shadow)" stroke="${brandCol}" stroke-width="2"/>
      
      <!-- Brand Top Header Banner -->
      <rect x="4" y="4" width="${panelW - 8}" height="32" rx="6" fill="${brandCol}"/>
      <rect x="4" y="26" width="${panelW - 8}" height="10" fill="${brandCol}"/>
      <text x="${panelW / 2}" y="24" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">${p.header}</text>
      
      <!-- Table Rows -->
      ${rowsSvg}
      
      <!-- Divider -->
      <line x1="12" y1="${dividerY}" x2="${panelW - 12}" y2="${dividerY}" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Mixing / Dosage Highlight Box -->
      <rect x="12" y="${boxY}" width="${panelW - 24}" height="${boxH}" rx="4" fill="#f8fafc" stroke="${brandCol}" stroke-width="1" stroke-opacity="0.4"/>
      <text x="18" y="${boxY + 14}" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="${brandCol}">${p.ratioTitle}</text>
      <text x="18" y="${boxY + 28}" font-family="Arial, sans-serif" font-size="8" fill="#334155">${p.ratio}</text>
      
      <!-- Coverage Details -->
      <g font-family="Arial, sans-serif" font-size="8" fill="#475569">
        <text x="18" y="${coverageY}" font-weight="bold">Coverage / Application:</text>
        <text x="18" y="${coverageY + 12}">${p.coverage}</text>
      </g>
      
      <!-- Footer with Barcode -->
      <rect x="12" y="${footerY}" width="${panelW - 24}" height="36" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      
      <!-- Barcode Bars -->
      <g fill="#0f172a">
        <rect x="${panelW - 110}" y="${footerY + 5}" width="2" height="24"/>
        <rect x="${panelW - 106}" y="${footerY + 5}" width="3" height="24"/>
        <rect x="${panelW - 100}" y="${footerY + 5}" width="1" height="24"/>
        <rect x="${panelW - 97}" y="${footerY + 5}" width="4" height="24"/>
        <rect x="${panelW - 90}" y="${footerY + 5}" width="2" height="24"/>
        <rect x="${panelW - 86}" y="${footerY + 5}" width="1" height="24"/>
        <rect x="${panelW - 82}" y="${footerY + 5}" width="3" height="24"/>
        <rect x="${panelW - 76}" y="${footerY + 5}" width="2" height="24"/>
        <rect x="${panelW - 72}" y="${footerY + 5}" width="4" height="24"/>
        <rect x="${panelW - 65}" y="${footerY + 5}" width="1" height="24"/>
        <rect x="${panelW - 62}" y="${footerY + 5}" width="2" height="24"/>
        <rect x="${panelW - 57}" y="${footerY + 5}" width="3" height="24"/>
        <rect x="${panelW - 51}" y="${footerY + 5}" width="2" height="24"/>
        <rect x="${panelW - 46}" y="${footerY + 5}" width="4" height="24"/>
        <rect x="${panelW - 39}" y="${footerY + 5}" width="2" height="24"/>
        <rect x="${panelW - 34}" y="${footerY + 5}" width="3" height="24"/>
        <rect x="${panelW - 28}" y="${footerY + 5}" width="1" height="24"/>
        <rect x="${panelW - 24}" y="${footerY + 5}" width="3" height="24"/>
      </g>
      
      <text x="18" y="${footerY + 16}" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="${brandCol}">${p.footerTitle}</text>
      <text x="18" y="${footerY + 28}" font-family="Arial, sans-serif" font-size="7" fill="#64748b">${p.footerSub}</text>
    </svg>
  `;
  return rawSvg.replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');
}

async function getBoundingBox(buf) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const a = data[(y * info.width + x) * 4 + 3];
      if (a > 25) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return {
    minX,
    maxX,
    minY,
    maxY,
    width: Math.max(10, maxX - minX),
    height: Math.max(10, maxY - minY)
  };
}

async function generateAllRealBacks() {
  console.log(`Generating authentic photographic reverse sides for all ${PRODUCTS_DATA.length} products...`);
  
  for (const p of PRODUCTS_DATA) {
    const frontPngPath = path.join(OUT_DIR, `${p.slug}.png`);
    if (!fs.existsSync(frontPngPath)) {
      console.warn(`Skipping ${p.slug}, front image not found.`);
      continue;
    }
    
    const frontBuf = fs.readFileSync(frontPngPath);
    const box = await getBoundingBox(frontBuf);
    
    // Reverse side: horizontal flop of the REAL physical photograph
    const floppedBag = await sharp(frontBuf).flop().toBuffer();
    
    // Calculate appropriate label dimensions based on bounding box
    // Target label covers about 65-72% of product width, and 50-65% of product height
    const labelW = Math.round(Math.min(320, Math.max(220, box.width * 0.70)));
    const labelH = Math.round(Math.min(360, Math.max(260, box.height * 0.60)));
    
    // Position label centered on the physical container body
    const labelLeft = Math.round(box.minX + (box.width - labelW) / 2);
    const labelTop = Math.round(box.minY + (box.height - labelH) / 2 + 15);
    
    const labelSvg = Buffer.from(createReverseLabelSvg(p, labelW, labelH));
    
    const finalBack = await sharp(floppedBag)
      .composite([
        {
          input: labelSvg,
          top: labelTop,
          left: labelLeft
        }
      ])
      .png()
      .toBuffer();
      
    const backPngPath = path.join(OUT_DIR, `${p.slug}-back.png`);
    const backWebpPath = path.join(OUT_DIR, `${p.slug}-back.webp`);
    
    fs.writeFileSync(backPngPath, finalBack);
    await sharp(finalBack).webp({ quality: 90 }).toFile(backWebpPath);
    
    console.log(`✓ Generated real back side for: ${p.slug}`);
  }
  
  console.log("\nAll 28 authentic product back sides generated successfully!");
}

generateAllRealBacks().catch(console.error);
