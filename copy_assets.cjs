const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'assets');
const destDir = path.join(__dirname, 'src', 'safe-assets');

const filesToCopy = [
    { src: 'About and Founder Image/Founder Image.jpg', dest: 'about/founder.jpg' },
    
    { src: 'Brands we worked with/Ay Subz.png', dest: 'brands/aysubz.png' },
    { src: 'Brands we worked with/BME.png', dest: 'brands/bme.png' },
    { src: 'Brands we worked with/ÀJỌPAW Logo .png', dest: 'brands/ajopaw-logo.png' },
    
    { src: 'Brands we worked with/Listening Party x RIA x Jameson Yard Collaboration/WhatsApp Image 2025-11-21 at 16.32.37_7594ee0e.jpg', dest: 'brands/jameson1.jpg' },
    { src: 'Brands we worked with/Listening Party x RIA x Jameson Yard Collaboration/WhatsApp Image 2025-11-21 at 17.58.11_a77d59f2.jpg', dest: 'brands/jameson2.jpg' },
    { src: 'Brands we worked with/Listening Party x RIA x Jameson Yard Collaboration/WhatsApp Image 2025-11-21 at 17.58.11_fb88e922.jpg', dest: 'brands/jameson3.jpg' },
    
    { src: 'Brands we worked with/Venus Socials - All women halloween party/IMG_5153.jpg', dest: 'brands/venus1.jpg' },
    { src: 'Brands we worked with/Venus Socials - All women halloween party/IMG_5435.jpg', dest: 'brands/venus2.jpg' },
    { src: 'Brands we worked with/Venus Socials - All women halloween party/IMG_5479.jpg', dest: 'brands/venus3.jpg' },
    { src: 'Brands we worked with/Venus Socials - All women halloween party/IMG_5484.jpg', dest: 'brands/venus4.jpg' },
    
    { src: 'Brands we worked with/ÀJỌPÀW  First Pre-Launch Brand Campaign/DSC01468.JPEG', dest: 'brands/ajopaw1.jpeg' },
    { src: 'Brands we worked with/ÀJỌPÀW  First Pre-Launch Brand Campaign/DSC01578.JPEG', dest: 'brands/ajopaw2.jpeg' },
    { src: 'Brands we worked with/ÀJỌPÀW  First Pre-Launch Brand Campaign/DSC01692.JPEG', dest: 'brands/ajopaw3.jpeg' },
    
    { src: 'Metrics/Coffee and Cream Analytics Shots Carousel Instagram Post Template/1.png', dest: 'metrics/coffee.png' },
    { src: 'Metrics/Wicked Ties Analytics Shots Carousel Instagram Post Template (1)/1.png', dest: 'metrics/wicked.png' },
    
    { src: 'Testimonials/IMG_1746.jpg', dest: 'testimonials/test1.jpg' },
    { src: 'Testimonials/IMG_1747.jpg', dest: 'testimonials/test2.jpg' },
    { src: 'Testimonials/IMG_1748.jpg', dest: 'testimonials/test3.jpg' },
    
    { src: 'KinStrategi\'s Navigator Character/Ademaris - Greeting.png', dest: 'navigator/ademaris.png' }
];

for (const file of filesToCopy) {
    const fullSrc = path.join(srcDir, file.src);
    const fullDest = path.join(destDir, file.dest);
    
    if (fs.existsSync(fullSrc)) {
        fs.mkdirSync(path.dirname(fullDest), { recursive: true });
        fs.copyFileSync(fullSrc, fullDest);
        console.log('Copied', file.src);
    } else {
        console.error('Missing source file:', file.src);
    }
}
console.log('Done.');
