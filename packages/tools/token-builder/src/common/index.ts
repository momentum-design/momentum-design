import CONSTANTS from './constants';

export type { Config, ConfigFile, Filter, Filters, Format, Transform } from './types';

/** camelCase → kebab-case, e.g. "buttonBackground" → "button-background" */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

export {
  CONSTANTS,
};
