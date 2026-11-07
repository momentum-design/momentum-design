import utils from '../../utils/tag-name';
import { VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('emptystate');

const LAYOUT = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

const SIZE = {
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

const DEFAULTS = {
  LAYOUT: LAYOUT.VERTICAL,
  SIZE: SIZE.MEDIUM,
  HEADING_TAG_NAME: VALID_TEXT_TAGS.H2,
};

export { TAG_NAME, LAYOUT, SIZE, DEFAULTS };
