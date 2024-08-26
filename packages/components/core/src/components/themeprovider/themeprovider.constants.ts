/* eslint-disable implicit-arrow-linebreak */
import utils from '../../utils/tag-name';
import type { Theme } from './themeprovider.types';
import themeProviderUtils from './themeprovider.utils';

const TAG_NAME = utils.constructTagName('themeprovider');

// Some themes are disabled until tokens are available for those themes
const THEME_NAMES = {
  // DARK_BRONZE: 'darkBronze' as const,
  // DARK_INDIGO: 'darkIndigo' as const,
  // DARK_JADE: 'darkJade' as const,
  // DARK_LAVENDER: 'darkLavender' as const,
  // DARK_ROSE: 'darkRose' as const,
  DARK_WEBEX: 'darkWebex' as const,
  // LIGHT_BRONZE: 'lightBronze' as const,
  // LIGHT_INDIGO: 'lightIndigo' as const,
  // LIGHT_JADE: 'lightJade' as const,
  // LIGHT_LAVENDER: 'lightLavender' as const,
  // LIGHT_ROSE: 'lightRose' as const,
  LIGHT_WEBEX: 'lightWebex' as const,
};

const THEMES = Object.values(THEME_NAMES).map(
  (themeName) => themeProviderUtils.getFullQualifiedTheme(themeName),
);

const DEFAULTS = {
  THEME: themeProviderUtils.getFullQualifiedTheme(THEME_NAMES.DARK_WEBEX) as Theme<typeof THEME_NAMES.DARK_WEBEX>,
};

export { DEFAULTS, THEME_NAMES, THEMES, TAG_NAME };
