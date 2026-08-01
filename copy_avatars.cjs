const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'assets', 'KinStrategi_s Navigator Character');
const destDir = path.join(__dirname, 'src', 'safe-assets', 'navigator');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const map = {
  'Ademaris - Greeting.png': 'ademaris-greeting.png',
  'Ademaris - The Navigator Character.png': 'ademaris-navigator.png',
  'Ademaris Curious.png': 'ademaris-curious.png',
  'Ademaris Excited.png': 'ademaris-excited.png',
  'Ademaris Friendly Smile.png': 'ademaris-smile.png',
  'Ademaris Guiding.png': 'ademaris-guiding.png'
};

for (const [src, dest] of Object.entries(map)) {
  try {
    fs.copyFileSync(path.join(srcDir, src), path.join(destDir, dest));
    console.log(`Copied ${src} -> ${dest}`);
  } catch (err) {
    console.error(`Failed to copy ${src}:`, err);
  }
}
