import type {
  KeyFromMeta,
  KeyFromPath,
  MetaLike,
  SetupDocsConfig,
} from './types';

const defaultKeyFromPath: KeyFromPath = (path) => {
  // Expect `…/<component>/knowledge-base/<file>.component.md`.
  const match = path.match(/\/([^/]+)\/knowledge-base\/[^/]+\.component\.md$/);
  return match?.[1];
};

const MDC_TAG_PREFIX = 'mdc-';

const defaultKeyFromMeta: KeyFromMeta = (meta) => {
  // Prefer `meta.component` so the lookup tracks the actual component element,
  // independent of how the story is grouped under `meta.title` in the sidebar.
  if (typeof meta.component === 'string' && meta.component) {
    const tag = meta.component.toLowerCase();
    return tag.startsWith(MDC_TAG_PREFIX) ? tag.slice(MDC_TAG_PREFIX.length) : tag;
  }

  const title = typeof meta.title === 'string' ? meta.title : undefined;
  if (!title) return undefined;
  // Fallback: `Components/<name>/<story>` → `<name>`.
  const segments = title.split('/').map((s) => s.trim()).filter(Boolean);
  if (segments.length >= 2 && segments[0]?.toLowerCase() === 'components') {
    return segments[1];
  }
  return segments[segments.length - 1];
};

const DEFAULT_THEME_GLOBAL_KEY = 'theme';
const defaultThemeClassFromGlobal = (theme: string): string =>
  `mds-theme-stable-${theme}`;

/**
 * Registry state is stashed on `globalThis` so the consumer-facing `setupDocs`
 * call (loaded via the package's `index` entry) and the `DocsPage` reader
 * (loaded via the addon's `preview` entry) share one source of truth even
 * though tsup bundles each entry separately.
 */
const REGISTRY_KEY = '__MDC_DOCS_REGISTRY__';

type RegistryState = {
  markdownByKey: Map<string, string>;
  keyFromMeta: KeyFromMeta;
  themeGlobalKey: string;
  themeClassFromGlobal: (theme: string) => string;
};

function getState(): RegistryState {
  const g = globalThis as unknown as Record<string, RegistryState | undefined>;
  let state = g[REGISTRY_KEY];
  if (!state) {
    state = {
      markdownByKey: new Map(),
      keyFromMeta: defaultKeyFromMeta,
      themeGlobalKey: DEFAULT_THEME_GLOBAL_KEY,
      themeClassFromGlobal: defaultThemeClassFromGlobal,
    };
    g[REGISTRY_KEY] = state;
  }
  return state;
}

export function setupDocs(config: SetupDocsConfig): void {
  const keyFromPath = config.keyFromPath ?? defaultKeyFromPath;
  const state = getState();
  state.keyFromMeta = config.keyFromMeta ?? defaultKeyFromMeta;
  state.themeGlobalKey = config.themeGlobalKey ?? DEFAULT_THEME_GLOBAL_KEY;
  state.themeClassFromGlobal =
    config.themeClassFromGlobal ?? defaultThemeClassFromGlobal;

  const next = new Map<string, string>();
  for (const [path, content] of Object.entries(config.markdown)) {
    const key = keyFromPath(path);
    if (!key || typeof content !== 'string') continue;
    next.set(key, content);
  }
  state.markdownByKey = next;
}

export function getMarkdownForMeta(meta: MetaLike): string | undefined {
  const state = getState();
  const key = state.keyFromMeta(meta);
  if (!key) return undefined;
  return state.markdownByKey.get(key);
}

export function getRegisteredKeys(): string[] {
  return [...getState().markdownByKey.keys()];
}

export function getThemeGlobalKey(): string {
  return getState().themeGlobalKey;
}

export function getThemeClassFromGlobal(): (theme: string) => string {
  return getState().themeClassFromGlobal;
}
