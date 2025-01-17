import { SIZE as PRESENCE_SIZE } from '../presence/presence.constants';
import type { PresenceSize } from '../presence/presence.types';
import { TYPE as FONT_TYPE } from '../text/text.constants';
import type { TextType } from '../text/text.types';
import { AVATAR_SIZE } from './avatar.constants';
import type { AvatarSize } from './avatar.types';

const getPresenceSize = (size: AvatarSize): PresenceSize => {
  const avatarPresenceSizeMap: Record<AvatarSize, PresenceSize> = {
    [AVATAR_SIZE[124]]: PRESENCE_SIZE.XX_LARGE,
    [AVATAR_SIZE[88]]: PRESENCE_SIZE.X_LARGE,
    [AVATAR_SIZE[72]]: PRESENCE_SIZE.LARGE,
    [AVATAR_SIZE[64]]: PRESENCE_SIZE.MIDSIZE,
    [AVATAR_SIZE[48]]: PRESENCE_SIZE.SMALL,
    [AVATAR_SIZE[32]]: PRESENCE_SIZE.X_SMALL,
    [AVATAR_SIZE[24]]: PRESENCE_SIZE.XX_SMALL,
  };
  return avatarPresenceSizeMap[size] || PRESENCE_SIZE.X_SMALL; // default size of presence
};

const getAvatarIconSize = (size: AvatarSize): number => {
  const avatarIconSizeMap: Record<AvatarSize, number> = {
    [AVATAR_SIZE[124]]: 4.75,
    [AVATAR_SIZE[88]]: 3,
    [AVATAR_SIZE[72]]: 2.5,
    [AVATAR_SIZE[64]]: 2.25,
    [AVATAR_SIZE[48]]: 1.75,
    [AVATAR_SIZE[32]]: 1.25,
    [AVATAR_SIZE[24]]: 1,
  };
  return avatarIconSizeMap[size] || 1.25; // default size of icon
};

const getAvatarTextFontSize = (size: AvatarSize): TextType => {
  const avatarTextFontSizeMap: Record<AvatarSize, TextType> = {
    [AVATAR_SIZE[124]]: FONT_TYPE.HEADING_XLARGE_MEDIUM,
    [AVATAR_SIZE[88]]: FONT_TYPE.HEADING_LARGE_MEDIUM,
    [AVATAR_SIZE[72]]: FONT_TYPE.HEADING_MIDSIZE_MEDIUM,
    [AVATAR_SIZE[64]]: FONT_TYPE.HEADING_SMALL_MEDIUM,
    [AVATAR_SIZE[48]]: FONT_TYPE.HEADING_SMALL_MEDIUM,
    [AVATAR_SIZE[32]]: FONT_TYPE.BODY_MIDSIZE_MEDIUM,
    [AVATAR_SIZE[24]]: FONT_TYPE.BODY_SMALL_MEDIUM,
  };
  return avatarTextFontSizeMap[size] || FONT_TYPE.BODY_MIDSIZE_MEDIUM; // default size of text font
};

export {
  getAvatarIconSize,
  getAvatarTextFontSize,
  getPresenceSize,
};
