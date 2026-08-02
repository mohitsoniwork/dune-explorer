import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');
await mkdir(outDir, { recursive: true });

const remote = [
  ['https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'jaipur'],
  ['https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'jaisalmer-dunes'],
  ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'udaipur-palace'],
  ['https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'jodhpur-fort'],
  ['https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'ranthambore-tiger'],
  ['https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'pushkar'],
  ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'luxury-hotel'],
  ['https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'india-village'],
  ['https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 'india-local'],
];

const local = [
  [join(root, 'public', 'home-hero.jpg'), 'home-hero'],
  [join(root, 'public', 'udaipur.jpg'), 'udaipur'],
];

const sources = [
  ...remote.map(([url, name]) => ({ url, name })),
  ...local.map(([path, name]) => ({ localPath: path, name })),
];

let ok = 0;
for (const src of sources) {
  try {
    let buffer;
    if (src.url) {
      const res = await fetch(src.url);
      if (!res.ok) throw new Error(`fetch ${res.status}`);
      buffer = Buffer.from(await res.arrayBuffer());
    } else {
      buffer = await readFile(src.localPath);
    }
    await sharp(buffer).rotate().resize(1600, 1000, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(outDir, `${src.name}.webp`));
    await sharp(buffer).rotate().resize(1600, 1000, { fit: 'inside', withoutEnlargement: true }).avif({ quality: 60 }).toFile(join(outDir, `${src.name}.avif`));
    ok++;
    console.log(`ok ${src.name}`);
  } catch (e) {
    console.error(`FAIL ${src.name}: ${e.message}`);
  }
}
console.log(`done ${ok}/${sources.length}`);
