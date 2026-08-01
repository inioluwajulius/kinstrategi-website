const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

const renames = [
  { oldPath: 'About and Founder Image', newPath: 'about' },
  { oldPath: 'about/Founder Image.jpg', newPath: 'about/founder-image.jpg' },
  
  { oldPath: 'Brands we worked with', newPath: 'brands' },
  { oldPath: 'brands/Ay Subz.png', newPath: 'brands/ay-subz.png' },
  { oldPath: 'brands/BME.png', newPath: 'brands/bme.png' },
  { oldPath: 'brands/ÀJỌPAW Logo .png', newPath: 'brands/ajopaw-logo.png' },
  { oldPath: 'brands/Listening Party x RIA x Jameson Yard Collaboration', newPath: 'brands/jameson' },
  { oldPath: 'brands/Venus Socials - All women halloween party', newPath: 'brands/venus' },
  { oldPath: 'brands/ÀJỌPÀW  First Pre-Launch Brand Campaign', newPath: 'brands/ajopaw-campaign' },
  
  { oldPath: 'Metrics', newPath: 'metrics' },
  { oldPath: 'metrics/Coffee and Cream Analytics Shots Carousel Instagram Post Template', newPath: 'metrics/coffee' },
  { oldPath: 'metrics/Wicked Ties Analytics Shots Carousel Instagram Post Template (1)', newPath: 'metrics/wicked' },
  
  { oldPath: 'Testimonials', newPath: 'testimonials' },
  
  { oldPath: "KinStrategi's Navigator Character", newPath: 'navigator' },
  { oldPath: 'navigator/Ademaris - Greeting.png', newPath: 'navigator/ademaris-greeting.png' }
];

for (let rule of renames) {
  const fullOld = path.join(assetsDir, rule.oldPath);
  const fullNew = path.join(assetsDir, rule.newPath);
  if (fs.existsSync(fullOld)) {
     try {
       fs.renameSync(fullOld, fullNew);
       console.log('Renamed', rule.oldPath, '->', rule.newPath);
     } catch (e) {
       console.error('Failed', rule.oldPath, e.message);
     }
  } else {
     console.log('Not found:', rule.oldPath);
  }
}
