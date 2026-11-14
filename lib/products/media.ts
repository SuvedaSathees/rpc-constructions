/**
 * What RPC adds to a product beyond the price sheet: a photo, a written description and a video.
 * Keyed by the product's slug (the id on its card, e.g. "brushbond-rfx-grey").
 *
 *   photo        → public/images/products/<file>
 *   video        → public/videos/products/<file>   (an .mp4), or a YouTube link
 *
 * Example:
 *   "brushbond-rfx-grey": {
 *     image: "brushbond-rfx-grey.png",
 *     description: "Two coats by brush on a damp surface …",
 *     video: "brushbond-rfx-grey.mp4",
 *   },
 */
export interface ProductMedia {
  image?: string;
  backImage?: string;
  description?: string;
  video?: string;
  pdf?: string;
}

/** photos are the makers' own pack shots, from their product pages (Berger, Sika India) */
export const PRODUCT_MEDIA: Readonly<Record<string, ProductMedia>> = {
  "berger-hs-tile-adhesive": {
    image: "berger-hs-tile-adhesive.png",
    backImage: "berger-hs-tile-adhesive-back.png",
    video: "berger-hs-tile-adhesive.mp4",
    description: "High-quality cementitious tile adhesive designed for fixing ceramic and mosaic tiles on interior floors and walls.",
    pdf: "Tile Adhesive PDS.pdf",
  },
  "berger-hs-tile-adhesive-plus": {
    image: "berger-hs-tile-adhesive-plus.png",
    backImage: "berger-hs-tile-adhesive-plus-back.png",
    video: "berger-hs-tile-adhesive-plus.mp4",
    description: "Polymer-modified cementitious tile adhesive suitable for fixing vitrified tiles, porcelain, marble, and natural stones on floors and walls.",
    pdf: "Tile Adhesive Plus PDS.pdf",
  },
  "berger-hs-tile-bond-anti-slip-grey": {
    image: "berger-hs-tile-bond-anti-slip-grey.png",
    backImage: "berger-hs-tile-bond-anti-slip-grey-back.png",
    video: "berger-hs-tile-bond-anti-slip-grey.mp4",
    description: "High-performance polymer-modified cementitious tile adhesive with slip resistance (C2TE) for fixing ceramic, vitrified tiles and natural stones on interior and exterior walls and floors.",
    pdf: "Tile Bond Anti-Slip PDS.pdf",
  },
  "berger-hs-epoxy-tile-grout": {
    image: "berger-hs-epoxy-tile-grout.png",
    backImage: "berger-hs-epoxy-tile-grout-back.png",
    description: "High-performance three-component epoxy tile joint filler offering stain resistance, chemical resistance, and 100% waterproof hygienic finish.",
  },

  "sika-rustop": {
    image: "sika-rustop.png",
    backImage: "sika-rustop-back.png",
    video: "sika-rustop.mp4",
    description: "Two-component polymer-modified cementitious coating for the corrosion protection of steel reinforcement in concrete repair.",
  },
  "sika-rust-off-100": {
    image: "sika-rust-off-100.png",
    backImage: "sika-rust-off-100-back.png",
    description: "Single-component chemical rust remover and passivator for cleaning rusted steel reinforcement and metal surfaces prior to repair.",
  },
  "fosroc-cebex-100": {
    image: "fosroc-cebex-100.png",
    backImage: "fosroc-cebex-100-back.png",
    video: "fosroc-cebex-100.mp4",
    description: "Expanding and plasticising admixture for cementitious grouts where a reduced water/cement ratio and positive expansions are required. Suitable for bed grouting, duct grouting, non-shrink infilling and jointing.",
    pdf: "TDS-Cebex-100-India4.pdf",
  },
  "fosroc-nitobond-ep": {
    image: "fosroc-nitobond-ep.png",
    backImage: "fosroc-nitobond-ep-back.png",
    video: "fosroc-nitobond-ep.mp4",
    description: "Epoxy resin concrete bonding agent for bonding fresh wet cementitious materials to existing cementitious surfaces. Suitable for horizontal surfaces, or vertical surfaces where mortar or concrete can be supported by formwork. Its long open life makes it ideal for use with formwork or where additional steel reinforcement has to be fitted.",
    pdf: "TDS_Nitobond-EP_India.pdf",
  },
  "fosroc-brushbond-grey": {
    image: "fosroc-brushbond-grey.png",
    backImage: "fosroc-brushbond-grey-back.png",
    video: "fosroc-brushbond-grey.mp4",
    description: "Acrylic polymer modified elastomeric waterproofing membrane coating for concrete and masonry surfaces. Provides a seamless, durable waterproof barrier for water tanks, reservoirs, swimming pools, basements, toilets and wet areas.",
    pdf: "TDS-Brushbond-India5.pdf",
  },
  "fosroc-brushbond-rfx-grey": {
    image: "fosroc-brushbond-rfx-grey.png",
    description: "High performance elastomeric cementitious waterproof coating. Used for waterproofing and protecting exposed reinforced concrete structures against water ingress, acid gases, and chloride attack. Ideal for bathrooms, balconies, water tanks, basements, and wet areas.",
    pdf: "TDS-Brushbond-RFX-India5.pdf",
  },
  "fosroc-reebaklens-rr": {
    image: "fosroc-reebaklens-rr.png",
    backImage: "fosroc-reebaklens-rr-back.png",
    video: "fosroc-reebaklens-rr.mp4",
    description: "Cleaning and etching agent for removal of rust from steel reinforcement, concrete deposits on metal and pre-treatment of concrete surfaces.",
    pdf: "TDS-Reebaklens-RR-India3.pdf",
  },
  "fosroc-rendroc-rg": {
    image: "fosroc-rendroc-rg.png",
    backImage: "fosroc-rendroc-rg-back.png",
    video: "fosroc-rendroc-rg.mp4",
    description: "General purpose, non-shrink, cementitious micro-concrete for structural concrete repair and reinstatement of large sections such as columns, beams, and slabs.",
    pdf: "TDS-Renderoc-RG_India.pdf",
  },
  "fosroc-nitozinc-primer": {
    image: "fosroc-nitozinc-primer.png",
    backImage: "fosroc-nitozinc-primer-back.png",
    video: "fosroc-nitozinc-primer.mp4",
    description: "Two-component zinc-rich epoxy primer providing active electrochemical protection to exposed steel reinforcement in concrete repair.",
    pdf: "TDS-Nitozinc-Primer-India5.pdf",
  },
  "fosroc-conplast-sp430": {
    image: "fosroc-conplast-sp430.png",
    backImage: "fosroc-conplast-sp430-back.png",
    description: "Chloride-free superplasticizing admixture based on selected sulphonated naphthalene polymers. Provides substantial water reduction and high early and ultimate strengths.",
    pdf: "TDS-Conplast-SP430-India3.pdf",
  },
  "fosroc-concure-wb-white": {
    image: "fosroc-concure-wb-white.png",
    backImage: "fosroc-concure-wb-white-back.png",
    video: "fosroc-concure-wb-white.mp4",
    description: "Water-based wax emulsion curing compound that creates a temporary membrane over freshly placed concrete to prevent rapid moisture loss.",
    pdf: "TDS-Concure-WB-White-India6.pdf",
  },
  "fosroc-conplast-wl-xtra": {
    image: "fosroc-conplast-wl-xtra.png",
    backImage: "fosroc-conplast-wl-xtra-back.png",
    video: "fosroc-conplast-wl-xtra.mp4",
    description: "Liquid integral waterproofing admixture for concrete and mortar that reduces water permeability and plastic shrinkage cracking.",
    pdf: "TDS-Conplast-WL-Xtra-India4.pdf",
  },
  "fosroc-cebex-112": {
    image: "fosroc-cebex-112.png",
    video: "fosroc-cebex-112.mp4",
    description: "Plasticising and expanding admixture for cementitious grouts to improve fluidity, reduce water-cement ratio, and compensate for plastic settlement.",
    pdf: "TDS-Cebex-112-200326.pdf",
  },
  "fosroc-conplast-nc": {
    image: "fosroc-conplast-nc.png",
    description: "Chloride-free accelerating admixture formulated to accelerate setting time and promote rapid early strength development of concrete.",
    pdf: "TDS-Conplast-NC-India3.pdf",
  },
  "fosroc-conplast-sd110": {
    image: "fosroc-conplast-sd110.png",
    description: "Specialized admixture for semi-dry concrete mixes used in manufacture of concrete blocks, paving stones, and precast units to improve density and finish.",
    pdf: "TDS-Conplast-SD110-India4.pdf",
  },
  "fosroc-conbextra-gp2": {
    image: "fosroc-conbextra-gp2.png",
    description: "High-strength, non-shrink, free-flowing cementitious grout for precision grouting of heavy machinery bases, stanchion plates, anchor bolts, and precast elements.",
    pdf: "TDS-Conbextra-GP2-India7.pdf",
  },
  "fosroc-conplast-sp439": {
    image: "fosroc-conplast-sp439.png",
    backImage: "fosroc-conplast-sp439-back.png",
    description: "High performance superplasticizer for precast and ready-mix concrete requiring rapid workability retention and high early strength.",
    pdf: "TDS-Conplast-SP439-India2 (1).pdf",
  },
  "fosroc-conplast-sp430-g": {
    image: "fosroc-conplast-sp430-g.png",
    backImage: "fosroc-conplast-sp430-g-back.png",
    description: "Chloride-free superplasticizing admixture based on selected sulphonated naphthalene polymers formulated for enhanced pumpability and high early strength.",
  },
  "fosroc-conplast-sp430-g8": {
    image: "fosroc-conplast-sp430-g8.png",
    backImage: "fosroc-conplast-sp430-g8-back.png",
    description: "High performance superplasticizing admixture designed to provide significant water reduction and prolonged workability retention.",
    pdf: "TDS-Conplast-SP430-G8-India3.pdf",
  },
  "fosroc-auramix-400": {
    image: "fosroc-auramix-400.png",
    backImage: "fosroc-auramix-400-back.png",
    description: "High performance PCE-based superplasticizer for ready-mix concrete requiring exceptional slump retention and high durability.",
    pdf: "TDS-Auramix-400-India3.pdf",
  },
  "fosroc-auramix-350": {
    image: "fosroc-auramix-350.png",
    backImage: "fosroc-auramix-350-back.png",
    description: "High performance polycarboxylate ether based superplasticizer specifically designed to provide high water reduction and excellent slump retention in harsh climates.",
  },
  "fosroc-auramix-300-plus": {
    image: "fosroc-auramix-300-plus.png",
    description: "Next-generation polycarboxylate ether superplasticizer for high performance concrete with low water-binder ratio and rapid strength gain.",
    pdf: "TDS-Auramix-300-Plus-India4.pdf",
  },
  "fosroc-auramix-300": {
    image: "fosroc-auramix-300.png",
    backImage: "fosroc-auramix-300-back.png",
    description: "Versatile PCE superplasticizer for high grade ready-mix concrete offering high workability and extended slump retention.",
    pdf: "TDS-Auramix-300-India3.pdf",
  },
  "fosroc-auracast-102": {
    image: "fosroc-auracast-102.png",
    description: "High performance polycarboxylate ether based admixture specially formulated for precast concrete applications.",
    pdf: "TDS-Auracast-102-India4.pdf",
  },
  "fosroc-supercast-sw20": {
    image: "fosroc-supercast-sw20.png",
    video: "fosroc-supercast-sw20.mp4",
    description: "Hydrophilic swellable waterstop designed for integral sealing of construction joints in in-situ concrete structures.",
    pdf: "TDS-Supercast-SW20-India6.pdf",
  },
  "fosroc-reebaklens": {
    image: "fosroc-reebaklens.png",
    backImage: "fosroc-reebaklens-back.png",
    video: "fosroc-reebaklens.mp4",
    description: "Industrial acid-based cleaner and etching agent for removal of mortar smears, concrete stains, and light rust from surfaces.",
    pdf: "TDS-Reebaklens-India4.pdf",
  },
  "fosroc-nitobond-sbr": {
    image: "fosroc-nitobond-sbr.png",
    backImage: "fosroc-nitobond-sbr-back.png",
    description: "Modified SBR polymer bonding aid and mortar additive to improve adhesion, tensile strength, and water resistance of cementitious mixes.",
    pdf: "TDS-Nitobond-SBR-India5.pdf",
  },
  "fosroc-nitobond-sbr-latex": {
    image: "fosroc-nitobond-sbr-latex.png",
    backImage: "fosroc-nitobond-sbr-latex-back.png",
    video: "fosroc-nitobond-sbr-latex.mp4",
    description: "High performance styrene butadiene rubber latex emulsion for bonding slurry coats, waterproof renders, and repair screeds.",
    pdf: "TDS-Nitobond-SBR-Latex-India4.pdf",
  },
  "fosroc-nitobond-ar": {
    image: "fosroc-nitobond-ar.png",
    backImage: "fosroc-nitobond-ar-back.png",
    video: "fosroc-nitobond-ar.mp4",
    description: "Acrylic polymer bonding agent and admixture for improving adhesion, flexural strength, and durability of cement mortars.",
    pdf: "TDS-Nitobond-AR-India4.pdf",
  },
  "fosroc-nitoflor-hardtop-standard": {
    image: "fosroc-nitoflor-hardtop-standard.png",
    backImage: "fosroc-nitoflor-hardtop-standard-back.png",
    video: "fosroc-nitoflor-hardtop-standard.mp4",
    description: "Pre-blended non-metallic dry shake floor hardener providing high abrasion and wear resistance to monolithic concrete floors.",
    pdf: "TDS_Nitoflor-Hardtop-Standard_India-v2.pdf",
  },
  "fosroc-reebol-emulsion-xtra": {
    image: "fosroc-reebol-emulsion-xtra.png",
    description: "Water-dilutable shutter release agent emulsion providing clean, stain-free striking of all types of formwork and moulds.",
    pdf: "TDS-Reebol-Emulsion-Xtra-India3.pdf",
  },
  "fosroc-conplast-crystalline": {
    image: "fosroc-conplast-crystalline.png",
    backImage: "fosroc-conplast-crystalline-back.png",
    video: "fosroc-conplast-crystalline.mp4",
    description: "Integral crystalline waterproofing admixture that reacts with cement hydration products to form insoluble crystals sealing concrete capillaries.",
    pdf: "TDS-Conplast-Crystalline-India6.pdf",
  },
  "sika-seal-550": {
    image: "sika-seal-550.png",
    backImage: "sika-seal-550-back.png",
    video: "sika-seal-550.mp4",
    description: "Two-component, acrylic polymer-modified cementitious elastomeric waterproofing and protective coating for concrete and masonry.",
    pdf: "pds-sikatop-550seal.pdf",
  },
  "sika-seal-551": {
    image: "sika-seal-551.png",
    backImage: "sika-seal-551-back.png",
    video: "sika-seal-551.mp4",
    description: "Two-part, flexible cementitious slurry coating for waterproofing structures subject to positive and negative water pressure.",
    pdf: "pds-sikatop-551seal.pdf",
  },
  "sika-emaco-s348": {
    image: "sika-emaco-s348.png",
    backImage: "sika-emaco-s348-back.png",
    video: "sika-emaco-s348.mp4",
    description: "High-strength, shrinkage-compensated, fiber-reinforced structural repair mortar for structural concrete reinstatement.",
    pdf: "pds-sikaemaco-s-348.pdf",
  },
  "sika-bit-w1": {
    image: "sika-bit-w1.png",
    backImage: "sika-bit-w1-back.png",
    video: "sika-bit-w1.mp4",
    description: "High-performance cementitious adhesive mortar specially formulated for bonding SikaBit W-15 waterproofing membrane systems.",
    pdf: "PDS_SikaBitW-1_2020.06.29.pdf",
  },
  "sika-control-777": {
    image: "sika-control-777.png",
    backImage: "sika-control-777-back.png",
    video: "sika-control-777.mp4",
    description: "Specialized permeability-reducing and shrinkage-reducing admixture engineered to improve concrete durability and limit moisture ingress.",
    pdf: "pds-sikacontrol-777.pdf",
  },
  "sika-plast-5132-t": {
    image: "sika-plast-5132-t.png",
    backImage: "sika-plast-5132-t-back.png",
    video: "sika-plast-5132-t.mp4",
    description: "High performance superplasticizer and water-reducing admixture developed to provide extended slump retention and enhanced workability in concrete mixes.",
    pdf: "pds-sikaplast-5132t.pdf",
  },
  "sika-emaco-s346": {
    image: "sika-emaco-s346.png",
    backImage: "sika-emaco-s346-back.png",
    video: "sika-emaco-s346.mp4",
    description: "High-strength, shrinkage-compensated, flowable micro-concrete and precision structural repair mortar for restoration of large-volume concrete elements.",
  },
  "sika-mbrace-adh-2200-part-a": {
    image: "sika-mbrace-adh-2200-part-a.png",
    backImage: "sika-mbrace-adh-2200-part-a-back.png",
    video: "sika-mbrace-adh-2200-part-a.mp4",
    description: "High-strength, non-sag epoxy structural adhesive and putty Component A, engineered for structural bonding, leveling, and composite strengthening systems.",
  },
  "sika-mbrace-adh-2200-part-b": {
    image: "sika-mbrace-adh-2200-part-b.png",
    backImage: "sika-mbrace-adh-2200-part-b-back.png",
    video: "sika-mbrace-adh-2200-part-b.mp4",
    description: "High-strength epoxy structural adhesive and putty Component B (hardener), designed to mix with Part A for bonding and surface sealing applications.",
  },
  "sika-antisol-a4-white": {
    image: "sika-antisol-a4-white.png",
    backImage: "sika-antisol-a4-white-back.png",
    video: "sika-antisol-a4-white.mp4",
    description: "Aluminate-pigmented, resin-based liquid curing compound formulated to reduce moisture loss and solar heat absorption on freshly placed concrete surfaces.",
    pdf: "sika_antisol_a-4white.pdf",
  },
  "fosroc-nitobond-pc40": {
    image: "fosroc-nitobond-pc40.png",
    description: "Thixotropic epoxy adhesive designed for bonding precast concrete segments, external reinforcement plates, and general structural bonding.",
  },
  "fosroc-rendroc-sp40": {
    image: "fosroc-rendroc-sp40.png",
    backImage: "fosroc-rendroc-sp40-back.png",
    video: "fosroc-rendroc-sp40.mp4",
    description: "Shrinkage-controlled, polymer-modified, fibre-reinforced cementitious repair mortar for high-performance structural concrete reinstatement.",
  },
  "fosroc-nitocote-cm210-white": {
    image: "fosroc-nitocote-cm210-white.png",
    backImage: "fosroc-nitocote-cm210-white-back.png",
    video: "fosroc-nitocote-cm210-white.mp4",
    description: "Two-component polymer-modified elastomeric cementitious waterproof coating for concrete and masonry surfaces.",
  },
  "fosroc-rendroc-cs-white": {
    image: "fosroc-rendroc-cs-white.png",
    backImage: "fosroc-rendroc-cs-white-back.png",
    video: "fosroc-rendroc-cs-white.mp4",
    description: "Single-component cementitious polymer-modified crack sealer and finishing compound for internal and external masonry and concrete cracks.",
  },
  "fosroc-rendroc-plug": {
    image: "fosroc-rendroc-plug.png",
    backImage: "fosroc-rendroc-plug-back.png",
    video: "fosroc-rendroc-plug.mp4",
    description: "Rapid setting cementitious mortar designed for instant plugging and stopping of active water leaks in concrete and masonry structures.",
  },
  "sika-chapdur": {
    image: "sika-chapdur.png",
    backImage: "sika-chapdur-back.png",
    video: "sika-chapdur.mp4",
    description: "Non-metallic, pre-blended dry-shake mineral floor hardener providing superior abrasion, wear, and impact resistance for monolithic concrete floors.",
  },
  "sikadur-55-lp": {
    image: "sikadur-55-lp.png",
    backImage: "sikadur-55-lp-back.png",
    video: "sikadur-55-lp.mp4",
    description: "Two-component, low viscosity, solvent-free epoxy resin injection adhesive for structural crack repair and bonding applications.",
  },
  "sika-grout-214": {
    image: "sika-grout-214.png",
    backImage: "sika-grout-214-back.png",
    video: "sika-grout-214.mp4",
    description: "High-performance, non-shrink cementitious expanding grout for machine foundations, stanchion bases, anchor pockets, and precast concrete assembly.",
  },
  "sikaproof-312-hdpe": {
    image: "sikaproof-312-hdpe.png",
    backImage: "sikaproof-312-hdpe-back.png",
    video: "sikaproof-312-hdpe.mp4",
    description: "Pre-applied, fully bonded HDPE composite waterproofing membrane system for below-ground concrete basements and foundations.",
  },
  "sikaproof-sandwich-tape-100": {
    image: "sikaproof-sandwich-tape-100.png",
    backImage: "sikaproof-sandwich-tape-100-back.png",
    video: "sikaproof-sandwich-tape-100.mp4",
    description: "Double-sided self-adhesive tape designed for joint sealing, detailing, and bonding SikaProof membrane systems.",
  },
  "sikashield-w159": {
    image: "sikashield-w159.png",
    backImage: "sikashield-w159-back.png",
    video: "sikashield-w159.mp4",
    description: "Self-adhesive, cold-applied bituminous waterproofing membrane reinforced with polymer backing for below-ground and roofing waterproofing.",
  },
  "sikashield-w162": {
    image: "sikashield-w162.png",
    backImage: "sikashield-w162-back.png",
    video: "sikashield-w162.mp4",
    description: "1.5 mm self-adhesive, cold-applied, SBS-modified bituminous waterproofing sheet membrane with cross-laminated HDPE film and edge release strip.",
  },
  "sikaswell-a2010-bar": {
    image: "sikaswell-a2010-bar.png",
    backImage: "sikaswell-a2010-bar-back.png",
    video: "sikaswell-a2010-bar.mp4",
    description: "Acrylic swellable waterstop profile that expands in contact with water to seal construction joints in concrete structures.",
  },
  "renacon-renaplast-ready-mix-plaster": {
    image: "renacon-renaplast-ready-mix-plaster.png",
    backImage: "renacon-renaplast-ready-mix-plaster-back.png",
    video: "renacon-renaplast-ready-mix-plaster.mp4",
    description: "High-quality, factory-prepared cement-based ready mix plaster formulated with graded sand and performance additives for interior and exterior masonry plastering.",
  },
  "renacon-renabond-aac-joint-mortar-superior": {
    image: "renacon-renabond-aac-joint-mortar-superior.png",
    backImage: "renacon-renabond-aac-joint-mortar-superior-back.png",
    video: "renacon-renabond-aac-joint-mortar-superior.mp4",
    description: "Factory-prepared, polymer-modified thin-bed mortar specially formulated for high bond strength, fast workability, and durable joints in AAC block masonry.",
  },
"renacon-aac-block-3-inch": {
    image: "renacon-aac-block-3-inch.png",
    backImage: "renacon-aac-block-3-inch-back.png",
    video: "renacon-aac-block-3-inch.mp4",
    description: "High-precision autoclaved aerated concrete (AAC) block (3 inch thick) for lightweight, fire-resistant, and thermally insulated partition walls.",
  },
  "renacon-aac-block-4-inch": {
    image: "renacon-aac-block-4-inch.png",
    backImage: "renacon-aac-block-4-inch-back.png",
    video: "renacon-aac-block-4-inch.mp4",
    description: "High-precision autoclaved aerated concrete (AAC) block (4 inch thick) for internal non-load bearing walls, shaft enclosures, and partition masonry.",
  },
  "renacon-aac-block-6-inch": {
    image: "renacon-aac-block-6-inch.png",
    backImage: "renacon-aac-block-6-inch-back.png",
    video: "renacon-aac-block-6-inch.mp4",
    description: "High-precision autoclaved aerated concrete (AAC) block (6 inch thick) providing structural masonry strength, sound insulation, and thermal efficiency for exterior and interior walls.",
  },
  "renacon-aac-block-8-inch": {
    image: "renacon-aac-block-8-inch.png",
    backImage: "renacon-aac-block-8-inch-back.png",
    video: "renacon-aac-block-8-inch.mp4",
    description: "High-precision autoclaved aerated concrete (AAC) block (8 inch thick) designed for external perimeter walls, load-bearing infill masonry, and maximum acoustic and thermal performance.",
  },
  "renacon-aac-block-9-inch": {
    image: "renacon-aac-block-9-inch.png",
    description: "Heavy-duty autoclaved aerated concrete (AAC) block (9 inch thick) engineered for robust external walls, industrial envelopes, and maximum energy-saving masonry.",
  },
"fosroc-brushbond-roofguard-white": {
    image: "fosroc-brushbond-roofguard-white.png",
    backImage: "fosroc-brushbond-roofguard-white-back.png",
    video: "fosroc-brushbond-roofguard-white.mp4",
    description: "High-build elastomeric solar-reflective acrylic waterproofing coating designed for roofs, terraces, parapets, and exterior surfaces.",
  },
  "fosroc-brushbond-roofguard-terracotta": {
    image: "fosroc-brushbond-roofguard-terracotta.png",
    backImage: "fosroc-brushbond-roofguard-terracotta-back.png",
    video: "fosroc-brushbond-roofguard-terracotta.mp4",
    description: "High-build elastomeric acrylic waterproofing coating designed for roofs, terraces, parapets, and exterior surfaces.",
  },
  "fosroc-lokfix-s": {
    image: "fosroc-lokfix-s.png",
    description: "High strength polyester resin anchor grout for anchoring bolts, rebars, and dowels into concrete and masonry.",
  },
  "fosroc-lokfix-p": {
    image: "fosroc-lokfix-p.png",
    description: "High strength polyester resin anchor grout specially designed for horizontal and overhead anchoring applications.",
  },
"fosroc-auramix-200-41": {
    image: "fosroc-auramix-200-41.png",
    description: "High-performance water reducing admixture based on sulphonated naphthalene formaldehyde (SNF) for concrete and mortar.",
  },
  "fosroc-auramix-200-20": {
    image: "fosroc-auramix-200-20.png",
    description: "High-performance water reducing admixture based on sulphonated naphthalene formaldehyde (SNF) for concrete and mortar.",
  },
"fosroc-reebol-standard": {
    image: "fosroc-reebol-standard.png",
    description: "Ready-to-use chemical mould release agent for concrete. Forms a thin, uniform film on formwork surfaces to ensure easy and clean de-moulding.",
  },

  /* ---- 28 added products from Asian Paints, Dr. Fixit, STP, Penetron, ARDEX ENDURA, MYK Arment ---- */
  "asian-paints-smartcare-cemboost-200": {
    image: "asian-paints-smartcare-cemboost-200.png",
    backImage: "asian-paints-smartcare-cemboost-200-back.png",
    description: "Integral liquid waterproofing compound for cementitious mixes that reduces water penetration through the capillary network in mortars and concrete.",
  },
  "asian-paints-smartcare-vitalia-neo": {
    image: "asian-paints-smartcare-vitalia-neo.png",
    backImage: "asian-paints-smartcare-vitalia-neo-back.png",
    description: "Integral waterproofing liquid designed for cementitious mixes to reduce water penetration, enhance workability, and prevent efflorescence.",
  },
  "asian-paints-smartcare-hypershot-af-100": {
    image: "asian-paints-smartcare-hypershot-af-100.png",
    backImage: "asian-paints-smartcare-hypershot-af-100-back.png",
    description: "Alkali-free liquid shotcrete accelerator and industrial chemical admixture for rapid setting and early structural strength in sprayed concrete.",
  },
  "asian-paints-maximopast-px-100": {
    image: "asian-paints-maximopast-px-100.png",
    backImage: "asian-paints-maximopast-px-100-back.png",
    description: "High-range water-reducing concrete superplasticizer (PCE polymer additive) delivering high workability, reduced water demand, and increased compressive strength.",
  },
  "asian-paints-maximopast-px-200": {
    image: "asian-paints-maximopast-px-200.png",
    backImage: "asian-paints-maximopast-px-200-back.png",
    description: "High-performance PCE concrete admixture providing extended slump retention, high water reduction, and rapid early strength development for high-grade mixes.",
  },
  "asian-paints-maximopast-px-300": {
    image: "asian-paints-maximopast-px-300.png",
    backImage: "asian-paints-maximopast-px-300-back.png",
    description: "Advanced polycarboxylate ether (PCE) hyperplasticizer for ultra-high strength, self-compacting concrete (SCC), and mass infrastructure.",
  },
  "dr-fixit-pidiproof-lw": {
    image: "dr-fixit-pidiproof-lw.png",
    backImage: "dr-fixit-pidiproof-lw-back.png",
    description: "Integral liquid waterproofing compound for concrete and mortar that reduces water permeability, enhances workability, and controls shrinkage cracking.",
  },
  "stp-limited-tarfelt-lm": {
    image: "stp-limited-tarfelt-lm.png",
    backImage: "stp-limited-tarfelt-lm-back.png",
    description: "Ready-to-use liquid bituminous membrane forming a seamless, flexible waterproof barrier with excellent crack-bridging ability and high adhesion.",
  },
  "stp-limited-shalisbr-latex": {
    image: "stp-limited-shalisbr-latex.png",
    backImage: "stp-limited-shalisbr-latex-back.png",
    description: "Styrene-butadiene rubber (SBR) latex bonding agent and waterproofing admixture improving adhesion, flexibility, water resistance, and durability of repair mortars, plasters, and concrete.",
  },
  "stp-limited-shalitex-primer": {
    image: "stp-limited-shalitex-primer.png",
    backImage: "stp-limited-shalitex-primer-back.png",
    description: "Solvent-based penetrating bituminous primer conforming to IS 3384 (Part 1), sealing pores on concrete and masonry before waterproofing membrane application.",
  },
  "penetron-penetron-admix": {
    image: "penetron-penetron-admix.png",
    backImage: "penetron-penetron-admix-back.png",
    description: "Penetron Admix is a crystalline waterproofing admixture for concrete, which reacts with moisture to form insoluble crystals, reducing water permeability and protecting concrete for a longer life.",
  },
  "ardex-endura-bronze-star": {
    image: "ardex-endura-bronze-star.png",
    backImage: "ardex-endura-bronze-star-back.png",
    description: "Polymer-modified cementitious tile adhesive (IS 15477 Type 1T) designed for installation of ceramic tiles on interior floors and walls.",
  },
  "ardex-endura-silver-star": {
    image: "ardex-endura-silver-star.png",
    backImage: "ardex-endura-silver-star-back.png",
    description: "High-performance polymer-modified tile adhesive (IS 15477 Type 2T) for fixing ceramic, vitrified, and semi-vitreous tiles on interior/exterior surfaces.",
  },
  "ardex-endura-silver-star-plus": {
    image: "ardex-endura-silver-star-plus.png",
    backImage: "ardex-endura-silver-star-plus-back.png",
    description: "Advanced tile adhesive with extended open time (IS 15477 Type 2TE) for fixing vitrified tiles and natural stone on walls and heavy foot-traffic floors.",
  },
  "ardex-endura-gold-star": {
    image: "ardex-endura-gold-star.png",
    backImage: "ardex-endura-gold-star-back.png",
    description: "Premium flexible polymer-modified tile adhesive (IS 15477 Type 3TE) engineered for tile-on-tile renovation and exterior wall claddings.",
  },
  "ardex-endura-diamond-star": {
    image: "ardex-endura-diamond-star.png",
    backImage: "ardex-endura-diamond-star-back.png",
    description: "Extra-flexible polymer-modified tile adhesive (IS 15477 Type 3TE S1) formulated for large format porcelain slabs and external vertical claddings.",
  },
  "ardex-endura-white-star": {
    image: "ardex-endura-white-star.png",
    backImage: "ardex-endura-white-star-back.png",
    description: "White cement-based polymer tile adhesive (IS 15477 Type 2T) specially formulated for translucent marble, mosaics, and light-colored stone.",
  },
  "ardex-endura-platinum-star": {
    image: "ardex-endura-platinum-star.png",
    backImage: "ardex-endura-platinum-star-back.png",
    description: "Deformable premium tile adhesive (IS 15477 Type 4TE S1) engineered for slim porcelain slabs, glass tiles, and exterior facade claddings.",
  },
  "ardex-endura-platinum-star-plus": {
    image: "ardex-endura-platinum-star-plus.png",
    backImage: "ardex-endura-platinum-star-plus-back.png",
    description: "Highly deformable polymer adhesive (IS 15477 Type 4TE S2) with maximum flexibility for mega-format sintered stone and vibration-prone substrates.",
  },
  "ardex-endura-epoxy": {
    image: "ardex-endura-epoxy.png",
    backImage: "ardex-endura-epoxy-back.png",
    description: "Three-component 100% solid epoxy resin grout for stain-free, chemical-resistant, and hygienic joint filling in ceramic and vitrified tiles.",
  },
  "myk-arment-aquaarm-proof-wp10": {
    image: "myk-arment-aquaarm-proof-wp10.png",
    backImage: "myk-arment-aquaarm-proof-wp10-back.png",
    description: "High-performance integral waterproofing liquid for cementitious systems conforming to IS 2645:2008. Reduces water-cement ratio, improves workability, minimizes capillary porosity, and enhances concrete durability.",
  },
  "myk-arment-armix-ellecrete-p-101": {
    image: "myk-arment-armix-ellecrete-p-101.png",
    backImage: "myk-arment-armix-ellecrete-p-101-back.png",
    description: "Normal water-reducing plasticizer and set retarder improving pumpability, workability, and surface finish of ready-mixed concrete.",
  },
  "myk-arment-armix-ae": {
    image: "myk-arment-armix-ae.png",
    backImage: "myk-arment-armix-ae-back.png",
    description: "Synthetic air-entraining concrete admixture providing controlled air voids to enhance durability and freeze-thaw resistance in pavements and dams.",
  },
  "myk-arment-armix-emmecrete-sp-111": {
    image: "myk-arment-armix-emmecrete-sp-111.png",
    backImage: "myk-arment-armix-emmecrete-sp-111-back.png",
    description: "Sulphonated naphthalene formaldehyde (SNF) superplasticizer delivering high early strength, high workability, and rapid turnaround in precast concrete.",
  },
  "myk-arment-armix-hyyecrete-sp-200": {
    image: "myk-arment-armix-hyyecrete-sp-200.png",
    backImage: "myk-arment-armix-hyyecrete-sp-200-back.png",
    description: "High-performance polycarboxylate ether (PCE) superplasticizer for self-compacting, high-grade, and heavily reinforced concrete structures.",
  },
  "myk-arment-armix-cure-wb": {
    image: "myk-arment-armix-cure-wb.png",
    backImage: "myk-arment-armix-cure-wb-back.png",
    description: "Water-based wax/resin emulsion membrane curing compound preventing moisture loss during early hydration in concrete slabs and pavements.",
  },
  "myk-arment-armix-form-fr-1": {
    image: "myk-arment-armix-form-fr-1.png",
    backImage: "myk-arment-armix-form-fr-1-back.png",
    description: "Solvent-based chemical mould release agent formulated to deliver smooth, stain-free architectural concrete and easy formwork release.",
  },
  "myk-arment-armix-form-fr-2": {
    image: "myk-arment-armix-form-fr-2.png",
    backImage: "myk-arment-armix-form-fr-2-back.png",
    description: "Water-dilutable concentrate mould release agent providing clean strike and extended life for steel, plywood, and plastic formwork.",
  },
  "fosroc-conplast-sp430-es2": {
    image: "fosroc-conplast-sp430-es2.png",
    backImage: "fosroc-conplast-sp430-es2-back.png",
    description: "High performance superplasticizer based on SNF polymer technology engineered for water reduction, improved workability, and high early strength.",
    pdf: "TDS-Conplast-SP430-India3.pdf",
  },
  "fosroc-moulding-oil": {
    image: "fosroc-moulding-oil.png",
    backImage: "fosroc-moulding-oil-back.png",
    description: "Ready-to-use form-release agent formulated for moulds and formwork to achieve effortless striking and an architectural, blemish-free concrete finish.",
  },
  "cci-novaplast-8200": {
    image: "cci-novaplast-8200.png",
    backImage: "cci-novaplast-8200-back.png",
    description: "High performance superplasticising admixture for concrete and mortar, substantially reducing water demand while enhancing workability and strength development.",
  },
  "cci-novamix-2000": {
    image: "cci-novamix-2000.png",
    backImage: "cci-novamix-2000-back.png",
    description: "High performance concrete admixture engineered for significant water reduction, extended slump retention, and uniform concrete durability.",
  },
  "cci-novamix-4000": {
    image: "cci-novamix-4000.png",
    backImage: "cci-novamix-4000-back.png",
    description: "Advanced high-performance concrete admixture delivering superior water reduction, long slump life, and elevated early compressive strength.",
  },
  "cci-novacast-pv50": {
    image: "cci-novacast-pv50.png",
    backImage: "cci-novacast-pv50-back.png",
    description: "High-performance precast concrete admixture engineered for accelerated early strength gain, rapid demoulding, and crisp surface finish.",
  },
  "cci-novatech-aea": {
    image: "cci-novatech-aea.png",
    backImage: "cci-novatech-aea-back.png",
    description: "Air entraining admixture introducing micro-air bubbles to dramatically enhance freeze-thaw durability, cohesion, and pumpability in concrete.",
  },
  "cci-novacure-wb": {
    image: "cci-novacure-wb.png",
    backImage: "cci-novacure-wb-back.png",
    description: "Water-based wax emulsion concrete curing compound forming a non-penetrating film to reduce rapid surface moisture loss and shrinkage cracking.",
  },
  "cci-neo-bond-sbr": {
    image: "cci-neo-bond-sbr.png",
    backImage: "cci-neo-bond-sbr-back.png",
    description: "High performance SBR latex bonding agent and polymer modifier for waterproof screeds, structural repair mortars, and high-adhesion slurry coats.",
  },
  "cci-neotop-2": {
    image: "cci-neotop-2.png",
    backImage: "cci-neotop-2-back.png",
    description: "Specialized construction application chemical system formulated for durable protective topping, wear resistance, and structural integrity.",
  },
};

export const mediaOf = (slug: string): ProductMedia => PRODUCT_MEDIA[slug] ?? {};
export const imageSrc = (m: ProductMedia) => (m.image ? `/images/products/${m.image}` : "");
export const backImageSrc = (m: ProductMedia) => {
  if (m.backImage) return `/images/products/${m.backImage}`;
  if (!m.image) return "";
  const dot = m.image.lastIndexOf(".");
  if (dot === -1) return "";
  const base = m.image.slice(0, dot);
  const ext = m.image.slice(dot);
  return `/images/products/${base}-back${ext}`;
};
export const videoSrc = (m: ProductMedia) => (!m.video ? "" : /^https?:\/\//.test(m.video) ? m.video : `/videos/products/${m.video}`);
export const pdfSrc = (m: ProductMedia) => (!m.pdf ? "" : /^https?:\/\//.test(m.pdf) ? m.pdf : `/docs/${m.pdf}`);
