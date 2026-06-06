import path from "node:path";
import { readdir } from "node:fs/promises";

const WORK_ROOT = path.join(
  process.cwd(),
  "public",
  "assets",
  "resources",
  "our work"
);

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function toPublicUrl(parts) {
  return `/${parts.map((part) => encodeURIComponent(part)).join("/")}`;
}

function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function getWorkGallery() {
  const entries = await readdir(WORK_ROOT, { withFileTypes: true });

  const folders = entries.filter((entry) => entry.isDirectory()).sort((a, b) =>
    naturalSort(a.name, b.name)
  );

  const categories = await Promise.all(
    folders.map(async (folder) => {
      const folderPath = path.join(WORK_ROOT, folder.name);
      const files = await readdir(folderPath, { withFileTypes: true });

      const images = files
        .filter(
          (file) =>
            file.isFile() &&
            IMAGE_EXTENSIONS.has(path.extname(file.name).toLowerCase())
        )
        .sort((a, b) => naturalSort(a.name, b.name))
        .map((file, index) => ({
          src: toPublicUrl([
            "assets",
            "resources",
            "our work",
            folder.name,
            file.name,
          ]),
          alt: `${folder.name} image ${index + 1}`,
        }));

      return {
        slug: toSlug(folder.name),
        name: folder.name,
        images,
      };
    })
  );

  return categories.filter((category) => category.images.length > 0);
}
