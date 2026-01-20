import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../src/assets/logo.png');
const outputPath = path.join(__dirname, '../public/favicon.png');

async function generateFavicon() {
    try {
        console.log(`Reading from ${inputPath}`);
        await sharp(inputPath)
            .resize(96, 96, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .png()
            .toFile(outputPath);
        console.log(`Favicon generated at ${outputPath}`);
    } catch (error) {
        console.error('Error generating favicon:', error);
    }
}

generateFavicon();
