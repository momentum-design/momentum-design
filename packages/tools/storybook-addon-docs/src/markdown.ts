import type { MarkdownSection, ParsedFrontmatter } from './types';

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

/**
 * Minimal YAML-ish frontmatter parser. Knowledge-base files use a flat
 * `key: value` shape with optional quoting; pulling in gray-matter would
 * drag Node polyfills into the preview bundle, so we parse inline.
 */
export function parseFrontmatter(
  raw: string,
): { data: ParsedFrontmatter; body: string } {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    return { data: {}, body: raw };
  }

  const data: ParsedFrontmatter = {};
  const lines = match[1]!.split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    let value = line.slice(colon + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) data[key] = value;
  }

  return { data, body: raw.slice(match[0].length) };
}

/**
 * Split markdown body into sections keyed by H2 (`## `). Content above the
 * first H2 (if any) is discarded; the frontmatter title/summary already
 * cover page-level intro.
 */
export function splitByH2(body: string): MarkdownSection[] {
  const lines = body.split(/\r?\n/);
  const sections: MarkdownSection[] = [];
  let current: { heading: string; lines: string[] } | undefined;

  for (const line of lines) {
    const headingMatch = /^##\s+(.+?)\s*$/.exec(line);
    if (headingMatch) {
      if (current) {
        sections.push({
          heading: current.heading,
          body: current.lines.join('\n').trim(),
        });
      }
      current = { heading: headingMatch[1]!, lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) {
    sections.push({
      heading: current.heading,
      body: current.lines.join('\n').trim(),
    });
  }
  return sections;
}
