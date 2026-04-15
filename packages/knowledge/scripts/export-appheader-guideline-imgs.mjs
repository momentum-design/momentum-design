#!/usr/bin/env node
/**
 * Export Figma layers named "IMG" from the App Header guidelines frame to PNGs.
 * Requires FIGMA_ACCESS_TOKEN (Personal Access Token) with file read access.
 *
 * Usage (from repo root):
 *   node --env-file=.env packages/knowledge/scripts/export-appheader-guideline-imgs.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILE_KEY = 'MrrkzCQ0YXzUTca2XhesDZ';
/** Output: packages/knowledge/components/imgs/appheader */
const OUT_DIR = path.join(__dirname, '../components/imgs/appheader');

/** Node IDs for frames named "IMG" under Guidelines (node 7834:268476). */
const LAYERS = [
  ['7834:268484', 'overview-app-header.png'],
  ['7834:268488', 'overview-app-shell.png'],
  ['7834:268496', 'anatomy-breakdown.png'],
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
