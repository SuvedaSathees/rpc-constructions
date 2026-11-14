/**
 * Helper data structures for the RPC Product Details Popup:
 * - 4-feature badges
 * - Key benefits checklist
 * - Typical properties / technical specifications
 * - Application areas with verified site imagery
 */
import type { Product } from "./types";

export interface FeatureItem {
  icon: string;
  title: string;
}

export interface AppItem {
  name: string;
  image: string;
}

export interface SpecProperty {
  label: string;
  value: string;
}

const WATER_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`;
const SHIELD_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`;
const CRACK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`;
const CLOCK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const WRENCH_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
const LAYERS_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;

export function getProductFeatures(p: Product): FeatureItem[] {
  if (p.slug === "penetron-penetron-admix") {
    return [
      { icon: WATER_ICON, title: "Permanent Waterproofing" },
      { icon: SHIELD_ICON, title: "Improves Durability" },
      { icon: CRACK_ICON, title: "Reduces Permeability" },
      { icon: CLOCK_ICON, title: "Chemical Resistance" },
    ];
  }
  if (p.slug === "dr-fixit-pidiproof-lw") {
    return [
      { icon: WATER_ICON, title: "Makes Plaster & Concrete Waterproof" },
      { icon: SHIELD_ICON, title: "Improves Workability & Compaction" },
      { icon: CRACK_ICON, title: "Reduces Shrinkage & Cracking" },
      { icon: CLOCK_ICON, title: "Enhances Durability" },
    ];
  }
  if (p.slug === "stp-limited-tarfelt-lm") {
    return [
      { icon: WATER_ICON, title: "Waterproofing Membrane" },
      { icon: SHIELD_ICON, title: "Flexible & Durable" },
      { icon: WRENCH_ICON, title: "Cold Applied" },
      { icon: LAYERS_ICON, title: "High Adhesion" },
    ];
  }
  if (p.slug === "stp-limited-shalisbr-latex") {
    return [
      { icon: LAYERS_ICON, title: "High Substrate Adhesion" },
      { icon: WATER_ICON, title: "Water Resistance" },
      { icon: CRACK_ICON, title: "Reduces Shrinkage" },
      { icon: SHIELD_ICON, title: "Flexibility & Durability" },
    ];
  }
  if (p.slug === "stp-limited-shalitex-primer") {
    return [
      { icon: SHIELD_ICON, title: "Primer for Bituminous Systems" },
      { icon: WATER_ICON, title: "Seals Concrete Pores" },
      { icon: WRENCH_ICON, title: "Easy Brush / Roller Application" },
      { icon: CLOCK_ICON, title: "Conforms to IS 3384 (Part 1)" },
    ];
  }
  if (p.slug === "asian-paints-smartcare-cemboost-200") {
    return [
      { icon: WATER_ICON, title: "Reduces Capillary Water Penetration" },
      { icon: SHIELD_ICON, title: "Improves Workability & Compaction" },
      { icon: CRACK_ICON, title: "Controls Shrinkage Cracking" },
      { icon: CLOCK_ICON, title: "Enhances Durability" },
    ];
  }
  if (p.slug === "asian-paints-smartcare-vitalia-neo") {
    return [
      { icon: WATER_ICON, title: "Integral Waterproofing Liquid" },
      { icon: SHIELD_ICON, title: "Plasticising & Anti-Efflorescence" },
      { icon: CRACK_ICON, title: "Reduces Shrinkage Cracking" },
      { icon: CLOCK_ICON, title: "Long-Term Damp Protection" },
    ];
  }
  if (p.slug === "asian-paints-smartcare-hypershot-af-100") {
    return [
      { icon: CLOCK_ICON, title: "Rapid Setting Accelerator" },
      { icon: SHIELD_ICON, title: "Early High Compressive Strength" },
      { icon: CRACK_ICON, title: "Alkali-Free Formulation" },
      { icon: LAYERS_ICON, title: "Low Rebound & High Build" },
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-300") {
    return [
      { icon: SHIELD_ICON, title: "Ultra-High Compressive Strength" },
      { icon: WATER_ICON, title: "High Water Reduction (> 30%)" },
      { icon: CRACK_ICON, title: "Self-Compacting Concrete (SCC)" },
      { icon: CLOCK_ICON, title: "Extended Slump Retention" },
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-100") {
    return [
      { icon: WATER_ICON, title: "High-Range Water Reduction" },
      { icon: SHIELD_ICON, title: "Improves Compressive Strength" },
      { icon: CRACK_ICON, title: "Enhances Workability & Slump" },
      { icon: CLOCK_ICON, title: "Faster Formwork Stripping" },
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-200") {
    return [
      { icon: CLOCK_ICON, title: "Extended Slump Retention" },
      { icon: SHIELD_ICON, title: "High Early & Ultimate Strength" },
      { icon: WATER_ICON, title: "High Water Reduction (> 25%)" },
      { icon: CRACK_ICON, title: "Dense, Impermeable Matrix" },
    ];
  }
  if (p.slug === "myk-arment-aquaarm-proof-wp10") {
    return [
      { icon: WATER_ICON, title: "Reduced Water-Cement Ratio" },
      { icon: SHIELD_ICON, title: "Makes Concrete Denser" },
      { icon: WRENCH_ICON, title: "Enhances Workability" },
      { icon: CRACK_ICON, title: "Chloride-Free Protection" },
    ];
  }
  if (p.slug === "myk-arment-armix-ellecrete-p-101") {
    return [
      { icon: WATER_ICON, title: "Water Reduction (up to 12%)" },
      { icon: CLOCK_ICON, title: "Controlled Retardation" },
      { icon: WRENCH_ICON, title: "Improved Pumpability" },
      { icon: SHIELD_ICON, title: "IS 9103 & ASTM C494 Type D" },
    ];
  }
  if (p.slug === "myk-arment-armix-ae") {
    return [
      { icon: LAYERS_ICON, title: "Controlled Air Entrainment" },
      { icon: SHIELD_ICON, title: "Freeze-Thaw Resistance" },
      { icon: WRENCH_ICON, title: "Reduces Bleeding & Segregation" },
      { icon: CLOCK_ICON, title: "IS 9103 & ASTM C260" },
    ];
  }
  if (p.slug === "myk-arment-armix-emmecrete-sp-111") {
    return [
      { icon: SHIELD_ICON, title: "High Early Strength (SNF)" },
      { icon: WATER_ICON, title: "High Water Reduction (> 20%)" },
      { icon: CLOCK_ICON, title: "Rapid Formwork Turnaround" },
      { icon: WRENCH_ICON, title: "Precast & Prestressed RCC" },
    ];
  }
  if (p.slug === "myk-arment-armix-hyyecrete-sp-200") {
    return [
      { icon: WATER_ICON, title: "Extreme Water Reduction (> 30%)" },
      { icon: CLOCK_ICON, title: "Extended Slump Retention" },
      { icon: SHIELD_ICON, title: "PCE Copolymer Technology" },
      { icon: LAYERS_ICON, title: "Self-Compacting Concrete (SCC)" },
    ];
  }
  if (p.slug === "myk-arment-armix-cure-wb") {
    return [
      { icon: WATER_ICON, title: "Moisture Retention (> 90%)" },
      { icon: CRACK_ICON, title: "Prevents Plastic Shrinkage" },
      { icon: WRENCH_ICON, title: "Spray / Roller Applied" },
      { icon: SHIELD_ICON, title: "ASTM C309 Type 1 Class A" },
    ];
  }
  if (p.slug === "myk-arment-armix-form-fr-1") {
    return [
      { icon: SHIELD_ICON, title: "Smooth Fair-Faced Finish" },
      { icon: WRENCH_ICON, title: "Clean Formwork Release" },
      { icon: LAYERS_ICON, title: "Non-Staining Chemical Action" },
      { icon: CLOCK_ICON, title: "Extends Shuttering Life" },
    ];
  }
  if (p.slug === "myk-arment-armix-form-fr-2") {
    return [
      { icon: WRENCH_ICON, title: "Water-Dilutable Concentrate (1:5)" },
      { icon: SHIELD_ICON, title: "Economical Shuttering Stripping" },
      { icon: LAYERS_ICON, title: "Timber & Plywood Protection" },
      { icon: CRACK_ICON, title: "Stain-Free Architectural Surface" },
    ];
  }
  if (p.slug === "ardex-endura-bronze-star") {
    return [
      { icon: LAYERS_ICON, title: "Polymer Modified Bond" },
      { icon: WRENCH_ICON, title: "Easy Mixing & Application" },
      { icon: CLOCK_ICON, title: "Improved Working Time" },
      { icon: SHIELD_ICON, title: "IS 15477:2019 Certified" },
    ];
  }
  if (p.slug === "ardex-endura-silver-star") {
    return [
      { icon: SHIELD_ICON, title: "High Bond Strength (C1)" },
      { icon: LAYERS_ICON, title: "Internal & External Areas" },
      { icon: WRENCH_ICON, title: "Smooth Notch Spread" },
      { icon: CLOCK_ICON, title: "IS 15477 / EN 12004 C1" },
    ];
  }
  if (p.slug === "ardex-endura-silver-star-plus") {
    return [
      { icon: SHIELD_ICON, title: "High Polymer Modified (C1 T2)" },
      { icon: WATER_ICON, title: "Water Resistant Matrix" },
      { icon: CLOCK_ICON, title: "Extended Open Time (20–30 min)" },
      { icon: WRENCH_ICON, title: "Creamy Lump-Free Consistency" },
    ];
  }
  if (p.slug === "ardex-endura-gold-star") {
    return [
      { icon: SHIELD_ICON, title: "High Bond Strength (C2 Class)" },
      { icon: WATER_ICON, title: "Water Resistant & Exterior Use" },
      { icon: CLOCK_ICON, title: "Open Time of 30 Minutes" },
      { icon: LAYERS_ICON, title: "Ceramic, Vitrified & Stone" },
    ];
  }
  if (p.slug === "ardex-endura-diamond-star") {
    return [
      { icon: SHIELD_ICON, title: "Very High Bond Strength" },
      { icon: LAYERS_ICON, title: "Non-Slip Vertical Grip" },
      { icon: WATER_ICON, title: "Water Resistant Formula" },
      { icon: CLOCK_ICON, title: "IS 15477 C2 Compliant" },
    ];
  }
  if (p.slug === "ardex-endura-white-star") {
    return [
      { icon: LAYERS_ICON, title: "White Cement Polymer Matrix" },
      { icon: SHIELD_ICON, title: "Translucent Marble & Stone" },
      { icon: WATER_ICON, title: "Water Resistant Formula" },
      { icon: CLOCK_ICON, title: "Conforms to EN 12004 C1T" },
    ];
  }
  if (p.slug === "ardex-endura-platinum-star") {
    return [
      { icon: SHIELD_ICON, title: "Fibre Reinforced S1 Deformable" },
      { icon: LAYERS_ICON, title: "Bed Thickness up to 15 mm" },
      { icon: CLOCK_ICON, title: "Extended Open Time" },
      { icon: WRENCH_ICON, title: "EN 12004 C2 TE S1 Class" },
    ];
  }
  if (p.slug === "ardex-endura-platinum-star-plus") {
    return [
      { icon: SHIELD_ICON, title: "High Performance White S1" },
      { icon: LAYERS_ICON, title: "Fibre Reinforced Matrix" },
      { icon: WATER_ICON, title: "Extreme Flexibility & Shear" },
      { icon: CLOCK_ICON, title: "EN 12004 C2 TE S1 / S2" },
    ];
  }
  if (p.slug === "ardex-endura-epoxy") {
    return [
      { icon: SHIELD_ICON, title: "Treated with Microban" },
      { icon: WATER_ICON, title: "100% Solid Waterproof Grout" },
      { icon: CRACK_ICON, title: "Stain & Chemical Resistant" },
      { icon: CLOCK_ICON, title: "Exceeds EN 13888 (RG)" },
    ];
  }
  if (p.slug === "fosroc-auramix-400") {
    return [
      { icon: WATER_ICON, title: "High Water Reduction (>30%)" },
      { icon: SHIELD_ICON, title: "Extended Slump Retention" },
      { icon: CRACK_ICON, title: "High Early & Ultimate Strength" },
      { icon: CLOCK_ICON, title: "PCE Polymer Technology" },
    ];
  }
  if (p.slug === "berger-hs-epoxy-tile-grout") {
    return [
      { icon: WATER_ICON, title: "100% Waterproof Joint" },
      { icon: SHIELD_ICON, title: "Stain & Chemical Resistant" },
      { icon: LAYERS_ICON, title: "High Bond Strength" },
      { icon: CLOCK_ICON, title: "Hygienic Easy-Clean Finish" },
    ];
  }

  switch (p.family) {
    case "waterproofing":
      return [
        { icon: WATER_ICON, title: "Water Resistance" },
        { icon: SHIELD_ICON, title: "Durability" },
        { icon: CRACK_ICON, title: "Crack Prevention" },
        { icon: CLOCK_ICON, title: "Long Term Protection" },
      ];
    case "repair":
      return [
        { icon: SHIELD_ICON, title: "Structural Strength" },
        { icon: CRACK_ICON, title: "Non-Shrink Bond" },
        { icon: WRENCH_ICON, title: "Easy Application" },
        { icon: CLOCK_ICON, title: "Corrosion Protection" },
      ];
    case "bonding":
      return [
        { icon: LAYERS_ICON, title: "High Adhesion" },
        { icon: SHIELD_ICON, title: "Monolithic Bond" },
        { icon: WATER_ICON, title: "Moisture Insensitive" },
        { icon: CLOCK_ICON, title: "Extended Open Time" },
      ];
    case "admixtures":
      return [
        { icon: WATER_ICON, title: "Water Reduction" },
        { icon: SHIELD_ICON, title: "High Compressive" },
        { icon: CRACK_ICON, title: "Workability Retention" },
        { icon: CLOCK_ICON, title: "Faster De-moulding" },
      ];
    case "grouts":
      return [
        { icon: SHIELD_ICON, title: "Controlled Expansion" },
        { icon: CRACK_ICON, title: "Zero Shrinkage" },
        { icon: WRENCH_ICON, title: "High Fluidity" },
        { icon: CLOCK_ICON, title: "Vibration Resistance" },
      ];
    default:
      return [
        { icon: SHIELD_ICON, title: "Industrial Grade" },
        { icon: WATER_ICON, title: "High Performance" },
        { icon: WRENCH_ICON, title: "Consistent Quality" },
        { icon: CLOCK_ICON, title: "Proven Reliability" },
      ];
  }
}

export function getKeyBenefits(p: Product): string[] {
  if (p.slug === "penetron-penetron-admix") {
    return [
      "Penetron Admix is a crystalline waterproofing admixture for concrete, which reacts with moisture to form insoluble crystals",
      "Reduces water permeability and permanently seals microcracks up to 0.5 mm inside the concrete matrix",
      "Provides permanent waterproofing protection under positive and negative hydrostatic pressure",
      "Improves concrete durability and resistance against chemical attack, carbonation, and chloride penetration",
      "Non-toxic formulation, completely safe and approved for potable water tanks, sumps, and reservoirs",
      "Simple dosage: 1% by weight of cement (1 kg per 100 kg of cement)",
    ];
  }
  if (p.slug === "dr-fixit-pidiproof-lw") {
    return [
      "Dr. Fixit 101 Pidiproof LW+ is a liquid waterproofing compound for cementitious systems",
      "Reduces water permeability throughout concrete and mortar, improving workability and durability",
      "Improves workability & compaction of concrete and mortar without increasing water-cement ratio",
      "Reduces plastic shrinkage and hairline cracking in external & internal plaster and terrace screeds",
      "Dosage: 200 ml per 50 kg bag of cement (0.4% by weight of cement; 1 L for 5 bags)",
      "Easy site application: Dilute in water before adding to cement, sand, and aggregates mixer",
    ];
  }
  if (p.slug === "stp-limited-tarfelt-lm") {
    return [
      "Tarfelt LM is a ready-to-use, liquid bituminous membrane that forms a tough, seamless, waterproof coating",
      "Cold-applied formulation requires no heating, torches, or hazardous open flames on site",
      "Forms a continuous flexible membrane with excellent crack-bridging ability over substrate movements",
      "Provides exceptional adhesion to concrete, brickwork, masonry, and primed structural surfaces",
      "Resists ponding water, hydrostatic moisture, weathering, and aggressive ground salts",
      "Straightforward 2-3 coat application by brush, roller, or squeegee on clean, dry surfaces",
    ];
  }
  if (p.slug === "stp-limited-shalisbr-latex") {
    return [
      "ShaliSBR Latex is a styrene-butadiene rubber (SBR) latex bonding and waterproofing admixture for cementitious systems",
      "Improves adhesion, flexibility, water resistance, and long-term durability of repair mortars, plasters, and concrete",
      "Reduces cracking, plastic shrinkage, and permeability across patch repairs and floor screeds",
      "Versatile multi-purpose application: bonding slurry, polymer-modified repair mortar, and waterproof toppings",
      "Bonding slurry dosage: 1 part ShaliSBR Latex : 1–2 parts cement applied while tacky",
      "Mortar / plaster dosage: 5%–10% by weight of cement for enhanced bonding and workability",
    ];
  }
  if (p.slug === "stp-limited-shalitex-primer") {
    return [
      "ShaliTex Primer is a solvent-based bituminous primer for conditioning concrete and masonry surfaces",
      "Effectively seals surface pores and micro-voids, providing high substrate adhesion for membranes",
      "Multipurpose damp-proofing and priming for roof slabs, parapets, foundations, and below-grade walls",
      "Touch dry in 2–4 hours; hard dry in 6–8 hours (@ 27 °C, 65% RH) for fast recoating",
      "Economical single-coat coverage: 4–6 m² per litre on prepared concrete and masonry substrates",
      "Manufactured in compliance with Indian Standard IS : 3384 (Part 1)",
    ];
  }
  if (p.slug === "asian-paints-smartcare-cemboost-200") {
    return [
      "SmartCare CemBoost 200 is an integral waterproofing liquid admixture for cementitious mixes",
      "Significantly reduces water penetration through the capillary network in mortars and concrete",
      "Dosage: 200 ml per 50 kg of cement (0.4% by weight of cement)",
      "Easy site use: Dilute into gauging water and mix thoroughly before adding to cement and aggregates",
      "Improves workability and cohesion without increasing water-cement ratio",
      "Suitable for internal & external plaster, roof screeds, water tanks, basements, and wet areas",
    ];
  }
  if (p.slug === "asian-paints-smartcare-vitalia-neo") {
    return [
      "SmartCare Vitalia Neo is an integral waterproofing liquid designed to reduce water penetration in cementitious mixes",
      "Active plasticising additives enhance mix workability, compaction, and cohesive bonding",
      "Prevents unsightly efflorescence and salt leaching on external masonry and plaster",
      "Dosage: 200 ml per 50 kg bag of cement (~ 0.4% by weight of cement)",
      "Add directly to mixing gauging water for uniform dispersion through the concrete matrix",
      "Ideal for RCC foundations, roof slabs, retaining walls, brick masonry mortar, and external plaster",
    ];
  }
  if (p.slug === "asian-paints-smartcare-hypershot-af-100") {
    return [
      "Alkali-free liquid shotcrete accelerator for wet and dry sprayed concrete applications",
      "Accelerates setting time for immediate rock and substrate support in underground tunneling",
      "Provides high early compressive strength development without compromising 28-day ultimate strength",
      "Alkali-free chemistry enhances site safety and improves long-term durability of concrete lining",
      "Minimizes rebound loss and allows thick spray layers on vertical and overhead surfaces",
      "Ideal for tunnels, underground caverns, slope stabilization, retaining walls, and rock support",
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-300") {
    return [
      "Advanced PCE hyperplasticizer engineered for high-performance and ultra-high-strength concrete (M50+)",
      "Delivers outstanding water reduction exceeding 30%, producing dense, impermeable concrete",
      "Superior rheology and workability retention for long-distance transit and congested reinforcement pours",
      "Enables highly flowing, self-compacting concrete (SCC) with zero segregation and minimal bleeding",
      "Significantly accelerates early 1-day and 7-day strength gain for rapid formwork turnaround",
      "Ideal for precast yards, metro transit infrastructure, high-rise towers, and bridges",
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-100") {
    return [
      "High-performance PCE polymer additive superplasticizer for ready-mix and site-batched concrete",
      "Achieves substantial water reduction while maintaining high workability and pumpability",
      "Improves cement hydration efficiency, resulting in higher early and 28-day compressive strengths",
      "Reduces segregation, bleeding, and honeycombing in heavily reinforced concrete members",
      "Dosage: 0.5% – 1.5% by weight of cementitious materials as per mix design requirements",
      "Compatible with OPC, PPC, PSC, and mineral admixtures like fly ash and GGBS",
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-200") {
    return [
      "Advanced PCE-based concrete admixture engineered for long transit retention without re-dosing",
      "Ideal for hot weather concreting and long-distance hauls from RMC batching plants",
      "Promotes high early compressive strength for rapid demoulding and fast-track construction",
      "Produces dense, durable concrete with low permeability and improved chemical resistance",
      "Ensures superior surface finish and compaction around congested reinforcement",
      "Dosage: 0.6% – 1.8% by weight of cementitious binder depending on slump and retention needs",
    ];
  }
  if (p.slug === "myk-arment-aquaarm-proof-wp10") {
    return [
      "High-performance integral waterproofing liquid conforming to IS 2645:2008 for concrete and cement mortar",
      "Reduces water-cement ratio, improves workability and cohesiveness, and minimizes capillary porosity",
      "Makes concrete significantly denser, less permeable, and enhances long-term durability",
      "Chloride-free and non-corrosive to reinforcement steel in RCC structures",
      "Dosage: 0.5% to 2.0% by weight of cement (typically 200 ml to 800 ml per 50 kg cement; 1% / 400 ml recommended)",
      "Simple application: Add measured quantity directly to gauging water before mixing concrete or mortar",
    ];
  }
  if (p.slug === "myk-arment-armix-ellecrete-p-101") {
    return [
      "Normal water-reducing plasticizer and set retarder conforming to IS 9103:1999 and ASTM C494 Type D",
      "Provides controlled retardation of initial set, ideal for hot-weather concreting and extended transit hauls",
      "Improves workability, cohesiveness, and pumpability while reducing placement effort and segregation",
      "Achieves significant water reduction (8% to 12%) resulting in increased compressive and flexural strength",
      "Dosage: 0.2% to 0.6% by weight of cement (typically 100 ml to 300 ml per 50 kg cement bag)",
      "Supplied in 225 kg industrial drums and bulk tankers for ready-mix batching plants",
    ];
  }
  if (p.slug === "myk-arment-armix-ae") {
    return [
      "Synthetic air-entraining concrete admixture conforming to IS 9103:1999 and ASTM C260",
      "Produces stable, evenly distributed microscopic air voids (3% to 6%) across the concrete matrix",
      "Dramatically enhances resistance to severe freeze-thaw cycles, frost scaling, and de-icing chemicals",
      "Improves plastic mix cohesiveness and workability while virtually eliminating bleeding and sand streaking",
      "Dosage: 0.05% to 0.15% by weight of cement (typically 25 ml to 75 ml per 50 kg cement bag)",
      "Available in 20 L pails and 200 L industrial drums for pavements, dam structures, and mass concrete",
    ];
  }
  if (p.slug === "myk-arment-armix-emmecrete-sp-111") {
    return [
      "Sulphonated naphthalene formaldehyde (SNF) high-range water-reducing superplasticizer conforming to IS 9103 and ASTM C494 Type F",
      "Delivers substantial water reduction up to 20% – 25%, producing high-density, low-permeability concrete",
      "Promotes rapid early compressive strength development for fast formwork turnaround in precast production",
      "Produces high-slump flowing concrete without segregation, easing placement in congested reinforcement",
      "Dosage: 0.5% to 1.5% by weight of cement (typically 250 ml to 750 ml per 50 kg cement bag)",
      "Supplied in heavy-duty 250 kg drums for precast casting yards, bridge beam fabrication, and paver plants",
    ];
  }
  if (p.slug === "myk-arment-armix-hyyecrete-sp-200") {
    return [
      "Next-generation polycarboxylate ether (PCE) superplasticizer conforming to IS 9103 and ASTM C494 Type G",
      "Exceptional water-reduction capability (> 25% to 35%) for ultra-high performance and self-compacting concrete (SCC)",
      "Provides long slump retention without retardation, ideal for long transit distances and hot-weather placement",
      "Significantly improves early and ultimate compressive strengths with superior surface finish and compaction",
      "Dosage: 0.5% to 1.5% by weight of cementitious binder (typically 250 ml to 750 ml per 50 kg binder)",
      "Packaged in 225 kg industrial drums for high-rise towers, raft foundations, and infrastructure projects",
    ];
  }
  if (p.slug === "myk-arment-armix-cure-wb") {
    return [
      "Water-based wax/resin emulsion membrane curing compound conforming to ASTM C309 Type 1 Class A and BS 7542",
      "Forms an impermeable protective film over fresh concrete, retaining more than 90% of hydration moisture",
      "Prevents surface drying shrinkage, crazing, and hairline cracks during critical initial hydration",
      "Eliminates the continuous labour, equipment, and water costs associated with conventional ponding or hessian curing",
      "Coverage: 4.5 m² to 5.5 m² per litre applied uniformly by low-pressure spray or roller",
      "Available in 20 L containers and 200 L drums for airport runways, highways, industrial floors, and bridge decks",
    ];
  }
  if (p.slug === "myk-arment-armix-form-fr-1") {
    return [
      "Solvent-based chemical mould release agent formulated with reactive organic fatty acids and mineral oils",
      "Produces high-quality, smooth fair-faced concrete with uniform architectural appearance and no surface staining",
      "Chemical release action reacts with free lime in cement to prevent mechanical bonding between formwork and concrete",
      "Significantly extends the operational service life of steel formwork, aluminium moulds, and timber shuttering",
      "Coverage: 30 to 40 m² per litre on steel/aluminium; 20 to 30 m² per litre on absorbent timber/plywood",
      "Available in 20 L cans and 210 L drums for precast casting yards and high-rise formwork systems",
    ];
  }
  if (p.slug === "myk-arment-armix-form-fr-2") {
    return [
      "Water-dilutable concentrate mould release agent formulated from emulsifiable mineral oils and special surfactants",
      "Economical 1:5 to 1:6 dilution with clean site water provides high coverage and low per-square-metre application cost",
      "Delivers clean, rapid formwork strike without damaging sharp concrete arrises or staining architectural surfaces",
      "Protects plywood shuttering against moisture ingress, wood sugar attack, and premature delamination",
      "Coverage: 15 to 25 m² per litre of diluted emulsion depending on shutter porosity and application method",
      "Packaged in 20 L cans and 210 L drums for civil contractors, shuttering rental yards, and builders",
    ];
  }
  if (p.slug === "ardex-endura-bronze-star") {
    return [
      "Polymer modified, cementitious tile and stone adhesive for ceramic, vitrified, mosaic and natural stone tiles",
      "Engineered for internal and external application on cement-based stable substrates",
      "Easy mixing and smooth trowel application with improved open time and working adjustability (~15 min)",
      "High initial tack and strong bonding prevents hollow sound and dislodgement of tiles",
      "Coverage: ~4 to 5 kg/m² with a 6 mm notched trowel; water demand ~4.8 to 5.2 L per 20 kg bag",
      "Conforms to IS 15477:2019 standards; packaged in eco-friendly recyclable 20 kg bags",
    ];
  }
  if (p.slug === "ardex-endura-silver-star") {
    return [
      "High performance polymer modified tile adhesive conforming to IS 15477:2019 and EN 12004 (C1)",
      "Suitable for fixing ceramic, vitrified, porcelain, mosaic and natural stone tiles on floors and walls",
      "Formulated with German building materials technology for high bond strength in interior and exterior areas",
      "Smooth application with excellent rib stability under notched trowelling",
      "Indicative coverage: 5.5–6.5 m² (6 mm trowel), 4.0–5.0 m² (8 mm trowel), 3.0–4.0 m² (10 mm trowel) per 20 kg bag",
      "Water mixing ratio: 5.0 to 5.5 litres clean water per 20 kg bag; pot life 3–4 hours",
    ];
  }
  if (p.slug === "ardex-endura-silver-star-plus") {
    return [
      "High polymer modified cementitious tile/stone adhesive conforming to EN 12004 T2 and C1 Class specifications",
      "Delivers superior bond strength, improved slip resistance, and water-resistant protection",
      "Extended open time (20 to 30 minutes) allows comfortable alignment and placement of large tiles and stones",
      "Produces a lump-free, creamy paste that spreads easily with minimal trowel drag",
      "Approximate coverage: 4.0–4.5 m² (6 mm), 3.0–3.5 m² (10 mm), 2.5–3.0 m² (12 mm) per 20 kg bag",
      "Ideal for demanding residential and commercial installations across internal and external walls/floors",
    ];
  }
  if (p.slug === "ardex-endura-gold-star") {
    return [
      "High polymer modified adhesive conforming to IS 15477 and European standard C2 Class requirements",
      "Engineered for heavy-duty fixing of ceramic, vitrified tiles, granite, marble and natural stone",
      "Water-resistant matrix suitable for wet areas, exterior facades, balconies, and high foot-traffic floors",
      "Generous 30-minute open time facilitates accurate tile positioning and pressing without premature skinning",
      "Indicative coverage: approx. 4 to 6 kg/m² with 6 mm x 6 mm notched trowel (water ratio 5.0–5.5 L / 20 kg)",
      "Superior mechanical adhesion accommodates thermal stresses and minor substrate movements",
    ];
  }
  if (p.slug === "ardex-endura-diamond-star") {
    return [
      "Premium high-performance polymer modified non-slip adhesive conforming to IS 15477 C2 Compliant standard",
      "Specially engineered for large-format porcelain slabs, vitrified tiles, and heavy natural/engineered stones",
      "Advanced non-slip rheology prevents tile slippage on vertical walls during installation",
      "Exceptional bond strength and water resistance for internal and external floors, walls, and wet areas",
      "Coverage: approx. 4 to 6 kg/m² depending on substrate smoothness, tile dimensions, and trowel notch depth",
      "Supplied in moisture-resistant 20 kg sacks with full technical compliance for high-spec commercial projects",
    ];
  }
  if (p.slug === "ardex-endura-white-star") {
    return [
      "White cement based, high polymer modified tile/stone adhesive conforming to EN 12004 (C1T)",
      "Formulated specifically for translucent white marble, glass mosaics, and light-colored natural stone",
      "Prevents staining and dark shadowing behind light-colored or porous tiles and stone slabs",
      "High bond strength with smooth notch trowel application and extended open time (~20 to 30 min)",
      "Coverage: ~4.0 to 5.0 kg/m² depending on substrate evenness, tile dimensions, and trowel notch",
      "Water mixing ratio: ~5.0 to 5.5 litres clean water per 20 kg bag; pot life 3–4 hours",
    ];
  }
  if (p.slug === "ardex-endura-platinum-star") {
    return [
      "High-performance, fibre-reinforced, deformable tile and stone adhesive conforming to EN 12004 C2 TE S1",
      "Accommodates bed thicknesses up to 15 mm without slumping or shrinkage cracking",
      "Engineered for demanding internal and external installations of large format porcelain, vitrified tiles and stone",
      "Extended open time allows easy placement and adjustment of large tiles across floors and walls",
      "Indicative coverage: ~4.0 to 5.0 m² per 20 kg bag at 3 mm bed thickness (5.0 m² with 6 mm trowel)",
      "Excellent shear and tensile adhesion absorbs structural vibration and thermal expansion",
    ];
  }
  if (p.slug === "ardex-endura-platinum-star-plus") {
    return [
      "Premium white-cement based, fibre-reinforced deformable tile/stone adhesive (EN 12004 C2 TE S1/S2)",
      "Provides maximum flexibility and bond strength for mega-format sintered stone, slim porcelain, and glass tiles",
      "Ideal for light-coloured and translucent marble, external facades, pre-stressed concrete, and heated screeds",
      "Accommodates bed thickness up to 15 mm with superior anti-sag vertical slip resistance",
      "Approximate coverage: 5.0 to 6.5 kg/m² at 3 mm bed thickness (water ratio ~5.0 to 5.5 L per 20 kg bag)",
      "Tolerates severe thermal cycling, heavy dynamic traffic, and water exposure after 24 hours cure",
    ];
  }
  if (p.slug === "ardex-endura-epoxy") {
    return [
      "Three-component 100% solid reaction resin epoxy grout exceeding European standard EN 13888 (RG)",
      "Treated with Microban antimicrobial technology for permanent built-in protection against bacteria and fungal growth",
      "Completely impermeable, stain-resistant, and chemical-resistant joint filling for ceramic, vitrified and mosaic tiles",
      "Maintains bright, hygienic, easy-to-clean joints that do not discolor, crack, or wash out over time",
      "Approximate coverage: 18–20 m²/kit (300x300x8 mm tile / 3 mm joint), 11–13 m²/kit (600x600x10 mm tile / 3 mm joint)",
      "Supplied as a complete pre-measured system: Part A Resin, Part B Hardener, and Part C Pigmented Filler",
    ];
  }
  if (p.slug === "fosroc-auramix-400") {
    return [
      "High performance superplasticizer based on polycarboxylate ether (PCE) polymers designed for ready-mix concrete",
      "Enables significant water reduction (>30%) while producing high workability, cohesive, and non-segregating concrete",
      "Provides extended slump retention of up to 2–3 hours without retarding early setting time",
      "Substantially improves early and 28-day compressive strengths and reduces drying shrinkage cracking",
      "Optimizes cement content in high-grade mix designs (M35 to M80) and pumpable concrete over long distances",
      "Supplied in 250 kg industrial drums conforming to IS 9103, BS 5075, and ASTM C494 Type F & G",
    ];
  }
  if (p.slug === "berger-hs-epoxy-tile-grout") {
    return [
      "Two/three-component epoxy resin-based waterproof joint filler designed for ceramic, vitrified tiles and stones",
      "100% waterproof and impervious to water, oils, household chemicals, mild acids, and detergent stains",
      "High bond strength prevents joint debonding, cracking, powdering, or water ingress into substrates",
      "Smooth, high-density hygienic finish that resists fungal and bacterial growth in wet areas",
      "Ideal for residential bathrooms, kitchens, swimming pools, commercial food processing, and hospitals",
      "Supplied in complete kit form (Part A Resin, Part B Hardener, Part C Filler) with easy cleanup before initial set",
    ];
  }
  switch (p.family) {
    case "waterproofing":
      return [
        "Reduces water permeability and stops positive & negative pressure leaks",
        "Improves workability and creates a seamless, flexible protective barrier",
        "Enhances long-term durability against UV, weather, and carbonation",
        "Protects internal masonry and RCC against rising dampness and salt attack",
        "Suitable for RCC, brickwork, plaster, and screed surfaces",
        "Easy to mix and cost-effective across large commercial and residential areas",
      ];
    case "repair":
      return [
        "High early and ultimate compressive strength for load-bearing structures",
        "Compensated shrinkage ensures tight dimensional stability without cracking",
        "Impermeable to water, chlorides, carbon dioxide, and aggressive industrial fumes",
        "High bond strength to prepared concrete substrates and reinforcement steel",
        "Pre-bagged formulation eliminates site batching errors and quality variance",
        "Suitable for vertical, horizontal, overhead, and precast concrete repairs",
      ];
    case "bonding":
      return [
        "Forms a bond stronger than the tensile strength of parent concrete",
        "Provides excellent adhesion to both dry and damp concrete surfaces",
        "Long open time allows placing large pours and complicated formwork setups",
        "Thixotropic consistency prevents sagging on vertical and overhead joints",
        "Resistant to moisture, frost, mild chemicals, and thermal shock",
        "Ideal for structural bonding of precast units, floor toppings, and repair mortars",
      ];
    case "admixtures":
      return [
        "Substantial water reduction without sacrificing high workability and pumpability",
        "Significantly increases 1-day, 7-day, and 28-day concrete compressive strengths",
        "Improves slump retention in hot weather and across long haul transit mixers",
        "Minimizes bleeding, segregation, and honeycombing in dense reinforcement",
        "Chloride-free formulation safe for prestressed and reinforced concrete",
        "Improves surface finish, density, and reduces water absorption",
      ];
    case "grouts":
      return [
        "Dual-expansion mechanism compensates for plastic and hardened shrinkage",
        "Extremely high early compressive strength for rapid machine commissioning",
        "Excellent flowability reaches complex baseplates, anchor pockets, and ducts",
        "Pre-mixed single-component system requires only clean water on site",
        "Withstands heavy dynamic loads, machinery vibrations, and thermal cycles",
        "Non-metallic, chloride-free formulation prevents staining and corrosion",
      ];
    default:
      return [
        "Meets stringent Indian and international engineering standards",
        "Consistent batch-to-batch quality manufactured under ISO standards",
        "Formulated specifically for Indian tropical climatic conditions",
        "Significantly reduces maintenance downtime and lifecycle structural repair costs",
        "Safe to handle with minimal environmental and site impact",
        "Backed by RPC technical advisory support and manufacturer warranties",
      ];
  }
}

export function getApplications(p: Product): AppItem[] {
  return [
    { name: "Basements", image: "/images/rain/basement-after.webp" },
    { name: "Water Tanks", image: "/images/rain/tank-after.webp" },
    { name: "Roofs & Terraces", image: "/images/waterproofing/waterproofing-real-terrace.jpg" },
    { name: "Bathrooms", image: "/images/rain/bath-after.webp" },
  ];
}

export function getTypicalProperties(p: Product): SpecProperty[] {
  if (p.slug === "penetron-penetron-admix") {
    return [
      { label: "Product Form", value: "Dry powder crystalline admixture" },
      { label: "Color", value: "Concrete Grey" },
      { label: "Dosage", value: "1% by weight of cement (1 kg / 100 kg cement)" },
      { label: "Action Mechanism", value: "Catalytic reaction forms insoluble crystals in pores" },
      { label: "Self-Healing", value: "Seals microcracks up to 0.5 mm" },
      { label: "Permeability", value: "Reduces water penetration up to 90%" },
      { label: "Chemical Resistance", value: "pH 3 to 11 constant, resistant to chlorides & sulphates" },
      { label: "Packaging", value: "18 kg (40 lb) bag, 25 kg (55 lb) pail" },
    ];
  }
  if (p.slug === "dr-fixit-pidiproof-lw") {
    return [
      { label: "Product Form", value: "Liquid waterproofing compound" },
      { label: "Color", value: "Dark Brown / Wine" },
      { label: "Dosage", value: "200 ml per 50 kg bag of cement (0.4% by cement wt)" },
      { label: "Water Permeability", value: "IS 2645-2003 certified integral waterproofing" },
      { label: "Chloride Content", value: "Nil (non-corrosive to rebar)" },
      { label: "Areas of Application", value: "Plaster, roof screeds, water tanks (RCC), sunken areas, bathrooms" },
      { label: "Packaging", value: "1 L, 5 L, 10 L, 20 L" },
      { label: "Shelf Life", value: "24 months in original unopened container" },
    ];
  }
  if (p.slug === "stp-limited-tarfelt-lm") {
    return [
      { label: "Product Form", value: "Liquid bituminous elastomeric membrane" },
      { label: "Color", value: "Dark Brown / Black" },
      { label: "Application Method", value: "Cold applied by brush, roller, or squeegee" },
      { label: "Recommended Coats", value: "2 to 3 coats with adequate inter-coat drying" },
      { label: "Typical Uses", value: "Roof waterproofing (RC roofs), foundations, below-grade, bathrooms, balconies" },
      { label: "Key Properties", value: "Seamless monolithic membrane, crack-bridging, high adhesion" },
      { label: "Packaging", value: "20 kg pail" },
      { label: "Safety & Handling", value: "Protective gloves & eye protection; apply in well-ventilated area" },
    ];
  }
  if (p.slug === "stp-limited-shalisbr-latex") {
    return [
      { label: "Product Form", value: "Milky white liquid emulsion" },
      { label: "Chemical Base", value: "Styrene-butadiene rubber (SBR) latex" },
      { label: "Bonding Slurry Dosage", value: "1 part ShaliSBR Latex : 1–2 parts cement" },
      { label: "Mortar / Plaster Dosage", value: "5% – 10% by weight of cement" },
      { label: "Key Properties", value: "High bond strength, reduces shrinkage, improves water resistance" },
      { label: "Applications", value: "Concrete bonding, repair & patching, floor screeds, toppings & waterproofing" },
      { label: "Packaging", value: "1 L, 5 L, 20 L pail" },
      { label: "Storage", value: "Store in cool, dry place away from direct sunlight" },
    ];
  }
  if (p.slug === "stp-limited-shalitex-primer") {
    return [
      { label: "Type", value: "Bituminous, solvent-based primer" },
      { label: "Appearance", value: "Black, free-flowing liquid" },
      { label: "Specific Gravity", value: "0.90 – 1.00 @ 27 °C" },
      { label: "Solid Content", value: "40 – 50% (by weight)" },
      { label: "Drying Time", value: "Touch dry: 2–4 h; Hard dry: 6–8 h" },
      { label: "Coverage", value: "4 – 6 m² per litre (single coat)" },
      { label: "Specification", value: "Conforms to IS : 3384 (Part 1)" },
      { label: "Packaging", value: "20 L drum, 200 L drum" },
    ];
  }
  if (p.slug === "asian-paints-smartcare-cemboost-200") {
    return [
      { label: "Product Form", value: "Liquid waterproofing admixture" },
      { label: "Dosage", value: "200 ml per 50 kg cement (0.4% by cement wt)" },
      { label: "Water Permeability", value: "Reduces capillary penetration in mortar & concrete" },
      { label: "Specific Gravity", value: "1.02 – 1.06 @ 27 °C" },
      { label: "Chloride Content", value: "Nil (non-corrosive to rebar)" },
      { label: "Applications", value: "Plaster, mortar, concrete, roof slabs, basements, water tanks" },
      { label: "Packaging", value: "200 ml, 1 L, 5 L, 10 L can, 20 L can" },
      { label: "Storage", value: "Store in cool, dry place away from direct sunlight" },
    ];
  }
  if (p.slug === "asian-paints-smartcare-vitalia-neo") {
    return [
      { label: "Product Form", value: "Integral waterproofing liquid" },
      { label: "Dosage", value: "200 ml per 50 kg cement (~ 0.4% by cement wt)" },
      { label: "Special Feature", value: "Plasticising & anti-efflorescence" },
      { label: "Permeability", value: "Conforms to IS 2645 integral waterproofing standards" },
      { label: "Chloride Content", value: "Nil" },
      { label: "Typical Uses", value: "RCC foundations, roof slabs, retaining walls, brick mortar, plaster" },
      { label: "Packaging", value: "1 L bottle, 5 L, 10 L, 20 L" },
      { label: "Shelf Life", value: "24 months in unopened original container" },
    ];
  }
  if (p.slug === "asian-paints-smartcare-hypershot-af-100") {
    return [
      { label: "Product Form", value: "Liquid shotcrete accelerator" },
      { label: "Chemical Base", value: "Alkali-free inorganic accelerator" },
      { label: "Appearance", value: "Pale yellow to white suspension" },
      { label: "Dosage", value: "3% – 8% by weight of cementitious binder" },
      { label: "Setting Action", value: "Initial set < 3 min, final set < 10 min" },
      { label: "Typical Uses", value: "Tunnel linings, underground caverns, slope stabilisation, mining support" },
      { label: "Packaging", value: "200 L drum, 250 kg drum, 1000 L IBC" },
      { label: "Safety", value: "Industrial use only; wear gloves and goggles" },
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-300") {
    return [
      { label: "Product Form", value: "Free-flowing brown liquid" },
      { label: "Chemical Base", value: "Polycarboxylate Ether (PCE)" },
      { label: "Specific Gravity", value: "1.08 – 1.12 @ 27 °C" },
      { label: "Water Reduction", value: "> 30% water reduction" },
      { label: "Chloride Content", value: "Nil (IS 9103 & ASTM C494 Type F/G)" },
      { label: "Dosage", value: "0.5% – 2.0% by weight of cementitious material" },
      { label: "Typical Uses", value: "M50+ HPC, self-compacting concrete (SCC), precast elements, infrastructure" },
      { label: "Packaging", value: "230 kg drum, bulk tankers" },
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-100") {
    return [
      { label: "Product Form", value: "Amber / dark brown liquid" },
      { label: "Chemical Base", value: "Modified Polycarboxylate Ether (PCE)" },
      { label: "Specific Gravity", value: "1.06 – 1.10 @ 27 °C" },
      { label: "pH Value", value: "6.0 – 8.0" },
      { label: "Chloride Content", value: "Nil (IS 9103 compliant)" },
      { label: "Dosage", value: "0.5% – 1.5% by weight of cement" },
      { label: "Typical Uses", value: "RMC plants, pumped concrete, commercial buildings, slabs" },
      { label: "Packaging", value: "200 L drum, 230 kg drum, bulk tankers" },
    ];
  }
  if (p.slug === "asian-paints-maximopast-px-200") {
    return [
      { label: "Product Form", value: "Light brown liquid admixture" },
      { label: "Chemical Base", value: "High-performance PCE copolymer" },
      { label: "Specific Gravity", value: "1.08 – 1.12 @ 27 °C" },
      { label: "Slump Retention", value: "Up to 2 – 3 hours @ 30 °C" },
      { label: "Chloride Content", value: "Nil (conforms to IS 9103 & ASTM C494 Type G)" },
      { label: "Dosage", value: "0.6% – 1.8% by weight of cementitious material" },
      { label: "Typical Uses", value: "M35–M50 concrete, high-rise pumping, long-haul RMC, bridge decks" },
      { label: "Packaging", value: "200 L drum, 230 kg drum, bulk tankers" },
    ];
  }
  if (p.slug === "myk-arment-aquaarm-proof-wp10") {
    return [
      { label: "Appearance", value: "Clear to light yellow liquid" },
      { label: "Specific Gravity (@ 27 °C)", value: "1.01 – 1.05" },
      { label: "pH Value", value: "7.0 – 9.0" },
      { label: "Chloride Content", value: "Nil (as per IS 2645, non-corrosive)" },
      { label: "Standard Compliance", value: "IS 2645:2008" },
      { label: "Recommended Dosage", value: "0.5% – 2.0% (typically 200 – 800 ml / 50 kg cement; 1% / 400 ml standard)" },
      { label: "Coverage", value: "As per dosage (~400 ml per 50 kg cement bag)" },
      { label: "Shelf Life & Storage", value: "12 months in cool, dry & shaded place away from direct sunlight" },
    ];
  }
  if (p.slug === "myk-arment-armix-ellecrete-p-101") {
    return [
      { label: "Product Form", value: "Dark brown liquid plasticizer" },
      { label: "Chemical Base", value: "Modified lignosulphonate blend" },
      { label: "Specific Gravity", value: "1.15 – 1.19 @ 27 °C" },
      { label: "Standard Compliance", value: "IS 9103:1999 & ASTM C494 Type D" },
      { label: "Chloride Content", value: "Nil (safe for reinforced concrete)" },
      { label: "Dosage Range", value: "0.2% – 0.6% by weight of cement (100–300 ml / 50 kg)" },
      { label: "Typical Applications", value: "RMC transit, hot-weather RCC, mass concrete, pumped mixes" },
      { label: "Packaging", value: "225 kg drum, bulk tanker" },
    ];
  }
  if (p.slug === "myk-arment-armix-ae") {
    return [
      { label: "Product Form", value: "Pale amber to light brown liquid" },
      { label: "Chemical Base", value: "Synthetic surfactant & wood resin blend" },
      { label: "Specific Gravity", value: "1.01 – 1.03 @ 27 °C" },
      { label: "Standard Compliance", value: "IS 9103:1999 & ASTM C260" },
      { label: "Air Entrainment", value: "3% – 6% controlled micro-air bubbles" },
      { label: "Dosage Range", value: "0.05% – 0.15% by weight of cement (25–75 ml / 50 kg)" },
      { label: "Typical Applications", value: "Concrete pavements, dams, airfields, mass concrete, slipform paving" },
      { label: "Packaging", value: "20 L can, 200 L drum" },
    ];
  }
  if (p.slug === "myk-arment-armix-emmecrete-sp-111") {
    return [
      { label: "Product Form", value: "Dark brown liquid superplasticizer" },
      { label: "Chemical Base", value: "Sulphonated Naphthalene Formaldehyde (SNF)" },
      { label: "Specific Gravity", value: "1.20 – 1.24 @ 27 °C" },
      { label: "Standard Compliance", value: "IS 9103:1999 & ASTM C494 Type F" },
      { label: "Water Reduction", value: "Up to 20% – 25%" },
      { label: "Dosage Range", value: "0.5% – 1.5% by weight of cement (250–750 ml / 50 kg)" },
      { label: "Typical Applications", value: "Precast yards, bridge girders, high-grade structural RCC, paver blocks" },
      { label: "Packaging", value: "250 kg drum, bulk delivery" },
    ];
  }
  if (p.slug === "myk-arment-armix-hyyecrete-sp-200") {
    return [
      { label: "Product Form", value: "Light amber liquid superplasticizer" },
      { label: "Chemical Base", value: "Polycarboxylate Ether (PCE) Copolymer" },
      { label: "Specific Gravity", value: "1.08 – 1.12 @ 27 °C" },
      { label: "Standard Compliance", value: "IS 9103:1999 & ASTM C494 Type G" },
      { label: "Water Reduction", value: "> 25% to 35%" },
      { label: "Dosage Range", value: "0.5% – 1.5% by weight of binder (250–750 ml / 50 kg)" },
      { label: "Typical Applications", value: "Self-compacting concrete (SCC), raft foundations, high-rise pumping" },
      { label: "Packaging", value: "225 kg drum, bulk tanker" },
    ];
  }
  if (p.slug === "myk-arment-armix-cure-wb") {
    return [
      { label: "Product Form", value: "White milky emulsion (dries clear)" },
      { label: "Chemical Base", value: "Water-based wax / hydrocarbon resin emulsion" },
      { label: "Specific Gravity", value: "1.00 – 1.02 @ 27 °C" },
      { label: "Standard Compliance", value: "ASTM C309 Type 1 Class A & BS 7542" },
      { label: "Moisture Retention", value: "> 90% water retention efficiency" },
      { label: "Coverage", value: "4.5 – 5.5 m² per litre (single uniform coat)" },
      { label: "Typical Applications", value: "Highway pavements, airport aprons, industrial floors, canal linings" },
      { label: "Packaging", value: "20 L can, 200 L drum" },
    ];
  }
  if (p.slug === "myk-arment-armix-form-fr-1") {
    return [
      { label: "Product Form", value: "Clear straw to light brown liquid" },
      { label: "Chemical Base", value: "Non-staining mineral oil & reactive fatty acid blend" },
      { label: "Specific Gravity", value: "0.84 – 0.88 @ 27 °C" },
      { label: "Application Method", value: "Neat by spray, brush, roller or cloth" },
      { label: "Coverage (Steel / Al)", value: "30 – 40 m² per litre" },
      { label: "Coverage (Plywood)", value: "20 – 30 m² per litre" },
      { label: "Typical Applications", value: "Steel shuttering, aluminium formwork, timber moulds, precast casting" },
      { label: "Packaging", value: "20 L can, 210 L drum" },
    ];
  }
  if (p.slug === "myk-arment-armix-form-fr-2") {
    return [
      { label: "Product Form", value: "Brown liquid (milky white when diluted)" },
      { label: "Chemical Base", value: "Emulsifiable mineral oil & surfactant concentrate" },
      { label: "Specific Gravity", value: "0.86 – 0.90 @ 27 °C" },
      { label: "Dilution Ratio", value: "1 part FR 2 : 5 to 6 parts clean water" },
      { label: "Coverage (Diluted)", value: "15 – 25 m² per litre of diluted emulsion" },
      { label: "Typical Applications", value: "Plywood shuttering, timber moulds, plastic forms, general casting" },
      { label: "Packaging", value: "20 L can, 210 L drum" },
    ];
  }
  if (p.slug === "ardex-endura-bronze-star") {
    return [
      { label: "Product Form", value: "Grey cementitious powder" },
      { label: "Bulk Density", value: "~1.4 kg/L" },
      { label: "Standard Compliance", value: "IS 15477:2019 (Type 1T)" },
      { label: "Pot Life (@ 27 °C)", value: "~3 – 4 hours" },
      { label: "Open Time / Adjustability", value: "≥ 20 minutes / ~15 minutes" },
      { label: "Application Thickness", value: "3 – 10 mm" },
      { label: "Mixing Ratio", value: "4.8 – 5.2 L clean water per 20 kg bag" },
      { label: "Coverage (6 mm trowel)", value: "~4 – 5 kg/m²" },
      { label: "Packaging & Shelf Life", value: "20 kg bag / 12 months in dry conditions" },
    ];
  }
  if (p.slug === "ardex-endura-silver-star") {
    return [
      { label: "Product Form", value: "Grey polymer-modified powder" },
      { label: "Classification", value: "C1 Class (IS 15477:2019 & EN 12004)" },
      { label: "Recommended Use", value: "Ceramic, vitrified & porcelain tiles on floor & wall" },
      { label: "Mixing Ratio", value: "5.0 – 5.5 L water per 20 kg powder" },
      { label: "Open Time / Pot Life", value: "~20 – 25 minutes / 3 – 4 hours" },
      { label: "Coverage (6 mm trowel)", value: "~5.5 – 6.5 m² per 20 kg bag" },
      { label: "Coverage (8 mm trowel)", value: "~4.0 – 5.0 m² per 20 kg bag" },
      { label: "Coverage (10 mm trowel)", value: "~3.0 – 4.0 m² per 20 kg bag" },
      { label: "Packaging & Shelf Life", value: "20 kg bag / 12 months from mfg date" },
    ];
  }
  if (p.slug === "ardex-endura-silver-star-plus") {
    return [
      { label: "Product Form", value: "High polymer modified cementitious powder" },
      { label: "Classification", value: "C1 T2 (EN 12004 & IS 15477:2019)" },
      { label: "Tile Suitability", value: "Vitrified, porcelain, natural stone tiles" },
      { label: "Open Time / Setting", value: "Extended open time (20–30 min) / 24 hrs curing" },
      { label: "Water Ratio", value: "~5.0 – 6.0 L per 20 kg powder" },
      { label: "Coverage (6 mm trowel)", value: "~4.0 – 4.5 m² per 20 kg bag" },
      { label: "Coverage (10 mm trowel)", value: "~3.0 – 3.5 m² per 20 kg bag" },
      { label: "Coverage (12 mm trowel)", value: "~2.5 – 3.0 m² per 20 kg bag" },
      { label: "Packaging & Shelf Life", value: "20 kg bag / 12 months in dry storage" },
    ];
  }
  if (p.slug === "ardex-endura-gold-star") {
    return [
      { label: "Product Form", value: "High polymer modified tile/stone adhesive" },
      { label: "Classification", value: "C2 Class (IS 15477 & EN 12004)" },
      { label: "Substrate Compatibility", value: "Concrete, screeds, plaster, tile-on-tile" },
      { label: "Open Time", value: "30 minutes open time" },
      { label: "Water Resistance", value: "Water resistant (interior & exterior)" },
      { label: "Mixing Ratio", value: "5.0 – 5.5 L clean water per 20 kg bag" },
      { label: "Coverage (6 mm trowel)", value: "~4 – 6 kg/m²" },
      { label: "Packaging & Shelf Life", value: "20 kg bag / 12 months off ground" },
    ];
  }
  if (p.slug === "ardex-endura-diamond-star") {
    return [
      { label: "Product Form", value: "High performance grey powder adhesive" },
      { label: "Classification", value: "C2 Compliant (IS 15477)" },
      { label: "Key Features", value: "Non-slip vertical grip, very high bond strength" },
      { label: "Tile Suitability", value: "Large porcelain slabs, vitrified tiles, granite, marble" },
      { label: "Application Areas", value: "Floors & walls, interior & exterior, wet areas" },
      { label: "Coverage", value: "~4 – 6 kg/m² depending on substrate & notch" },
      { label: "Setting Time", value: "24 hours before grouting" },
      { label: "Packaging & Storage", value: "20 kg bag / cool, dry place away from moisture" },
    ];
  }
  if (p.slug === "ardex-endura-white-star") {
    return [
      { label: "Product Form", value: "White cementitious powder" },
      { label: "Classification", value: "C1T (EN 12004 & IS 15477:2019)" },
      { label: "Primary Use", value: "Translucent marble, glass mosaics, light stone, vitrified tiles" },
      { label: "Mixing Ratio", value: "5.0 – 5.5 L clean water per 20 kg bag" },
      { label: "Open Time / Adjustability", value: "≥ 20 minutes / ~15 minutes" },
      { label: "Coverage", value: "~4.0 – 5.0 kg/m² depending on trowel notch" },
      { label: "Setting Time", value: "Minimum 24 hours before grouting" },
      { label: "Packaging & Shelf Life", value: "20 kg bag / 12 months in dry conditions" },
    ];
  }
  if (p.slug === "ardex-endura-platinum-star") {
    return [
      { label: "Product Form", value: "Grey fibre-reinforced powder" },
      { label: "Classification", value: "C2 TE S1 (EN 12004 & IS 15477 Type 4TE S1)" },
      { label: "Deformability", value: "S1 Deformable (flexibility under stress)" },
      { label: "Bed Thickness", value: "Up to 15 mm bed thickness" },
      { label: "Mixing Ratio", value: "5.0 – 5.5 L water per 20 kg bag" },
      { label: "Coverage (3 mm bed)", value: "~4.0 – 5.0 m² per 20 kg bag" },
      { label: "Coverage (6 mm trowel)", value: "~5.0 m² per 20 kg bag" },
      { label: "Packaging & Storage", value: "20 kg bag / 12 months off ground in dry area" },
    ];
  }
  if (p.slug === "ardex-endura-platinum-star-plus") {
    return [
      { label: "Product Form", value: "White fibre-reinforced cementitious powder" },
      { label: "Classification", value: "C2 TE S1 / S2 (EN 12004 & IS 15477 Type 4TE S2)" },
      { label: "Recommended Tiles", value: "Mega-format sintered stone, translucent marble, slim porcelain" },
      { label: "Bed Thickness", value: "Up to 15 mm" },
      { label: "Coverage (3 mm bed)", value: "5.0 – 6.5 kg/m²" },
      { label: "Water Ratio", value: "~5.0 – 5.5 L per 20 kg bag" },
      { label: "Curing & Traffic", value: "Avoid traffic & water exposure for 24 hours" },
      { label: "Packaging & Shelf Life", value: "20 kg bag / 12 months in original packing" },
    ];
  }
  if (p.slug === "ardex-endura-epoxy") {
    return [
      { label: "Product Form", value: "Three-component reaction resin grout" },
      { label: "Components", value: "Part A (Resin) + Part B (Hardener) + Part C (Filler)" },
      { label: "Classification", value: "RG (EN 13888 Reaction Resin Grout)" },
      { label: "Antimicrobial Treatment", value: "Microban antimicrobial protection built-in" },
      { label: "Joint Width Range", value: "2 mm to 12 mm joint width" },
      { label: "Water Absorption", value: "Nil / 100% waterproof impermeable matrix" },
      { label: "Chemical Resistance", value: "Resistant to acids, alkalis, grease, household chemicals" },
      { label: "Packaging", value: "Commercial kit (Part A + B + C)" },
    ];
  }
  if (p.slug === "fosroc-auramix-400") {
    return [
      { label: "Polymer Base", value: "Polycarboxylate Ether (PCE) polymers" },
      { label: "Appearance", value: "Light brown free-flowing liquid" },
      { label: "Specific Gravity", value: "1.08 – 1.12 @ 27°C" },
      { label: "Chloride Content", value: "Nil (IS 456 / BS 5075)" },
      { label: "pH Value", value: "≥ 6.0" },
      { label: "Water Reduction", value: "Up to 30% or more vs control mix" },
      { label: "Standard Dosage", value: "0.5 – 1.5 litres per 100 kg cementitious binder" },
      { label: "Packaging", value: "250 kg industrial drum" },
    ];
  }
  if (p.slug === "berger-hs-epoxy-tile-grout") {
    return [
      { label: "Product Type", value: "Epoxy resin-based waterproof tile joint filler" },
      { label: "Components", value: "Multi-component kit (Part A Resin + Part B Hardener + Part C Filler)" },
      { label: "Mix Ratio", value: "Part A : Part B : Part C as pre-measured kit (100 : 50 by wt)" },
      { label: "Pot Life", value: "45 – 60 minutes @ 27°C" },
      { label: "Initial Traffic", value: "Light foot traffic after 24 hours" },
      { label: "Full Chemical Cure", value: "7 days @ 27°C" },
      { label: "Coverage", value: "0.8 – 1.5 kg/m² (varies with tile dimensions and joint width)" },
      { label: "Packaging", value: "5 kg commercial kit (also available in 2 kg kit)" },
    ];
  }

  const packsStr = p.packs.map((x) => x.size).join(", ");

  switch (p.family) {
    case "waterproofing":
      return [
        { label: "Form", value: p.category.toLowerCase().includes("liquid") ? "Liquid polymer" : "Powder / Liquid slurry" },
        { label: "Color", value: p.name.toLowerCase().includes("white") ? "White" : "Grey" },
        { label: "Specific Gravity", value: "1.10 – 1.30 g/cm³" },
        { label: "pH Value", value: "10 – 12" },
        { label: "Mixing Ratio", value: "1 : 1 to 1 : 2 by weight" },
        { label: "Pot Life", value: "30 – 45 mins @ 30°C" },
        { label: "Application Temp.", value: "+5°C to +35°C" },
        { label: "Packaging", value: packsStr || "Standard pack sizes" },
      ];
    case "repair":
      return [
        { label: "Form", value: "Pre-bagged grey powder" },
        { label: "Color", value: "Concrete Grey" },
        { label: "Wet Density", value: "2.10 – 2.25 g/cm³" },
        { label: "Compressive (28d)", value: "> 40 – 60 MPa" },
        { label: "Water Addition", value: "12% – 14% by weight" },
        { label: "Working Time", value: "~ 25 – 30 minutes" },
        { label: "Bond Strength", value: "> 1.5 MPa (slant shear)" },
        { label: "Packaging", value: packsStr || "Standard pack sizes" },
      ];
    case "bonding":
      return [
        { label: "Form", value: "Two-part liquid / epoxy paste" },
        { label: "Color", value: "Grey (mixed)" },
        { label: "Specific Gravity", value: "1.40 – 1.60 g/cm³" },
        { label: "Open Time", value: "4 to 6 hours @ 30°C" },
        { label: "Full Cure", value: "7 days @ 30°C" },
        { label: "Tensile Adhesion", value: "> 2.5 MPa (concrete failure)" },
        { label: "Packaging", value: packsStr || "Standard pack sizes" },
      ];
    case "admixtures":
      return [
        { label: "Form", value: "Free flowing dark liquid" },
        { label: "Specific Gravity", value: "1.18 – 1.25 @ 27°C" },
        { label: "Chloride Content", value: "Nil (BS 5075 / IS 9103)" },
        { label: "pH Value", value: "7.0 – 8.5" },
        { label: "Air Entrainment", value: "< 1.5% additional air" },
        { label: "Dosage", value: "0.5% – 2.0% by cement wt." },
        { label: "Packaging", value: packsStr || "Standard pack sizes" },
      ];
    case "grouts":
      return [
        { label: "Form", value: "Non-metallic grey powder" },
        { label: "Fresh Density", value: "2.20 – 2.28 g/cm³" },
        { label: "Compressive (1d)", value: "> 25 MPa" },
        { label: "Compressive (28d)", value: "> 65 MPa" },
        { label: "Expansion", value: "0.2% – 2.0% (controlled)" },
        { label: "Flow Cone", value: "25 – 35 seconds" },
        { label: "Packaging", value: packsStr || "Standard pack sizes" },
      ];
    default:
      return [
        { label: "Brand", value: p.brand },
        { label: "Category", value: p.category },
        { label: "Intended Use", value: p.purpose },
        { label: "Target Areas", value: p.areas },
        { label: "Packaging", value: packsStr || "Standard pack sizes" },
      ];
  }
}
