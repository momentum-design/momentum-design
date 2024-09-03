import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('badge');

const WARNING_ICON_NAME = 'warning-badge-filled';

const DEFAULTS = {
  TYPE: 'regular' as const,
  SCALE: 1,
  LENGTH_UNIT: 'rem',
};

export { TAG_NAME, DEFAULTS, WARNING_ICON_NAME };
