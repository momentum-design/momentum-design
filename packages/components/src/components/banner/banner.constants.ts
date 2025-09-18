import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('banner');

/**
 * Banner variants
 */
const BANNER_VARIANT = {
  CUSTOM: 'custom',
  INFORMATIONAL: 'informational',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

/**
 * Icon names for variants
 */
const VARIANT_ICON_NAMES = {
  INFORMATIONAL_ICON_NAME: 'info-circle-bold',
  SUCCESS_ICON_NAME: 'check-circle-bold',
  WARNING_ICON_NAME: 'warning-bold',
  ERROR_ICON_NAME: 'error-legacy-bold',
} as const;

/**
 * Default values
 */
const DEFAULTS = {
  VARIANT: BANNER_VARIANT.CUSTOM,
  PREFIX_ICON_SIZE: 1.5,
} as const;

export { TAG_NAME, BANNER_VARIANT, DEFAULTS, VARIANT_ICON_NAMES };
