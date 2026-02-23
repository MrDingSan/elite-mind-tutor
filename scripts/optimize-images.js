const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(process.cwd(), "public", "images");
const PHOTO_EXTS = new Set([".jpg", ".jpeg"]);
const PNG_EXTS = new Set([".png"]);
const MAX_WIDTH = 1920;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes;
  let idx = -1;
  do {
    value /= 1024;
    idx += 1;
  } while (value >= 1024 && idx < units.length - 1);
  return `${value.toFixed(1)} ${units[idx]}`;
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!PHOTO_EXTS.has(ext) && !PNG_EXTS.has(ext)) {
    return null;
  }

  const original = await fs.readFile(filePath);
  const image = sharp(original, { failOn: "none" });
  const meta = await image.metadata();

  let pipeline = sharp(original, { failOn: "none" }).rotate();

  if (meta.width && meta.width > MAX_WIDTH && PHOTO_EXTS.has(ext)) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (PHOTO_EXTS.has(ext)) {
    pipeline = pipeline.jpeg({
      quality: 78,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: "4:2:0",
    });
  } else if (PNG_EXTS.has(ext)) {
    const isLogo = filePath.includes(`${path.sep}logo${path.sep}`);
    pipeline = pipeline.png({
      compressionLevel: 9,
      effort: 10,
      adaptiveFiltering: true,
      palette: !isLogo,
      quality: isLogo ? undefined : 85,
    });
  }

  const output = await pipeline.toBuffer();
  if (output.length >= original.length) {
    return {
      filePath,
      before: original.length,
      after: original.length,
      changed: false,
    };
  }

  await fs.writeFile(filePath, output);
  return {
    filePath,
    before: original.length,
    after: output.length,
    changed: true,
  };
}

async function main() {
  const allFiles = await walk(ROOT);
  let totalBefore = 0;
  let totalAfter = 0;
  let changedCount = 0;

  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    if (!PHOTO_EXTS.has(ext) && !PNG_EXTS.has(ext)) continue;

    const result = await optimizeFile(file);
    if (!result) continue;

    totalBefore += result.before;
    totalAfter += result.after;
    if (result.changed) {
      changedCount += 1;
      const relativePath = path.relative(process.cwd(), result.filePath);
      const saved = result.before - result.after;
      const pct = ((saved / result.before) * 100).toFixed(1);
      console.log(
        `optimized ${relativePath}: ${formatBytes(result.before)} -> ${formatBytes(
          result.after
        )} (${pct}% saved)`
      );
    }
  }

  const savedTotal = totalBefore - totalAfter;
  const pctTotal = totalBefore ? ((savedTotal / totalBefore) * 100).toFixed(1) : "0.0";
  console.log("");
  console.log(`Images processed: ${allFiles.length}`);
  console.log(`Images changed:   ${changedCount}`);
  console.log(`Total before:     ${formatBytes(totalBefore)}`);
  console.log(`Total after:      ${formatBytes(totalAfter)}`);
  console.log(`Total saved:      ${formatBytes(savedTotal)} (${pctTotal}%)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
