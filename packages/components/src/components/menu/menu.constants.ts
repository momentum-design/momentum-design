import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menu');

const HEADER_ARROW = {
  NONE: 'none',
  LEFT: 'left',
  RIGHT: 'right',
} as const;

const DEFAULTS = {
  HEADER_ARROW: HEADER_ARROW.NONE,
  HEADER_DISABLED: false,
  FOOTER: false,
  COUNTER: false,
  COUNTER_NUMBEWR: 0,
  CLEAR_ALL: false,
  CLEAR_ALL_TEXT: 'Clear all',
  SAVE_CANCEL: false,
  SAVE_TEXT: 'Save',
  CANCEL_TEXT: 'Cancel',
} as const;

export { TAG_NAME, HEADER_ARROW, DEFAULTS };
