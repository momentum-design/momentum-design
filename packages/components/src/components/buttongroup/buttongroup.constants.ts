import utils from '../../utils/tag-name';
import { BUTTON_VARIANTS } from '../button/button.constants';

const TAG_NAME = utils.constructTagName('buttongroup');

const BUTTON_GROUP_SIZE = {
  40: 40,
  32: 32,
  28: 28,
  24: 24,
} as const;

const BUTTON_GROUP_ORIENTATION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

const DEFAULTS = {
  SIZE: BUTTON_GROUP_SIZE[28],
  VARIANT: BUTTON_VARIANTS.PRIMARY,
  ORIENTATION: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
};

export { TAG_NAME, DEFAULTS, BUTTON_GROUP_SIZE, BUTTON_GROUP_ORIENTATION };
