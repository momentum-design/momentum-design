import { SIZE as AVATAR_SIZE } from '../presence/presence.constants';
import { TYPE as FONT_TYPE } from '../text/text.constants';
import type { TextType } from '../text/text.types';
import type { AvatarSize } from './avatar.types';

const getAvatarIconSize = (size: AvatarSize): number => {
  switch (size) {
    case AVATAR_SIZE.XX_LARGE: return 4.75;
    case AVATAR_SIZE.X_LARGE: return 3;
    case AVATAR_SIZE.LARGE: return 2.5;
    case AVATAR_SIZE.MIDSIZE: return 2.25;
    case AVATAR_SIZE.SMALL: return 1.75;
    case AVATAR_SIZE.XX_SMALL: return 1;
    case AVATAR_SIZE.X_SMALL:
    default:
      return 1.25;
  }
};

const getAvatarTextFontSize = (size: AvatarSize): TextType => {
  switch (size) {
    case AVATAR_SIZE.XX_LARGE: return FONT_TYPE.HEADING_XLARGE_MEDIUM;
    case AVATAR_SIZE.X_LARGE: return FONT_TYPE.HEADING_LARGE_MEDIUM;
    case AVATAR_SIZE.LARGE: return FONT_TYPE.HEADING_MIDSIZE_MEDIUM;
    case AVATAR_SIZE.MIDSIZE:
    case AVATAR_SIZE.SMALL:
      return FONT_TYPE.HEADING_SMALL_MEDIUM;
    case AVATAR_SIZE.XX_SMALL: return FONT_TYPE.BODY_SMALL_MEDIUM;
    case AVATAR_SIZE.X_SMALL:
    default:
      return FONT_TYPE.BODY_MIDSIZE_MEDIUM;
  }
};

export {
  getAvatarIconSize,
  getAvatarTextFontSize,
};