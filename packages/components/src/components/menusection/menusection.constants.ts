import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menusection');

const ARIA_CHECKED_STATES = {
  TRUE: 'true',
  FALSE: 'false',
} as const;

export { ARIA_CHECKED_STATES, TAG_NAME };
