const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

function sanitizeName(name) {
    return name
        .replace(/[^a-zA-Z0-9.\-_]/g, '-') // Replace non-alphanumeric with -
        .replace(/-+/g, '-') // Replace multiple - with single -
        .replace(/^-|-$/g, '') // Remove leading/trailing -
        .toLowerCase();
}

function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        let newName = sanitizeName(item);
        // Special mapping to make things easier
        if (item === 'About and Founder Image') newName = 'about';
        if (item === 'Brands we worked with') newName = 'brands';
        if (item === 'KinStrategi\'s Navigator Character') newName = 'navigator';
        if (item === 'Metrics') newName = 'metrics';
        if (item === 'Testimonials') newName = 'testimonials';

        const newFullPath = path.join(dir, newName);
        
        if (fullPath !== newFullPath) {
            fs.renameSync(fullPath, newFullPath);
            console.log(`Renamed: ${item} -> ${newName}`);
        }
        
        if (stat.isDirectory()) {
            processDirectory(newFullPath);
        }
    }
}

// Start processing from assets, but only the subfolders we added
const targetFolders = [
    'About and Founder Image',
    'Brands we worked with',
    'KinStrategi\'s Navigator Character',
    'Metrics',
    'Testimonials'
];

for (const folder of targetFolders) {
    const p = path.join(assetsDir, folder);
    if (fs.existsSync(p)) {
        const safeName = sanitizeName(folder);
        let newName = safeName;
        if (folder === 'About and Founder Image') newName = 'about';
        if (folder === 'Brands we worked with') newName = 'brands';
        if (folder === 'KinStrategi\'s Navigator Character') newName = 'navigator';
        if (folder === 'Metrics') newName = 'metrics';
        if (folder === 'Testimonials') newName = 'testimonials';
        
        const newPath = path.join(assetsDir, newName);
        fs.renameSync(p, newPath);
        console.log(`Renamed Folder: ${folder} -> ${newName}`);
        
        // now process inside
        processDirectory(newPath);
    } else {
        // Maybe it's already renamed
        const altPath = path.join(assetsDir, sanitizeName(folder));
        if (fs.existsSync(altPath)) {
             processDirectory(altPath);
        }
    }
}
console.log('Sanitization complete.');
