import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('tablist');

const KEYCODES = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
};

const ARROW_BUTTON_DIRECTION = {
  FORWARD: 'forward',
  BACKWARD: 'backward',
};

export { TAG_NAME, KEYCODES, ARROW_BUTTON_DIRECTION };
