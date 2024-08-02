import type { ValueOf } from '../../utils/types';
import { THEME_NAMES } from './themeprovider.constants';
import type { ThemeClassPrefix, ThemeClassSeparator } from './themeprovider.utils';

export type ThemeName = ValueOf<typeof THEME_NAMES>;

export type Theme<T extends ThemeName = ThemeName> = `${ThemeClassPrefix}${ThemeClassSeparator}${T}`;
