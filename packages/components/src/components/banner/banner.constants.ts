import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

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
  INFORMATIONAL_ICON_NAME: 'info-circle-bold' as Extract<IconNames, 'info-circle-bold'>,
  SUCCESS_ICON_NAME: 'check-circle-bold' as Extract<IconNames, 'check-circle-bold'>,
  WARNING_ICON_NAME: 'warning-bold' as Extract<IconNames, 'warning-bold'>,
  ERROR_ICON_NAME: 'error-legacy-bold' as Extract<IconNames, 'error-legacy-bold'>,
} as const;

/**
 * Default values
 */
const DEFAULTS = {
  VARIANT: BANNER_VARIANT.CUSTOM,
  PREFIX_ICON_SIZE: 1.25,
} as const;

export { BANNER_VARIANT, DEFAULTS, TAG_NAME, VARIANT_ICON_NAMES };
