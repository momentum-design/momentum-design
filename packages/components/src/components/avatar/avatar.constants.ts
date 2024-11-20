import utils from '../../utils/tag-name';
import { PRESENCE_SIZE as AVATAR_SIZE } from '../presence/presence.constants';

const TAG_NAME = utils.constructTagName('avatar');

const AVATAR_TYPE = {
  COUNTER: 'counter',
  ICON: 'icon',
  PHOTO: 'photo',
  TEXT: 'text',
} as const;

const MAX_COUNTER = 99;

const DEFAULTS = {
  TYPE: AVATAR_TYPE.PHOTO,
  SIZE: AVATAR_SIZE.X_SMALL,
  ICON_NAME: 'user-regular',
} as const;

export {
  TAG_NAME,
  DEFAULTS,
  AVATAR_TYPE,
  MAX_COUNTER,
};
