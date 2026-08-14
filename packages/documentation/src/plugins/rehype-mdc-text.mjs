// AI-Assisted
/**
 * Rehype plugin that renders knowledge-base body copy with the Momentum text
 * component. Block elements whose tag is a valid <mdc-text> `tagname`
 * (p, h2-h6) are converted into an <mdc-text> carrying that tagname; li, td and
 * th are not valid tagnames, so their inline text is wrapped in an
 * <mdc-text tagname="span"> instead.
 *
 * Links, buttons, and code/pre blocks are intentionally left untouched: they
 * keep their own styling and monospace font.
 *
 * The transform is scoped to generated knowledge-base article markdown so it
 * does not leak into MDX pages that inherit the shared markdown config.
 */

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

const wrapHeadingInAnchor = (node, occurrences) => {
  const id =
    typeof node.properties?.id === 'string' ? node.properties.id : uniqueId(slugify(collectText(node)), occurrences);
  node.properties = { ...(node.properties ?? {}), id };
  node.children = [
    {
      type: 'element',
      tagName: 'a',
      properties: { href: `#${id}`, class: 'kb-heading-anchor' },
      children: node.children,
    },
  ];
};

const walk = (node, occurrences) => {
  if (!node || !Array.isArray(node.children)) return;
  // Leave code blocks and inline code as-is so their monospace font is kept.
  if (node.type === 'element' && (node.tagName === 'pre' || node.tagName === 'code')) return;
  for (const child of node.children) {
    walk(child, occurrences);
  }
  if (node.type !== 'element') return;
  if (ELEMENT_TAGS.has(node.tagName)) {
    if (node.tagName === 'h2') {
      wrapHeadingInAnchor(node, occurrences);
    }
    convertToMdcText(node);
  } else if (TYPE_BY_TAG[node.tagName]) {
    wrapInlinePrefix(node, TYPE_BY_TAG[node.tagName]);
  }
};

export default function rehypeMdcText() {
  return (tree, file) => {
    const filePath = file?.path ?? file?.history?.[file.history.length - 1] ?? '';
    if (!KB_CONTENT_PATH.test(filePath)) return;
    walk(tree, new Map());
  };
}
// End AI-Assisted
