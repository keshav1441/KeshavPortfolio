/**
 * One-off asset squeeze. Source images were 1–3 MB each; nothing on the page
 * renders wider than ~700 CSS px, so they were shipping 4x the pixels needed.
 *
 * Overwrites in place — originals are recoverable from git.
 *   node scripts/optimize-images.mjs
 */
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const DIRS = ['src/assets', 'src/assets/projects'];
const MAX_WIDTH = 1400;

async function optimize(file) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  // Read into a buffer first: on Windows, holding a read handle on the source
  // makes writing back to the same path fail with EPERM.
  const input = await readFile(file);
  const before = input.byteLength;

  const pipeline = sharp(input).resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const output = ext === '.png'
    ? await pipeline.png({ compressionLevel: 9, palette: true, quality: 82 }).toBuffer()
    : await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();

  if (output.byteLength >= before) return { file, before, after: before, skipped: true };

  await writeFile(file, output);
  return { file, before, after: output.byteLength };
}

let totalBefore = 0;
let totalAfter = 0;

for (const dir of DIRS) {
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    if ((await stat(path)).isDirectory()) continue;
    const result = await optimize(path);
    if (!result) continue;
    totalBefore += result.before;
    totalAfter += result.after;
    const kb = n => `${Math.round(n / 1024)}kB`;
    console.log(
      `${result.skipped ? 'skip' : ' ok '}  ${name.padEnd(28)} ${kb(result.before).padStart(8)} → ${kb(result.after)}`,
    );
  }
}

console.log(`\ntotal ${Math.round(totalBefore / 1024)}kB → ${Math.round(totalAfter / 1024)}kB`);
