// AI-Assisted
/**
 * Rehype plugin that renders knowledge-base body copy with the Momentum text
 * component. Block elements whose tag is a valid <mdc-text> `tagname`
 * (p, h2-h6) are converted into an <mdc-text> carrying that tagname; li, td and
 * th are not valid tagnames, so their inline text is wrapped in an
 * <mdc-text tagname="span"> instead.
 *
 * Markdown links (<a>) are converted to inline <mdc-link> so body copy picks up
 * Momentum link styling. Self-referencing heading anchors (class
 * kb-heading-anchor, added below), buttons, and code/pre blocks are left
 * untouched: they keep their own styling and monospace font.
 *
 * Relative markdown link hrefs are rewritten against the generated manifest so
 * they work on the built docs site: links to published articles become internal
 * /en/<section>/<page> URLs, while links to unpublished source files fall back
 * to their GitHub source so they never 404. Same-page anchors and external URLs
 * are left untouched.
 *
 * The transform is scoped to generated knowledge-base article markdown so it
 * does not leak into MDX pages that inherit the shared markdown config.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MANIFEST_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'generated',
  'knowledge-base',
  'manifest.json',
);

const GITHUB_BLOB_BASE = 'https://github.com/momentum-design/momentum-design/blob/main/';

// Lazily build maps from the generated manifest: repo-relative sourcePath ->
// on-site docs URL, and "<section>/<page>" -> sourcePath (used to resolve links
// relative to the current article's source location).
let linkMaps;
const getLinkMaps = () => {
  if (linkMaps) return linkMaps;
  const sourceToUrl = new Map();
  const sectionPageToSource = new Map();
  try {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    (manifest.routes ?? []).forEach((route) => {
      if (route?.sourcePath && route?.path) {
        const [, section, page] = route.path.split('/');
        sourceToUrl.set(route.sourcePath, `/${route.path}`);
        sectionPageToSource.set(`${section}/${page}`, route.sourcePath);
      }
    });
  } catch {
    // If the manifest is missing, links are left untouched.
  }
  linkMaps = { sourceToUrl, sectionPageToSource };
  return linkMaps;
};

// External URLs (scheme:// or protocol-relative) and same-page anchors must
// never be rewritten.
const isExternalOrAnchor = (href) => href.startsWith('#') || href.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(href);

// Build the href rewriter for a given article, identified by its generated
// "<section>/<page>" path. Relative markdown links are resolved against the
// article's source directory: published targets become internal docs URLs,
// everything else falls back to its GitHub source so links never 404.
const createHrefRewriter = (sectionPage) => {
  const { sourceToUrl, sectionPageToSource } = getLinkMaps();
  const currentSource = sectionPageToSource.get(sectionPage);
  if (!currentSource) return (href) => href;
  const currentDir = path.posix.dirname(currentSource);
  return (href) => {
    if (!href || isExternalOrAnchor(href)) return href;
    const hashIndex = href.indexOf('#');
    const rawPath = hashIndex === -1 ? href : href.slice(0, hashIndex);
    const anchor = hashIndex === -1 ? '' : href.slice(hashIndex);
    if (!rawPath) return href;
    const resolved = path.posix.normalize(path.posix.join(currentDir, rawPath));
    const internal = sourceToUrl.get(resolved);
    if (internal) return `${internal}${anchor}`;
    return `${GITHUB_BLOB_BASE}${resolved}${anchor}`;
  };
};

const TYPE_BY_TAG = {
  p: 'body-large-regular',
  h2: 'heading-midsize-bold',
  h3: 'heading-small-bold',
  h4: 'body-large-bold',
  h5: 'body-large-bold',
  h6: 'body-large-bold',
  li: 'body-large-regular',
  td: 'body-large-regular',
  th: 'body-large-bold',
};

const INLINE_TAGS = new Set([
  'a',
  'abbr',
  'b',
  'bdi',
  'bdo',
  'br',
  'cite',
  'code',
  'data',
  'dfn',
  'em',
  'i',
  'img',
  'kbd',
  'mark',
  'q',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'time',
  'u',
  'var',
  'wbr',
  'del',
  'ins',
  'mdc-text',
  'mdc-link',
  'mdc-icon',
  'mdc-badge',
]);

const KB_CONTENT_PATH = /knowledge-base[\\/]+content[\\/]/;

// Block tags that are valid mdc-text `tagname` values, so the element itself is
// converted to an <mdc-text> rather than having its text wrapped in one.
const ELEMENT_TAGS = new Set(['p', 'h2', 'h3', 'h4', 'h5', 'h6']);

// mdc-text tagnames that render as block elements; a converted block mdc-text
// must not be treated as inline content when wrapping li/td/th prefixes.
const BLOCK_MDC_TEXT_TAGS = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']);

const isInlineNode = (node) => {
  if (!node) return false;
  if (node.type === 'text' || node.type === 'raw') return true;
  if (node.type !== 'element') return false;
  if (node.tagName === 'mdc-text') return !BLOCK_MDC_TEXT_TAGS.has(node.properties?.tagname);
  return INLINE_TAGS.has(node.tagName);
};

const isMeaningful = (node) => {
  if (node.type === 'text') return node.value.trim().length > 0;
  return node.type === 'element' || node.type === 'raw';
};

const wrapInlinePrefix = (node, type) => {
  const children = node.children ?? [];
  let end = 0;
  while (end < children.length && isInlineNode(children[end])) {
    end += 1;
  }
  const prefix = children.slice(0, end);
  if (!prefix.some(isMeaningful)) return;
  const wrapper = {
    type: 'element',
    tagName: 'mdc-text',
    properties: { tagname: 'span', type },
    children: prefix,
  };
  node.children = [wrapper, ...children.slice(end)];
};

// Turn a block element into an <mdc-text> carrying its original tag as tagname,
// preserving existing properties (e.g. heading anchor ids).
const convertToMdcText = (node) => {
  node.properties = {
    ...(node.properties ?? {}),
    tagname: node.tagName,
    type: TYPE_BY_TAG[node.tagName],
  };
  node.tagName = 'mdc-text';
};

// Self-referencing heading anchors are added by wrapHeadingInAnchor with a
// kb-heading-anchor class; they keep their own styling and must not become links.
const isHeadingAnchor = (node) => {
  const className = node.properties?.className ?? node.properties?.class;
  if (Array.isArray(className)) return className.includes('kb-heading-anchor');
  return typeof className === 'string' && className.split(/\s+/).includes('kb-heading-anchor');
};

// Convert a markdown link into an inline <mdc-link>, rewriting its href for the
// built docs site and preserving any other anchor properties so body-copy links
// pick up Momentum link styling.
const convertToMdcLink = (node, rewriteHref) => {
  const properties = { ...(node.properties ?? {}), inline: true };
  if (typeof properties.href === 'string') {
    properties.href = rewriteHref(properties.href);
  }
  node.properties = properties;
  node.tagName = 'mdc-link';
};

// Wrap a heading's inner content in a self-referencing anchor so the heading
// becomes a clickable anchor link. This plugin runs before Astro's
// rehypeHeadingIds and converts the heading to <mdc-text>, so that pass never
// sees it; we therefore mint the id ourselves and put it on the host element,
// leaving the mdc-text (and its tagname) as-is.
const collectText = (node) => {
  if (node.type === 'text' || node.type === 'raw') return node.value ?? '';
  if (!Array.isArray(node.children)) return '';
  return node.children.map(collectText).join('');
};

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');

// Mirror github-slugger's de-duplication so repeated headings get -1, -2 suffixes.
const uniqueId = (base, occurrences) => {
  const slug = base || 'section';
  if (!occurrences.has(slug)) {
    occurrences.set(slug, 0);
    return slug;
  }
  let count = occurrences.get(slug);
  let candidate;
  do {
    count += 1;
    candidate = `${slug}-${count}`;
  } while (occurrences.has(candidate));
  occurrences.set(slug, count);
  occurrences.set(candidate, 0);
  return candidate;
};

// Mint (or preserve) a heading id on the host element so #anchor links resolve.
// This plugin converts headings to <mdc-text> before Astro's rehypeHeadingIds
// pass, so that pass never sees them; we mirror github-slugger here for all
// heading levels.
const ensureHeadingId = (node, occurrences) => {
  const id =
    typeof node.properties?.id === 'string' ? node.properties.id : uniqueId(slugify(collectText(node)), occurrences);
  node.properties = { ...(node.properties ?? {}), id };
  return id;
};

const wrapHeadingInAnchor = (node, occurrences) => {
  const id = ensureHeadingId(node, occurrences);
  node.children = [
    {
      type: 'element',
      tagName: 'a',
      properties: { href: `#${id}`, class: 'kb-heading-anchor' },
      children: node.children,
    },
  ];
};

const walk = (node, occurrences, rewriteHref) => {
  if (!node || !Array.isArray(node.children)) return;
  // Leave code blocks and inline code as-is so their monospace font is kept.
  if (node.type === 'element' && (node.tagName === 'pre' || node.tagName === 'code')) return;
  for (const child of node.children) {
    walk(child, occurrences, rewriteHref);
  }
  if (node.type !== 'element') return;
  if (ELEMENT_TAGS.has(node.tagName)) {
    if (node.tagName === 'h2') {
      wrapHeadingInAnchor(node, occurrences);
    } else if (/^h[3-6]$/.test(node.tagName)) {
      ensureHeadingId(node, occurrences);
    }
    convertToMdcText(node);
  } else if (node.tagName === 'a' && !isHeadingAnchor(node)) {
    convertToMdcLink(node, rewriteHref);
  } else if (TYPE_BY_TAG[node.tagName]) {
    wrapInlinePrefix(node, TYPE_BY_TAG[node.tagName]);
  }
};

export default function rehypeMdcText() {
  return (tree, file) => {
    const filePath = file?.path ?? file?.history?.[file.history.length - 1] ?? '';
    if (!KB_CONTENT_PATH.test(filePath)) return;
    const relFromContent = filePath.split(/knowledge-base[\\/]+content[\\/]+/)[1] ?? '';
    const sectionPage = relFromContent.replace(/\\/g, '/').replace(/\.md$/, '');
    const rewriteHref = createHrefRewriter(sectionPage);
    walk(tree, new Map(), rewriteHref);
  };
}
// End AI-Assisted
