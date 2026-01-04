
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
// Define directories to scan
const directoriesToScan = [
    path.join(publicDir, 'images'),
    path.join(__dirname, 'src', 'assets')
];

// Function to recursively find files
function findImages(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            findImages(filePath, fileList);
        } else {
            if (/\.(jpg|jpeg|png)$/i.test(file)) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

async function optimizeImages() {
    let totalImages = 0;

    for (const imagesDir of directoriesToScan) {
        console.log('Scanning for images in:', imagesDir);

        const images = findImages(imagesDir);
        console.log(`Found ${images.length} images in ${path.basename(imagesDir)}.`);
        totalImages += images.length;

        for (const imagePath of images) {
            const dir = path.dirname(imagePath);
            const ext = path.extname(imagePath);
            const name = path.basename(imagePath, ext);
            const webpPath = path.join(dir, `${name}.webp`);

            if (fs.existsSync(webpPath)) {
                console.log(`Skipping ${name}.webp (already exists)`);
                continue;
            }

            try {
                console.log(`Optimizing: ${path.relative(__dirname, imagePath)} -> ${name}.webp`);
                await sharp(imagePath)
                    .webp({ quality: 80 })
                    .toFile(webpPath);
            } catch (err) {
                console.error(`Error optimizing ${imagePath}:`, err.message);
            }
        }
    }
    console.log(`Optimization complete. Processed ${totalImages} potential source images.`);
}

optimizeImages();
