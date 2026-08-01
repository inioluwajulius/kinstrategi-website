const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const destDir = path.join(__dirname, 'src', 'safe-assets');

function copyIfExist(src, dest) {
    const fullSrc = path.join(assetsDir, src);
    const fullDest = path.join(destDir, dest);
    if (fs.existsSync(fullSrc)) {
        fs.mkdirSync(path.dirname(fullDest), { recursive: true });
        fs.copyFileSync(fullSrc, fullDest);
        console.log('Copied', src);
    } else {
        console.error('Missing source file:', src);
    }
}

copyIfExist('about/founder-image.jpg', 'about/founder.jpg');
copyIfExist('about/Founder Image.jpg', 'about/founder.jpg');
copyIfExist('Metrics/Coffee and Cream Analytics Shots Carousel Instagram Post Template/1.png', 'metrics/coffee.png');
copyIfExist('Metrics/Wicked Ties Analytics Shots Carousel Instagram Post Template (1)/1.png', 'metrics/wicked.png');
copyIfExist('KinStrategi_s Navigator Character/Ademaris - Greeting.png', 'navigator/ademaris.png');
copyIfExist('testimonials/IMG_1746.jpg', 'testimonials/test1.jpg');
copyIfExist('testimonials/IMG_1747.jpg', 'testimonials/test2.jpg');
copyIfExist('testimonials/IMG_1748.jpg', 'testimonials/test3.jpg');

console.log('Final copy done.');
