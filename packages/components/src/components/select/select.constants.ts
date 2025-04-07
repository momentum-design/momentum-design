import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('select');
const ARROW_ICON = {
  ARROW_UP: 'arrow-up-bold' as Extract<IconNames, 'arrow-up-bold'>,
  ARROW_DOWN: 'arrow-down-bold' as Extract<IconNames, 'arrow-down-bold'>,
} as const;

export { ARROW_ICON, TAG_NAME };
