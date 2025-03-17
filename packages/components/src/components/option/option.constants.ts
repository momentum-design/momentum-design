import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const SELECTED_ICON_NAME: Extract<IconNames, 'check-bold'> = 'check-bold';

const TAG_NAME = utils.constructTagName('option');

export { SELECTED_ICON_NAME, TAG_NAME };
