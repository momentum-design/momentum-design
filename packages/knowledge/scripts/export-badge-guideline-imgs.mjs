#!/usr/bin/env node
/**
 * Export Figma layers named "IMG" from the Badge guidelines frame to PNGs.
 * Requires FIGMA_ACCESS_TOKEN.
 *
 * Usage (from repo root):
 *   node --env-file=.env packages/knowledge/scripts/export-badge-guideline-imgs.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILE_KEY = 'MrrkzCQ0YXzUTca2XhesDZ';
const OUT_DIR = path.join(__dirname, '../components/imgs/badge');

const LAYERS = [
  ['814:19388', 'overview.png'],
  ['814:19399', 'types-dot.png'],
  ['814:19406', 'types-counter.png'],
  ['814:19411', 'types-counter-label.png'],
  ['814:19418', 'types-icon-mention-list.png'],
  ['814:19433', 'colors-and-usage-types.png'],
  ['856:20241', 'colors-for-status-indicators.png'],
  ['814:19571', 'sizes-counter-digits.png'],
];

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error('Missing FIGMA_ACCESS_TOKEN. See https://www.figma.com/developers/api#access-tokens');
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
  if (!res.ok) throw new Error(`Figma images API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  if (data.err) throw new Error(String(data.err));
  return data.images || {};
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download ${res.status} for ${dest}`);
  await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const images = await requestImageUrls(LAYERS.map(([id]) => id));
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
