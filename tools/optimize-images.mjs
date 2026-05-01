// Resize + re-encode the heavy founder JPGs and the new 3D logo so the
// site doesn't ship 4 MB of unoptimized JPEG to mobile users on first paint.
// PageSpeed flagged 3.4 MB of savings on these two images alone.
//
// Output: smaller .jpg in place + a sibling .webp (browsers that support
// it via image-set() in CSS get the WebP, others fall through to JPG).

import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, "..");
const SRC = path.join(ROOT, "assets-src");
const DST = path.join(ROOT, "assets");

// targets: { name, maxW, jpegQ, webpQ }
const targets = [
  { name: "founder-hq-van.jpg",     maxW: 1800, jpegQ: 78, webpQ: 76 },
  { name: "founder-portrait.jpg",   maxW: 1400, jpegQ: 80, webpQ: 78 },
  { name: "founder-bronze-hq.jpg",  maxW: 1600, jpegQ: 80, webpQ: 78 },
  { name: "founder-white-hq.jpg",   maxW: 1600, jpegQ: 80, webpQ: 78 },
  { name: "hq-exterior-cloudy.jpg", maxW: 1800, jpegQ: 80, webpQ: 78 },
  { name: "hq-exterior-sunset.jpg", maxW: 1800, jpegQ: 80, webpQ: 78 },
  { name: "logo-3d-hero.jpg",       maxW: 1600, jpegQ: 86, webpQ: 84 },
  { name: "logo-3d-render.jpg",     maxW: 1600, jpegQ: 84, webpQ: 82 },
  { name: "logo-bronze-dark.jpg",   maxW: 1600, jpegQ: 84, webpQ: 82 },
  { name: "logo-fabric-mono.jpg",   maxW: 1600, jpegQ: 84, webpQ: 82 },
  { name: "office-interior-1.jpg",  maxW: 1600, jpegQ: 78, webpQ: 76 },
  { name: "office-interior-2.jpg",  maxW: 1600, jpegQ: 78, webpQ: 76 },
  { name: "van-bronze-front-glossy.jpg", maxW: 1800, jpegQ: 80, webpQ: 78 },
  { name: "van-bronze-side.jpg",    maxW: 1800, jpegQ: 80, webpQ: 78 },
  { name: "van-night-glossy.jpg",   maxW: 1800, jpegQ: 80, webpQ: 78 },
  { name: "van-white-side-sunset.jpg", maxW: 1800, jpegQ: 80, webpQ: 78 },
];

await fs.mkdir(SRC, { recursive: true });

let totalIn = 0, totalOut = 0;
for (const t of targets) {
  const dstJpg = path.join(DST, t.name);
  const dstWebp = path.join(DST, t.name.replace(/\.jpg$/i, ".webp"));
  const srcCopy = path.join(SRC, t.name);

  // Move the original into assets-src/ on the first run so subsequent runs
  // re-encode from the pristine source rather than from the already-shrunk
  // file in assets/. Idempotent — skips if assets-src already has it.
  try {
    await fs.access(srcCopy);
  } catch {
    try {
      await fs.copyFile(dstJpg, srcCopy);
    } catch (e) {
      console.warn(`skip ${t.name} — no source: ${e.code}`);
      continue;
    }
  }

  const inSize = (await fs.stat(srcCopy)).size;
  totalIn += inSize;

  const meta = await sharp(srcCopy).metadata();
  const w = meta.width || t.maxW;
  const resize = w > t.maxW ? sharp(srcCopy).resize({ width: t.maxW, withoutEnlargement: true }) : sharp(srcCopy);

  await resize.clone().jpeg({ quality: t.jpegQ, mozjpeg: true }).toFile(dstJpg);
  await resize.clone().webp({ quality: t.webpQ }).toFile(dstWebp);

  const jpgOut = (await fs.stat(dstJpg)).size;
  const webpOut = (await fs.stat(dstWebp)).size;
  totalOut += jpgOut;

  const fmt = (b) => `${(b / 1024).toFixed(0)}kb`;
  console.log(`${t.name.padEnd(34)} ${fmt(inSize).padStart(7)} → ${fmt(jpgOut).padStart(6)} jpg / ${fmt(webpOut).padStart(6)} webp  (${meta.width}×${meta.height})`);
}

const fmt = (b) => `${(b / 1024 / 1024).toFixed(2)} MB`;
console.log(`\nTotal: ${fmt(totalIn)} → ${fmt(totalOut)} (${((1 - totalOut / totalIn) * 100).toFixed(0)}% smaller)`);
