const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180
};

async function generateFavicons() {
  const sourceImage = path.join(__dirname, '../public/images/logo/logo-without-words.png');
  const outputDir = path.join(__dirname, '../public');

  // Generate PNG favicons
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(sourceImage)
      .resize(size, size)
      .toFile(path.join(outputDir, filename));
    console.log(`Generated ${filename}`);
  }

  // Generate ICO file (16x16 and 32x32 combined)
  await sharp(sourceImage)
    .resize(32, 32)
    .toFile(path.join(outputDir, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // Generate SVG for Safari pinned tabs
  await sharp(sourceImage)
    .resize(512, 512)
    .toFile(path.join(outputDir, 'safari-pinned-tab.svg'));
  console.log('Generated safari-pinned-tab.svg');
}

generateFavicons().catch(console.error); 