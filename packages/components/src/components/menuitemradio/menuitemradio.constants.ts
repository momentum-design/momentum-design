import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menuitemradio');

const ARIA_CHECKED_STATES = {
  TRUE: 'true',
  FALSE: 'false',
} as const;

export { TAG_NAME, ARIA_CHECKED_STATES };
