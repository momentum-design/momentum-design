import utils from '../../utils/tag-name';
import { COLOR } from '../modalcontainer/modalcontainer.constants';

const TAG_NAME = utils.constructTagName('popover');

const POPOVER_PLACEMENT = {
  LEFT_START: 'left-start',
  LEFT: 'left',
  LEFT_END: 'left-end',
  RIGHT_START: 'right-start',
  RIGHT: 'right',
  RIGHT_END: 'right-end',
  TOP_START: 'top-start',
  TOP: 'top',
  TOP_END: 'top-end',
  BOTTOM_START: 'bottom-start',
  BOTTOM: 'bottom',
  BOTTOM_END: 'bottom-end',
} as const;

const TRIGGER = {
  CLICK: 'click',
  MOUSEENTER: 'mouseenter',
  FOCUSIN: 'focusin',
  MANUAL: 'manual',
} as const;

const DEFAULTS = {
  PLACEMENT: POPOVER_PLACEMENT.BOTTOM,
  TRIGGER: TRIGGER.CLICK,
  COLOR: COLOR.TONAL,
  OFFSET: 4,
  VISIBLE: false,
  ARROW: false,
  CLOSE_BUTTON: false,
  FOCUS_TRAP: false,
  INTERACTIVE: false,
  PREVENT_SCROLL: false,
  HIDE_ON_ESCAPE: false,
  HIDE_ON_BLUR: false,
  HIDE_ON_CLICK_OUTSIDE: false,
  FOCUS_BACK: false,
  BACKDROP: false,
  FLIP: true,
  SIZE: false,
  DELAY: '0,0',
  ROLE: 'dialog',
  Z_INDEX: 1000,
} as const;

export { TAG_NAME, POPOVER_PLACEMENT, TRIGGER, DEFAULTS };
