import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const SRC = "C:/Users/MOD/AppData/Local/Temp/realimg";
const OUT = "public/ingested/flagshiparubaa";
const MAX_EDGE = 1600;
const QUALITY = 74;

const rename = {
  "FSABOAT.png": "boat-aerial-turquoise.webp",
  "flagshiparuba-1.jpg": "schooner-sunset-guests.webp",
  "flagshiparuba-2.jpg": "coastline-cliff-sunset.webp",
  "flagshiparuba-3.jpg": "tall-ship-horizon.webp",
  "afternoon-pirate-cruise.png": "afternoon-pirate-party.webp",
  "caribbean-sunset-bird-sea.jpeg": "sunset-bird-silhouette.webp",
  "aruba-snorkel-sites-sea-turtle.png": "snorkel-sea-turtle.webp",
  "snorkling-map-flagshiparuba.png": "snorkel-sites-map.webp",
  "Snorkel-Malmok-Beach.png": "malmok-beach.webp",
  "ilan-dray-QSgxi7hxN-0-unsplash.jpg": "aerial-yacht-reef.webp",
  "jim-davis-PnRc53QTTPI-unsplash-scaled.jpg": "guest-beach-dusk.webp",
  "kenny-soren-2mGIF6A_8HA-unsplash.jpg": "coastline-resort-view.webp",
};

await mkdir(OUT, { recursive: true });
const files = await readdir(SRC);
for (const f of files) {
  const target = rename[f];
  if (!target) { console.log("skip (not mapped):", f); continue; }
  const buf = await sharp(join(SRC, f))
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();
  await sharp(buf).toFile(join(OUT, target));
  console.log(f, "->", target, `(${(buf.length / 1024).toFixed(0)} KB)`);
}
console.log("done");
