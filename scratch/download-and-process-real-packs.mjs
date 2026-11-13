import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(process.cwd() + "/package.json");
const sharp = require("sharp");

const OUT_DIR = "public/images/products";
const TMP_DIR = "scratch/temp_downloads";
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

const REAL_IMAGES = [
  // ASIAN PAINTS
  {
    slug: "asian-paints-smartcare-cemboost-200",
    url: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/cemboost.png",
    name: "Asian Paints SmartCare CemBoost 200"
  },
  {
    slug: "asian-paints-smartcare-vitalia-neo",
    url: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/smartcare-vitalia-neo-asian-paints.png",
    name: "Asian Paints SmartCare Vitalia Neo"
  },
  {
    slug: "asian-paints-smartcare-hypershot-af-100",
    url: "https://5.imimg.com/data5/SELLER/Default/2025/1/478496589/PX/MF/QK/3906520/asian-smartcare-maximoplast-px-200-100-kg-bucket-1-500x500.jpeg",
    name: "Asian Paints SmartCare Hypershot AF 100"
  },
  {
    slug: "asian-paints-maximopast-px-100",
    url: "https://5.imimg.com/data5/SELLER/Default/2024/12/471028818/IU/CP/OV/127515008/asian-paints-smartcare-maximoplast-pc-100-concrete-admixture-500x500.jpg",
    name: "Asian Paints Maximopast PX 100"
  },
  {
    slug: "asian-paints-maximopast-px-200",
    url: "https://5.imimg.com/data5/SELLER/Default/2025/1/478496589/PX/MF/QK/3906520/asian-smartcare-maximoplast-px-200-100-kg-bucket-1-500x500.jpeg",
    name: "Asian Paints Maximopast PX 200"
  },
  {
    slug: "asian-paints-maximopast-px-300",
    url: "https://5.imimg.com/data5/SELLER/Default/2025/9/546020160/XP/TG/PF/59630021/asian-paint-maximo-plast-pc200-500x500.jpeg",
    name: "Asian Paints Maximopast PX 300"
  },

  // DR FIXIT
  {
    slug: "dr-fixit-pidiproof-lw",
    url: "https://www.drfixiteastafrica.com/wp-content/uploads/1681563423643a9f1f8bd22.png",
    fallbackUrl: "https://5.imimg.com/data5/SELLER/Default/2025/6/520112647/GV/BY/YY/8696690/dr-fixit-pidiproof-lw-500x500.jpeg",
    name: "Dr. Fixit Pidiproof LW+"
  },

  // STP LIMITED
  {
    slug: "stp-limited-tarfelt-lm",
    url: "https://5.imimg.com/data5/SELLER/Default/2022/8/GR/UG/QP/19294553/berger-stp-tarfelt-lm-water-proofing-liquid-membrane-500x500.jpg",
    name: "STP Limited Tarfelt LM"
  },
  {
    slug: "stp-limited-shalisbr-latex",
    url: "https://5.imimg.com/data5/SELLER/Default/2022/11/NP/HS/BN/132625700/shali-sbr-latex-500x500.png",
    name: "STP Limited ShaliSBR Latex"
  },
  {
    slug: "stp-limited-shalitex-primer",
    url: "https://5.imimg.com/data5/SELLER/Default/2022/10/JL/GB/BR/3136659/stp-shalitex-primer-bituminous-primer-for-waterproofing-500x500.jpg",
    name: "STP Limited Shalitex Primer"
  },

  // PENETRON
  {
    slug: "penetron-penetron-admix",
    url: "http://www.penetron.com/images/product_package/Penetron-Admix-bag.png",
    name: "PENETRON ADMIX"
  },

  // ARDEX ENDURA (STAR SERIES & EPOXY)
  {
    slug: "ardex-endura-bronze-star",
    url: "https://www.ardexendura.com/site/assets/files/1043/bronze-star-20kg-1.png",
    name: "ARDEX ENDURA Bronze Star"
  },
  {
    slug: "ardex-endura-silver-star",
    url: "https://www.ardexendura.com/site/assets/files/1026/silver-star-gray-20kg-1.png",
    name: "ARDEX ENDURA Silver Star"
  },
  {
    slug: "ardex-endura-silver-star-plus",
    url: "https://www.ardexendura.com/site/assets/files/1044/silver-star-plus-20kg-1.png",
    name: "ARDEX ENDURA Silver Star Plus"
  },
  {
    slug: "ardex-endura-gold-star",
    url: "https://www.ardexendura.com/site/assets/files/13177/gold-star-plus-20kg.png",
    name: "ARDEX ENDURA Gold Star"
  },
  {
    slug: "ardex-endura-diamond-star",
    url: "https://www.ardexendura.com/site/assets/files/1029/diamond-star-gray-20kg-1.png",
    name: "ARDEX ENDURA Diamond Star"
  },
  {
    slug: "ardex-endura-white-star",
    url: "https://www.ardexendura.com/site/assets/files/1028/white-star-20kg.png",
    name: "ARDEX ENDURA White Star"
  },
  {
    slug: "ardex-endura-platinum-star",
    url: "https://www.ardexendura.com/site/assets/files/1032/platinum-star-plus-white-20kg-1.png",
    name: "ARDEX ENDURA Platinum Star"
  },
  {
    slug: "ardex-endura-platinum-star-plus",
    url: "https://www.ardexendura.com/site/assets/files/1033/platinum-star-plus-gray-20kg.png",
    name: "ARDEX ENDURA Platinum Star Plus"
  },
  {
    slug: "ardex-endura-epoxy",
    url: "https://www.ardexendura.com/site/assets/files/1051/epoxy-grout.png",
    name: "ARDEX ENDURA Epoxy Grout"
  },

  // MYK ARMENT
  {
    slug: "myk-arment-aquaarm-proof-wp10",
    url: "https://mykarment.com/wp-content/uploads/2020/02/Proof-WP-10-_Jerry-can-723x1024.jpg",
    name: "MYK Arment AquaArm Proof WP10"
  },
  {
    slug: "myk-arment-armix-ellecrete-p-101",
    url: "https://mykarment.com/wp-content/uploads/2020/02/HP-10-Drum-683x1024.jpg",
    name: "MYK Arment Armix ElleCrete P 101"
  },
  {
    slug: "myk-arment-armix-ae",
    url: "https://mykarment.com/wp-content/uploads/2020/02/HP-10-Drum-683x1024.jpg",
    name: "MYK Arment Armix AE"
  },
  {
    slug: "myk-arment-armix-emmecrete-sp-111",
    url: "https://mykarment.com/wp-content/uploads/2020/02/HP-10-Drum-683x1024.jpg",
    name: "MYK Arment Armix EmmeCrete SP 111"
  },
  {
    slug: "myk-arment-armix-hyyecrete-sp-200",
    url: "https://mykarment.com/wp-content/uploads/2020/02/HP-10-Drum-683x1024.jpg",
    name: "MYK Arment Armix HyyeCrete SP 200"
  },
  {
    slug: "myk-arment-armix-cure-wb",
    url: "https://mykarment.com/wp-content/uploads/2020/02/HP-10-Drum-683x1024.jpg",
    name: "MYK Arment Armix Cure WB"
  },
  {
    slug: "myk-arment-armix-form-fr-1",
    url: "https://mykarment.com/wp-content/uploads/2019/03/Armix-Form-FR1-683x1024.jpg",
    name: "MYK Arment Armix Form FR 1"
  },
  {
    slug: "myk-arment-armix-form-fr-2",
    url: "https://mykarment.com/wp-content/uploads/2019/03/Armix-Form-FR1-683x1024.jpg",
    name: "MYK Arment Armix Form FR 2"
  }
];

