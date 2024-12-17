import utils from '../../utils/tag-name';
import { TAG_NAME as BUTTON_TAG } from '../button/button.constants';
import { TAG_NAME as TEXT_TAG } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('divider');

const DIVIDER_ORIENTATION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

const DIVIDER_VARIANT = {
  SOLID: 'solid',
  GRADIENT: 'gradient',
} as const;

/**
 * Direction types for both the arrow and button component.
 * These directions are dependent on the divider's orientation.
 */
const DIRECTIONS = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
} as const;

const ARROW_ICONS = {
  UP: 'arrow-up-regular',
  DOWN: 'arrow-down-regular',
  LEFT: 'arrow-left-regular',
  RIGHT: 'arrow-right-regular',
} as const;

const DEFAULTS = {
  ORIENTATION: DIVIDER_ORIENTATION.HORIZONTAL,
  VARIANT: DIVIDER_VARIANT.SOLID,
  ARROW_DIRECTION: DIRECTIONS.NEGATIVE,
  BUTTON_DIRECTION: DIRECTIONS.NEGATIVE,
} as const;

export {
  TAG_NAME,
  DEFAULTS,
  DIVIDER_VARIANT,
  DIVIDER_ORIENTATION,
  DIRECTIONS,
  BUTTON_TAG,
  TEXT_TAG,
  ARROW_ICONS,
};
