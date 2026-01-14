
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const ASSETS_DIR = path.join(ROOT_DIR, 'src/assets/images');
const SRC_DIR = path.join(ROOT_DIR, 'src');

const SUPPORTED_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const MAX_WIDTH = 2560; // Max width for hero images/full screens
const QUALITY = 82; // Good balance for source images

// Helper to get all file paths recursively
function getAllFiles(dir, extFilter = []) {
    let results = [];
    if (!fs.existsSync(dir)) return results;

    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath, extFilter));
        } else {
            if (extFilter.length === 0 || extFilter.includes(path.extname(file).toLowerCase())) {
                results.push(filePath);
            }
        }
    });
    return results;
}

async function checkAndOptimizeImages() {
    console.log('🔍 Scanning images...');
    const images = getAllFiles(ASSETS_DIR, SUPPORTED_EXTS);
    console.log(`Found ${images.length} images.`);

    let warnings = [];
    let optimizedCount = 0;
    let savedBytes = 0;

    for (const imgPath of images) {
        try {
            const metadata = await sharp(imgPath).metadata();
            const originalSize = fs.statSync(imgPath).size;

            // Check for potential corruption
            if (!metadata.width || !metadata.height) {
                warnings.push(`❌ Corrupt or unreadable: ${path.relative(ROOT_DIR, imgPath)}`);
                continue;
            }

            let transformer = sharp(imgPath);
            let shouldProcess = false;

            // 1. Check Dimensions
            if (metadata.width > MAX_WIDTH) {
                console.log(`   Detailed: Resizing ${path.relative(ROOT_DIR, imgPath)} (Width: ${metadata.width} -> ${MAX_WIDTH})`);
                transformer = transformer.resize(MAX_WIDTH);
                shouldProcess = true;
            }

            // 2. Check Format/Optimization
            // We optimize in-place but purely for file size reduction (lossy compression)
            // ensuring we don't accidentally bloat the file.
            if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
                transformer = transformer.jpeg({ quality: QUALITY, mozjpeg: true });
                shouldProcess = true;
            } else if (metadata.format === 'png') {
                transformer = transformer.png({ quality: QUALITY, compressionLevel: 8 });
                shouldProcess = true;
            } else if (metadata.format === 'webp') {
                transformer = transformer.webp({ quality: QUALITY });
                shouldProcess = true;
            }

            if (shouldProcess) {
                const buffer = await transformer.toBuffer();
                if (buffer.length < originalSize) {
                    fs.writeFileSync(imgPath, buffer);
                    const saved = originalSize - buffer.length;
                    savedBytes += saved;
                    optimizedCount++;
                    console.log(`   ✅ Optimized: ${path.relative(ROOT_DIR, imgPath)} (Saved ${(saved / 1024).toFixed(1)} KB)`);
                } else {
                    // console.log(`   Skipped: Optimization didn't save space for ${path.basename(imgPath)}`);
                }
            }

        } catch (err) {
            warnings.push(`❌ Error processing ${path.relative(ROOT_DIR, imgPath)}: ${err.message}`);
        }
    }

    console.log('\n--- Optimization Summary ---');
    console.log(`Optimized ${optimizedCount} images.`);
    console.log(`Total space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);

    if (warnings.length > 0) {
        console.log('\n⚠️ Issues Found:');
        warnings.forEach(w => console.log(w));
    } else {
        console.log('\n✅ No corrupted images found.');
    }
}

async function checkBrokenReferences() {
    console.log('\n🔍 Checking for broken references in code...');
    const tsxAndAstro = getAllFiles(SRC_DIR, ['.tsx', '.astro', '.ts', '.js', '.jsx']);
    const allAssetImages = new Set(getAllFiles(ASSETS_DIR).map(p => path.relative(ROOT_DIR, p).replace(/\\/g, '/')));

    let breaks = [];

    for (const file of tsxAndAstro) {
        const content = fs.readFileSync(file, 'utf-8');
        // Look for imports from assets
        // Regex for: import ... from '.../assets/images/...'
        const importRegex = /from\s+['"](.*\/assets\/images\/.*)['"]/g;
        let match;

        // We only check absolute-ish imports or relative ones that resolve to assets
        // This is tricky without full AST, but we try a heuristic.
        while ((match = importRegex.exec(content)) !== null) {
            const importPath = match[1];

            // Resolve path
            let resolvedPath = '';
            if (importPath.startsWith('.')) {
                resolvedPath = path.resolve(path.dirname(file), importPath);
            } else if (importPath.startsWith('/src')) {
                resolvedPath = path.join(ROOT_DIR, importPath.substring(1)); // Remove leading /
            } else {
                continue; // Skip aliases we don't know easily
            }

            // Check existence
            if (!fs.existsSync(resolvedPath)) {
                breaks.push({
                    file: path.relative(ROOT_DIR, file),
                    ref: importPath,
                    resolved: path.relative(ROOT_DIR, resolvedPath)
                });
            }
        }
    }

    if (breaks.length > 0) {
        console.log('\n🚨 Broken Image References Detected:');
        breaks.forEach(b => {
            console.log(`   File: ${b.file}`);
            console.log(`   Ref:  ${b.ref}`);
            console.log(`   --> Does not exist at: ${b.resolved}`);
            console.log('---');
        });
    } else {
        console.log('✅ No broken static imports found.');
    }
}

async function run() {
    // await checkAndOptimizeImages();
    await checkBrokenReferences();
}

run();
