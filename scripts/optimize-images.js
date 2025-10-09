import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets";
const maxWidth = 1920;
const quality = 75;

function isImage(file) {
  return /\.(jpe?g|png)$/i.test(file);
}

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath);
    const outPath = filePath.replace(ext, `.optimized${ext}`);

    const image = sharp(filePath);
    const metadata = await image.metadata();

    await image
      .resize({
        width: metadata.width > maxWidth ? maxWidth : undefined,
      })
      .toFormat(metadata.format, { quality })
      .toFile(outPath);

    const oldSize = fs.statSync(filePath).size / 1024;
    const newSize = fs.statSync(outPath).size / 1024;
    console.log(
      `✅ ${path.basename(filePath)}: ${oldSize.toFixed(
        1
      )}KB → ${newSize.toFixed(1)}KB`
    );
  } catch (err) {
    console.error(`❌ Failed to process ${filePath}:`, err.message);
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir);
  for (const file of entries) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await walkDir(fullPath);
    } else if (isImage(fullPath)) {
      await optimizeImage(fullPath); // sequential instead of parallel
    }
  }
}

await walkDir(inputDir);
