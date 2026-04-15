#!/usr/bin/env node
/**
 * Export Figma layers named "IMG" from the Accordion guidelines frame to PNGs.
 * Requires FIGMA_ACCESS_TOKEN (Personal Access Token) with file read access.
 *
 * Usage (from repo root):
 *   FIGMA_ACCESS_TOKEN=xxx node packages/knowledge/scripts/export-accordion-guideline-imgs.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILE_KEY = 'MrrkzCQ0YXzUTca2XhesDZ';
/** Output: packages/knowledge/components/imgs/accordion (linked from accordion.md as imgs/accordion/) */
const OUT_DIR = path.join(__dirname, '../components/imgs/accordion');

/** Node IDs for frames named "IMG" under Guidelines (node 10257:1136161). */
const LAYERS = [
  ['10257:1136170', 'overview-default.png'],
  ['10629:1160318', 'anatomy.png'],
  ['10859:1214470', 'single-default-borderless.png'],
  ['10859:1214541', 'group-stack.png'],
  ['10859:1214565', 'group-borderless.png'],
  ['10859:1214570', 'group-contained.png'],
  ['10859:1215108', 'content-header-title.png'],
  ['10859:1215115', 'content-header-icon-button.png'],
  ['10859:1215121', 'content-header-chip.png'],
  ['10859:1215127', 'content-header-placeholder-slot.png'],
  ['10859:1215134', 'content-header-chevron.png'],
  ['10859:1216425', 'content-panel-body-copy.png'],
  ['10859:1216431', 'content-panel-placeholder.png'],
  ['18017:19224', 'sizes-collapsed-headers.png'],
  ['18017:19245', 'behavior-collapsed-expanded.png'],
  ['18017:19253', 'interaction-single-multi.png'],
  ['18017:19265', 'best-practice-custom-content.png'],
];

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error('Missing FIGMA_ACCESS_TOKEN. Create a token at https://www.figma.com/developers/api#access-tokens');
  process.exit(1);
}

async function requestImageUrls(ids) {
  const params = new URLSearchParams({
    ids: ids.join(','),
    format: 'png',
    scale: '2',
  });
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?${params}`;
  const res = await fetch(url, { headers: { 'X-Figma-Token': token } });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma images API ${res.status}: ${text}`);
  }
  const data = await res.json();
  if (data.err) throw new Error(String(data.err));
  return data.images || {};
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download ${res.status} for ${dest}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const ids = LAYERS.map(([id]) => id);
  const images = await requestImageUrls(ids);

  for (const [nodeId, filename] of LAYERS) {
    const imageUrl = images[nodeId];
    if (!imageUrl) {
      console.warn(`No URL for ${nodeId} (${filename})`);
      continue;
    }
    const dest = path.join(OUT_DIR, filename);
    await download(imageUrl, dest);
    console.log('Wrote', path.relative(process.cwd(), dest));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
