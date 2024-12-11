import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { SIZE as AVATAR_SIZE } from '../presence/presence.constants';

const TAG_NAME = utils.constructTagName('avatar');

const AVATAR_TYPE = {
  COUNTER: 'counter',
  ICON: 'icon',
  PHOTO: 'photo',
  TEXT: 'text',
} as const;

const MAX_COUNTER = 99;
const ICON_NAME: IconNames = 'user-regular';

const DEFAULTS = {
  TYPE: AVATAR_TYPE.PHOTO,
  SIZE: AVATAR_SIZE.X_SMALL,
  ICON_NAME,
} as const;

export {
  TAG_NAME,
  DEFAULTS,
  AVATAR_TYPE,
  MAX_COUNTER,
};
