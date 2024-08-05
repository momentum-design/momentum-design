import type { Theme, ThemeName } from './themeprovider.types';

const THEME_CLASS_PREFIX = 'mds-theme-stable' as const;

export const THEME_CLASS_SEPARATOR = '-' as const;

const getFullQualifiedTheme = <T extends ThemeName>(themeName: T): Theme =>
  [THEME_CLASS_PREFIX, themeName].join(THEME_CLASS_SEPARATOR) as Theme<T>;

const utils = {
  getFullQualifiedTheme,
};

export default utils;
export type ThemeClassPrefix = typeof THEME_CLASS_PREFIX;
export type ThemeClassSeparator = typeof THEME_CLASS_SEPARATOR;
