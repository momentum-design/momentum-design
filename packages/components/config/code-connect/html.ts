// Shared helpers for Web Components Code Connect templates.
// Lives outside src/ so it is never compiled into the published dist bundle.
//
// Unlike figma.helpers.react.renderProp, which returns its own leading space (' disabled'), these
// return the bare attribute. element() owns the separator because it alternates between ' ' and a
// newline+indent when a tag is wrapped.

// Longest single-line tag before it is broken across lines.
const MAX_INLINE_LENGTH = 100;

/** Renders `name="value"`, or nothing when the value is undefined. */
export const attribute = (name: string, value?: string): string => (value === undefined ? '' : `${name}="${value}"`);

/** Renders a bare `name`, or nothing when the value is falsy. */
export const booleanAttribute = (name: string, value?: boolean): string => (value ? name : '');

/**
 * Builds an element from an ordered attribute list. HTML snippets are not reformatted by the Code
 * Connect CLI, so long tags are wrapped here to match the multi-line shape Prettier gives JSX.
 * Empty entries are dropped, so omitted props cannot leave stray whitespace behind.
 *
 * `children` stays glued to the tags even when the attributes wrap, because it is slotted content:
 * padding it with newlines would add leading and trailing whitespace to the rendered slot.
 */
export const element = (tagName: string, attributes: string[], children = ''): string => {
  const present = attributes.filter(Boolean);
  const inline = `<${tagName}${present.map(name => ` ${name}`).join('')}>${children}</${tagName}>`;

  if (inline.length <= MAX_INLINE_LENGTH) {
    return inline;
  }

  return `<${tagName}\n  ${present.join('\n  ')}\n>${children}</${tagName}>`;
};
