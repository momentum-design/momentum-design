import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('marker');

const MARKER_VARIANTS = {
  SOLID: 'solid',
  STRIPED: 'striped',
} as const;

export { TAG_NAME, MARKER_VARIANTS };
