import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menusection');

const ARIA_CHECKED_STATES = {
  TRUE: 'true',
  FALSE: 'false',
} as const;

const DEFAULTS = {
  ROLE: 'group',
} as const;

export { DEFAULTS, ARIA_CHECKED_STATES, TAG_NAME };