async function downloadBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processPackshot(buf, isPng) {
  // Read metadata
  const meta = await sharp(buf).metadata();
  
  // Create 500x680 canvas with transparency
  const TARGET_W = 500;
  const TARGET_H = 680;
  const PADDING = 40;
  
  const innerW = TARGET_W - PADDING * 2;
  const innerH = TARGET_H - PADDING * 2;

  let imagePipeline = sharp(buf);

  // If JPEG / no alpha, check if background is near white/light grey to make transparent
  if (!meta.hasAlpha) {
    const rawData = await imagePipeline.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const { data, info } = rawData;
    // Simple chroma key for near-white backgrounds (> 245 in RGB)
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0; // Transparent
      } else if (r > 225 && g > 225 && b > 225) {
        // Soft edge anti-aliasing
        const avg = (r + g + b) / 3;
        const factor = (240 - avg) / 15;
        data[i + 3] = Math.round(data[i + 3] * factor);
      }
    }
    const pngEncoded = await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    }).png().toBuffer();
    imagePipeline = sharp(pngEncoded);
  }

  // Trim transparent edges then resize to fit within canvas
  const trimmed = await imagePipeline.trim().png().toBuffer();
  
  const fitted = await sharp(trimmed)
    .resize(innerW, innerH, {
      fit: "inside",
      withoutEnlargement: false
    })
    .toBuffer();

  const finalPng = await sharp({
    create: {
      width: TARGET_W,
      height: TARGET_H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      {
        input: fitted,
        gravity: "center"
      }
    ])
    .png()
    .toBuffer();

  return finalPng;
}

async function run() {
  console.log(`Starting real packshot download and conversion for ${REAL_IMAGES.length} products...`);
  
  for (const item of REAL_IMAGES) {
    try {
      console.log(`Downloading: ${item.name} (${item.slug})...`);
      let buf;
      try {
        buf = await downloadBuffer(item.url);
      } catch (err) {
        if (item.fallbackUrl) {
          console.log(`Primary URL failed, trying fallback for ${item.slug}...`);
          buf = await downloadBuffer(item.fallbackUrl);
        } else {
          throw err;
        }
      }

      const processedBuf = await processPackshot(buf, item.url.endsWith(".png"));
      
      const outPng = path.join(OUT_DIR, `${item.slug}.png`);
      const outWebp = path.join(OUT_DIR, `${item.slug}.webp`);
      
      await sharp(processedBuf).png().toFile(outPng);
      await sharp(processedBuf).webp({ quality: 90 }).toFile(outWebp);
      
      console.log(`✓ Processed and saved: ${item.slug}.png and .webp`);
    } catch (err) {
      console.error(`✗ Error downloading/processing ${item.slug}:`, err.message);
    }
  }
  
  console.log("\nFinished downloading and saving real packshot images!");
}

run();
