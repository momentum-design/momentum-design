import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('tablist');

const KEYCODES = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
};

type ARROW_BUTTON_DIRECTION = 'forward' | 'backward';

export { TAG_NAME, KEYCODES, type ARROW_BUTTON_DIRECTION };
