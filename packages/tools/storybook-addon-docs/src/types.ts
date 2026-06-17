/**
 * Stable lookup key derived from a story meta. Preference order:
 * 1. `meta.component` (e.g. `mdc-accordionbutton` → `accordionbutton`)
 * 2. `Components/<name>/<story>` title — second segment
 */
export type MetaLike = {
  title?: string;
  component?: string | unknown;
};

export type KeyFromPath = (path: string) => string | undefined;
export type KeyFromMeta = (meta: MetaLike) => string | undefined;

export interface SetupDocsConfig {
  /**
   * Result of `import.meta.glob('.../knowledge-base/*.component.md',
   * { query: '?raw', import: 'default', eager: true })`.
   * Keys are file paths, values are the raw markdown strings.
   */
  markdown: Record<string, string>;
  /** Override the path → key derivation. Default: extracts the component dir name. */
  keyFromPath?: KeyFromPath;
  /** Override the meta → key derivation. Default: `meta.component` tag minus `mdc-` prefix, falling back to the second title segment. */
  keyFromMeta?: KeyFromMeta;
  /** Storybook global key used by the toolbar theme switcher. Default: `'theme'`. */
  themeGlobalKey?: string;
  /** Map a theme global value to an MDC theme class. Default: `(t) => \`mds-theme-stable-${t}\``. */
  themeClassFromGlobal?: (theme: string) => string;
}

export interface DocsAddonParameters {
  /** Raw markdown string. Wins over auto-discovery. */
  markdown?: string;
}

export interface ParsedFrontmatter {
  title?: string;
  summary?: string;
  [key: string]: unknown;
}

export interface MarkdownSection {
  /** Heading text without the `## ` prefix. */
  heading: string;
  /** Markdown body of the section, without its own heading. */
  body: string;
}
