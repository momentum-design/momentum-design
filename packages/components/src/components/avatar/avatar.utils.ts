import { SIZE as AVATAR_SIZE } from '../presence/presence.constants';
import { TYPE as FONT_TYPE } from '../text/text.constants';
import type { TextType } from '../text/text.types';
import type { AvatarSize } from './avatar.types';

const getAvatarIconSize = (size: AvatarSize): number => {
  const avatarIconSizeMap: Record<AvatarSize, number> = {
    [AVATAR_SIZE.XX_LARGE]: 4.75,
    [AVATAR_SIZE.X_LARGE]: 3,
    [AVATAR_SIZE.LARGE]: 2.5,
    [AVATAR_SIZE.MIDSIZE]: 2.25,
    [AVATAR_SIZE.SMALL]: 1.75,
    [AVATAR_SIZE.X_SMALL]: 1.25,
    [AVATAR_SIZE.XX_SMALL]: 1,
  };
  return avatarIconSizeMap[size] || 1.25; // default size of icon
};

const getAvatarTextFontSize = (size: AvatarSize): TextType => {
  const avatarTextFontSizeMap: Record<AvatarSize, TextType> = {
    [AVATAR_SIZE.XX_LARGE]: FONT_TYPE.HEADING_XLARGE_MEDIUM,
    [AVATAR_SIZE.X_LARGE]: FONT_TYPE.HEADING_LARGE_MEDIUM,
    [AVATAR_SIZE.LARGE]: FONT_TYPE.HEADING_MIDSIZE_MEDIUM,
    [AVATAR_SIZE.MIDSIZE]: FONT_TYPE.HEADING_SMALL_MEDIUM,
    [AVATAR_SIZE.SMALL]: FONT_TYPE.HEADING_SMALL_MEDIUM,
    [AVATAR_SIZE.XX_SMALL]: FONT_TYPE.BODY_SMALL_MEDIUM,
    [AVATAR_SIZE.X_SMALL]: FONT_TYPE.BODY_MIDSIZE_MEDIUM,
  };
  return avatarTextFontSizeMap[size] || FONT_TYPE.BODY_MIDSIZE_MEDIUM; // default size of text font
};

export {
  getAvatarIconSize,
  getAvatarTextFontSize,
};
