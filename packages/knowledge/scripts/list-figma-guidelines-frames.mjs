#!/usr/bin/env node
/**
 * For each component documentation page, finds FRAME nodes named "Guidelines"
 * and picks the primary one (largest bounding box) when multiple exist.
 *
 *   node --env-file=../../.env packages/knowledge/scripts/list-figma-guidelines-frames.mjs
 *   node --env-file=../../.env packages/knowledge/scripts/list-figma-guidelines-frames.mjs --markdown
 */
const fk = 'MrrkzCQ0YXzUTca2XhesDZ';
const md = process.argv.includes('--markdown');
const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error('Missing FIGMA_ACCESS_TOKEN');
  process.exit(1);
}

/** Canvas IDs: component doc pages under [Momentum Component Guidelines](…) after "Components Documentation". */
const pages = [
  ['9827:1137248', 'Accordion'],
  ['1:17', 'App Header'],
  ['1:18', 'Avatar'],
  ['1:19', 'Badge'],
  ['1:20', 'Banner'],
  ['1:21', 'Button'],
  ['1:22', 'Card'],
  ['1:23', 'Checkbox'],
  ['1:24', 'Chip'],
  ['2171:181027', 'Combo Box'],
  ['1:25', 'Compose Area'],
  ['1:26', 'Date Picker'],
  ['1:27', 'Decorator'],
  ['1:28', 'Dialog'],
  ['1:29', 'Empty State'],
  ['2171:181028', 'Filter'],
  ['1:54', 'Input'],
  ['849:18091', 'Label'],
  ['1:30', 'Link'],
  ['1:31', 'List Item'],
  ['1:32', 'Menu'],
  ['1:33', 'Message'],
  ['1:34', 'Pagination'],
  ['1:51', 'Password'],
  ['1:52', 'PIN'],
  ['1:35', 'Popover'],
  ['1:36', 'Progress Bar / Progress Spinner'],
  ['1:37', 'Radio'],
  ['1:38', 'Search Field'],
  ['1:39', 'Select'],
  ['1:40', 'Side Navigation'],
  ['11599:976452', 'Skeleton'],
  ['1:41', 'Slider'],
  ['1:42', 'Spinner'],
  ['1:43', 'Stepper'],
  ['1:44', 'Table'],
  ['1:45', 'Tab'],
  ['1:53', 'Text Area'],
  ['1:47', 'Time Picker'],
  ['1:48', 'Toast'],
  ['1:49', 'Toggle'],
  ['1:50', 'Tooltip'],
  ['1:55', 'Verification Code'],
];

function collectGuidelinesFrames(node, hits) {
  if (!node) return;
  if (node.name === 'Guidelines' && node.type === 'FRAME') {
    const w = node.absoluteBoundingBox?.width ?? 0;
    const h = node.absoluteBoundingBox?.height ?? 0;
    hits.push({ id: node.id, area: w * h, w, h });
  }
  for (const c of node.children || []) collectGuidelinesFrames(c, hits);
}

function toUrl(nodeId) {
  const dash = nodeId.replace(':', '-');
  return `https://www.figma.com/design/${fk}/%F0%9F%93%9C-Momentum-Component-Guidelines?node-id=${encodeURIComponent(dash)}`;
}

async function fetchPageSubtree(pageId) {
  const url = `https://api.figma.com/v1/files/${fk}?ids=${encodeURIComponent(pageId)}&depth=5`;
  const res = await fetch(url, { headers: { 'X-Figma-Token': token } });
  if (!res.ok) throw new Error(`${pageId}: ${res.status} ${await res.text()}`);
  return res.json();
}

const rows = [];
for (const [pageId, displayName] of pages) {
  try {
    const data = await fetchPageSubtree(pageId);
    const hits = [];
    collectGuidelinesFrames(data.document, hits);
    hits.sort((a, b) => b.area - a.area);
    const top = hits[0];
    rows.push({
      component: displayName,
      pageCanvasId: pageId,
      guidelinesNodeId: top?.id ?? null,
      guidelinesFrameCount: hits.length,
      url: top ? toUrl(top.id) : null,
    });
  } catch (e) {
    rows.push({
      component: displayName,
      pageCanvasId: pageId,
      guidelinesNodeId: null,
      guidelinesFrameCount: 0,
      url: null,
      error: String(e.message || e),
    });
  }
}

if (md) {
  console.log(
    '| Component | Guidelines frame (primary) |',
    '\n| --- | --- |',
    ...rows.map((r) =>
      r.url
        ? `\n| ${r.component} | [Open in Figma](${r.url}) |`
        : `\n| ${r.component} | *not found* ${r.error ? `(${r.error})` : ''} |`,
    ),
    '',
  );
} else {
  console.log(JSON.stringify(rows, null, 2));
}
