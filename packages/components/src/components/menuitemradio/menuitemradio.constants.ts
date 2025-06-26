import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menuitemradio');

const INDICATOR = {
  RADIO: 'radio',
  CHECKMARK: 'checkmark',
} as const;

const DEFAULTS = {
  INDICATOR: INDICATOR.RADIO,
} as const;

export { TAG_NAME, INDICATOR, DEFAULTS };
