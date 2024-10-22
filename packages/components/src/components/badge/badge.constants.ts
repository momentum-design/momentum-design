import utils from '../../utils/tag-name';
import { BadgeType, BadgeVariant } from './badge.types';

const TAG_NAME = utils.constructTagName('badge');

const DEFAULTS = {
  TYPE: BadgeType.NOTIFICATION,
  SIZE: 1,
  LENGTH_UNIT: 'rem',
  MAX_COUNTER: 99,
  VARIANT: BadgeVariant.SECURE,
  ICON_NAME: 'shape-circle-filled',
  ICON_SIZE: 1,
  NOTIFICATION_ICON_SIZE_IN_REM: 0.75,
};

export {
  TAG_NAME,
  DEFAULTS,
};
