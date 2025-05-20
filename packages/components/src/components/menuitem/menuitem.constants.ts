import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menuitem');

const ARROW_ICONS = {
  LEFT: 'arrow-left-bold',
  RIGHT: 'arrow-right-bold',
} as const;

const ARROW_DIRECTIONS = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
} as const;

const ARROW_POSITIONS = {
  LEADING: 'leading',
  TRAILING: 'trailing',
} as const;

export { TAG_NAME, ARROW_ICONS, ARROW_DIRECTIONS, ARROW_POSITIONS };
