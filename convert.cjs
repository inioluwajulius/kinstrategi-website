const fs = require('fs');
const { promisify } = require('util');
const heicConvert = require('heic-convert');

(async () => {
  try {
    const inputBuffer = fs.readFileSync('src/safe-assets/about/founder.jpg');
    console.log('Converting HEIC to JPEG...');
    const outputBuffer = await heicConvert({
      buffer: inputBuffer, // the HEIC file buffer
      format: 'JPEG',      // output format
      quality: 1           // the jpeg compression quality, between 0 and 1
    });
    fs.writeFileSync('src/safe-assets/about/founder.jpg', outputBuffer);
    console.log('Conversion successful!');
  } catch (err) {
    console.error('Error during conversion:', err);
  }
})();
