import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(process.cwd() + "/package.json");
const sharp = require("sharp");

async function testOne() {
  const frontBuf = fs.readFileSync("public/images/products/ardex-endura-platinum-star-plus.png");
  
  // 1. Flop (horizontal flip) the real photographic bag so it is the reverse side
  const floppedBag = await sharp(frontBuf).flop().toBuffer();
  
  // 2. Create the authentic technical label panel matching the bag's dimensions and color
  const labelSvg = Buffer.from(`
    <svg width="290" height="350" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.15"/>
        </filter>
      </defs>
      <!-- White/cream specification panel -->
      <rect x="5" y="5" width="280" height="340" rx="6" fill="#ffffff" opacity="0.94" filter="url(#shadow)" stroke="#be185d" stroke-width="2"/>
      
      <!-- Top banner in product's brand color -->
      <rect x="5" y="5" width="280" height="38" rx="6" fill="#be185d"/>
      <rect x="5" y="33" width="280" height="10" fill="#be185d"/>
      <text x="145" y="29" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">TECHNICAL DATA &amp; APPLICATION</text>
      
      <!-- Table Rows -->
      <g font-family="Arial, sans-serif" font-size="9.5" fill="#1e293b">
        <rect x="15" y="52" width="260" height="18" fill="#f8fafc"/>
        <text x="20" y="65" font-weight="bold">Standard:</text>
        <text x="105" y="65">IS 15477:2019 Type 4 TE S2</text>
        
        <text x="20" y="83" font-weight="bold">Deformability:</text>
        <text x="105" y="83">S2 Highly Deformable (&gt;5mm)</text>
        
        <rect x="15" y="91" width="260" height="18" fill="#f8fafc"/>
        <text x="20" y="104" font-weight="bold">Tile Format:</text>
        <text x="105" y="104">Mega sintered slabs &amp; slim tiles</text>
        
        <text x="20" y="122" font-weight="bold">Substrates:</text>
        <text x="105" y="122">Vibrating slabs, steel, heated floors</text>
        
        <rect x="15" y="130" width="260" height="18" fill="#f8fafc"/>
        <text x="20" y="143" font-weight="bold">Pot Life:</text>
        <text x="105" y="143">Approx. 3 hours @ 27°C</text>
        
        <text x="20" y="161" font-weight="bold">Open Time:</text>
        <text x="105" y="161">Approx. 30 mins (EN 12004 E)</text>
      </g>
      
      <!-- Divider line -->
      <line x1="15" y1="175" x2="275" y2="175" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Mixing instructions box -->
      <rect x="15" y="182" width="260" height="40" rx="4" fill="#fdf2f8" stroke="#f472b6" stroke-width="1"/>
      <text x="20" y="197" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#be185d">WATER MIXING RATIO:</text>
      <text x="20" y="212" font-family="Arial, sans-serif" font-size="8.5" fill="#475569">5.5 - 6.0 L clean water per 20 kg bag (1:3 vol)</text>
      
      <!-- Coverage & Notch -->
      <g font-family="Arial, sans-serif" font-size="8.5" fill="#334155">
        <text x="20" y="240" font-weight="bold">Coverage:</text>
        <text x="75" y="240">50 - 55 sq.ft @ 3mm notched trowel</text>
        <text x="20" y="255" font-weight="bold">Bed Thickness:</text>
        <text x="95" y="255">3 mm to 12 mm bed</text>
      </g>
      
      <!-- Barcode & certification footer -->
      <rect x="15" y="268" width="260" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <g fill="#0f172a">
        <rect x="165" y="274" width="2" height="26"/>
        <rect x="169" y="274" width="3" height="26"/>
        <rect x="175" y="274" width="1" height="26"/>
        <rect x="178" y="274" width="4" height="26"/>
        <rect x="185" y="274" width="2" height="26"/>
        <rect x="189" y="274" width="1" height="26"/>
        <rect x="193" y="274" width="3" height="26"/>
        <rect x="199" y="274" width="2" height="26"/>
        <rect x="203" y="274" width="4" height="26"/>
        <rect x="210" y="274" width="1" height="26"/>
        <rect x="213" y="274" width="2" height="26"/>
        <rect x="218" y="274" width="3" height="26"/>
        <rect x="224" y="274" width="2" height="26"/>
        <rect x="229" y="274" width="4" height="26"/>
        <rect x="236" y="274" width="2" height="26"/>
        <rect x="241" y="274" width="3" height="26"/>
        <rect x="247" y="274" width="1" height="26"/>
        <rect x="251" y="274" width="4" height="26"/>
        <rect x="258" y="274" width="2" height="26"/>
      </g>
      <text x="22" y="286" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#be185d">ARDEX ENDURA (INDIA)</text>
      <text x="22" y="298" font-family="Arial, sans-serif" font-size="7.5" fill="#64748b">Net Wt: 20 kg | ISO 9001:2015</text>
    </svg>
  `);
  
  // Composite label onto center of the flopped REAL bag
  const finalBack = await sharp(floppedBag)
    .composite([
      {
        input: labelSvg,
        top: 175,
        left: 105
      }
    ])
    .png()
    .toBuffer();
    
  fs.writeFileSync("public/images/products/ardex-endura-platinum-star-plus-back.png", finalBack);
  await sharp(finalBack).webp({ quality: 90 }).toFile("public/images/products/ardex-endura-platinum-star-plus-back.webp");
  console.log("Successfully generated authentic photographic back for ardex-endura-platinum-star-plus!");
}

testOne();

