import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('avatar');

const AVATAR_TYPE = {
  COUNTER: 'counter',
  ICON: 'icon',
  PHOTO: 'photo',
  TEXT: 'text',
} as const;

const MAX_COUNTER = 99;
const ICON_NAME: IconNames = 'user-regular';

const AVATAR_SIZE = {
  24: 24,
  32: 32,
  48: 48,
  64: 64,
  72: 72,
  88: 88,
  124: 124,
} as const;

const DEFAULTS = {
  TYPE: AVATAR_TYPE.PHOTO,
  SIZE: AVATAR_SIZE[32],
  ICON_NAME,
} as const;

export {
  TAG_NAME,
  DEFAULTS,
  AVATAR_TYPE,
  MAX_COUNTER,
  AVATAR_SIZE,
};
