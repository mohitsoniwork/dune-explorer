import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      try {
        const stats = await fs.stat(fullPath);
        const sizeMB = stats.size / (1024 * 1024);
        
        // Skip small images under 500KB
        if (sizeMB < 0.5) {
            console.log(`Skipping (already small): ${entry.name} (${sizeMB.toFixed(2)} MB)`);
            continue;
        }

        console.log(`Processing: ${entry.name} (${sizeMB.toFixed(2)} MB)`);

        const tempPath = `${fullPath}.tmp`;
        
        // Read image and get metadata
        const image = sharp(fullPath);
        const metadata = await image.metadata();

        // Only resize if width > 1920
        const needsResize = metadata.width && metadata.width > 1920;
        
        let processed = image;
        
        if (needsResize) {
            processed = processed.resize({ width: 1920, withoutEnlargement: true });
        }

        // Compress
        if (/\.(jpg|jpeg)$/i.test(entry.name)) {
            processed = processed.jpeg({ quality: 80, progressive: true });
        } else if (/\.png$/i.test(entry.name)) {
            processed = processed.png({ quality: 80, progressive: true });
        }

        await processed.toFile(tempPath);

        // Replace original with compressed
        await fs.rename(tempPath, fullPath);

        const newStats = await fs.stat(fullPath);
        const newSizeMB = newStats.size / (1024 * 1024);
        
        console.log(`✅ Saved: ${entry.name} (Reduced to ${newSizeMB.toFixed(2)} MB)`);

      } catch (err) {
        console.error(`❌ Error processing ${entry.name}:`, err.message);
      }
    }
  }
}

async function run() {
  console.log('Starting image compression...');
  await processDirectory(IMAGES_DIR);
  console.log('Done compressing images!');
}

run();
