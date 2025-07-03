import utils from '../../utils/tag-name';
import { IconNames } from '../icon/icon.types';

export const PASSWORD_VISIBILITY_ICONS = {
  HIDE_BOLD: 'hide-bold' as Extract<IconNames, 'hide-bold'>,
  SHOW_BOLD: 'show-bold' as Extract<IconNames, 'show-bold'>,
} as const;

export const TAG_NAME = utils.constructTagName('password');
