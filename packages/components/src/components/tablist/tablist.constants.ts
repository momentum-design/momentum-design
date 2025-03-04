import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('tablist');

const KEYCODES = {
  ENTER: 'Enter',
  SPACE: 'Space',
  RIGHT: 'ArrowRight',
  LEFT: 'ArrowLeft',
  END: 'End',
  HOME: 'Home',
  TAB: 'Tab',
};

const SCROLL_BUTTON_OFFSET = 15;

const SCROLL_LEFT_DISTANCE = -100;

const SCROLL_RIGHT_DISTANCE = 100;

export { TAG_NAME, KEYCODES, SCROLL_BUTTON_OFFSET, SCROLL_LEFT_DISTANCE, SCROLL_RIGHT_DISTANCE };
