import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('bullet');

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export { TAG_NAME, SIZE };
