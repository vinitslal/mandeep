// Generate PNG icons from SVG using Node.js (no dependencies needed)
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, 'icons');

if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir);

sizes.forEach(size => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#19e65e"/>
      <stop offset="100%" stop-color="#0ea641"/>
    </radialGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size*0.2}" fill="url(#bg)"/>
  <rect x="${size*0.44}" y="${size*0.2}" width="${size*0.12}" height="${size*0.38}" rx="${size*0.03}" fill="white"/>
  <rect x="${size*0.2}" y="${size*0.32}" width="${size*0.38}" height="${size*0.12}" rx="${size*0.03}" fill="white" opacity="0.95"/>
  <text x="${size*0.5}" y="${size*0.78}" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="${size*0.18}" fill="white" opacity="0.9">M</text>
</svg>`;

  fs.writeFileSync(path.join(iconsDir, `icon-${size}.svg`), svg);
  console.log(`Created icon-${size}.svg`);
});

// Also create a simple favicon
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#19e65e"/>
  <rect x="14" y="6" width="4" height="13" rx="1" fill="white"/>
  <rect x="6" y="10" width="13" height="4" rx="1" fill="white" opacity="0.95"/>
  <text x="16" y="26" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="6" fill="white" opacity="0.9">M</text>
</svg>`;
fs.writeFileSync(path.join(__dirname, 'favicon.svg'), favicon);
console.log('Created favicon.svg');
console.log('Done! All icons generated.');