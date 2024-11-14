/* eslint-disable implicit-arrow-linebreak */
import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('themeprovider');

const DEFAULTS = {
  THEMECLASS: 'mds-theme-stable-darkWebex' as const,
} as const;

export { DEFAULTS, TAG_NAME };
