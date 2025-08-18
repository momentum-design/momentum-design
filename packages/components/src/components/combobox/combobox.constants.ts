import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('combobox');

const ICON_NAME = {
  ARROW_UP: 'arrow-up-bold' as Extract<IconNames, 'arrow-up-bold'>,
  ARROW_DOWN: 'arrow-down-bold' as Extract<IconNames, 'arrow-down-bold'>,
} as const;

const TRIGGER_ID = 'combobox-triggerid';
const LISTBOX_ID = 'combobox-listbox';

export { TAG_NAME, ICON_NAME, TRIGGER_ID, LISTBOX_ID };
