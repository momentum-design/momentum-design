import utils from '../../utils/tag-name';
import { ROLE } from '../../utils/roles';

const TAG_NAME = utils.constructTagName('buttonsimple');

const BUTTON_SIZES = {
  12: 12,
  14: 14,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  40: 40,
  48: 48,
  52: 52,
  64: 64,
  72: 72,
  88: 88,
  124: 124,
} as const;

const BUTTON_TYPE = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
} as const;

const DEFAULTS = {
  SIZE: BUTTON_SIZES[32],
  TYPE: BUTTON_TYPE.BUTTON,
  ROLE: ROLE.BUTTON,
  ARIA_STATE_KEY: 'aria-pressed',
} as const;

export { TAG_NAME, DEFAULTS, BUTTON_TYPE, BUTTON_SIZES };
