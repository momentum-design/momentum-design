import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('chip');

const COLOR = {
  DEFAULT: 'default',
  COBALT: 'cobalt',
  GOLD: 'gold',
  LIME: 'lime',
  MINT: 'mint',
  PINK: 'pink',
  PURPLE: 'purple',
  SLATE: 'slate',
  VIOLET: 'violet',
};

const DEFAULTS = {
  COLOR: COLOR.DEFAULT,
};
export { TAG_NAME, COLOR, DEFAULTS };
