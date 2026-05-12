// AI-Assisted
export type KeyframeEntry = { propertyName: string; from: string; to: string };

/**
 * Replaces every `{a.b.c}` token reference in a composite value string with a
 * CSS custom property var() expression: `var(--mds-a-b-c)`.
 */
export function resolveRefsCss(value: string): string {
  return value.replace(/\{([^}]+)\}/g, (_, refPath: string) => `var(--mds-${refPath.replace(/\./g, '-')})`);
}

/**
 * Replaces every `{a.b.c}` token reference in a composite value string with a
 * SCSS variable: `$mds-a-b-c`.
 */
export function resolveRefsScss(value: string): string {
  return value.replace(/\{([^}]+)\}/g, (_, refPath: string) => `$mds-${refPath.replace(/\./g, '-')}`);
}

/** Builds a CSS @keyframes block from a list of KeyframeEntry descriptors. */
export function buildKeyframeBlock(kfName: string, keyframes: KeyframeEntry[]): string {
  const fromProps: Record<string, string> = {};
  const toProps: Record<string, string> = {};
  keyframes.forEach(({ propertyName, from, to }) => {
    fromProps[propertyName] = from;
    toProps[propertyName] = to;
  });
  const fromStr = Object.entries(fromProps)
    .map(([p, v]) => `${p}: ${v}`)
    .join('; ');
  const toStr = Object.entries(toProps)
    .map(([p, v]) => `${p}: ${v}`)
    .join('; ');
  return `@keyframes ${kfName} {\n  from { ${fromStr}; }\n  to { ${toStr}; }\n}`;
}
// End AI-Assisted
