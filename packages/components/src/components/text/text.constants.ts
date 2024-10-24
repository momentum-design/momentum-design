import utils from '../../utils/tag-name';
import type { FontType, ValidTextTags } from './text.types';

const TAG_NAME = utils.constructTagName('text');

const VALUES: {TYPE: Array<FontType>, TAGNAME: Array<ValidTextTags>} = {
  TYPE: [
    'body-small-regular',
    'body-small-medium',
    'body-small-bold',
    'body-midsize-regular',
    'body-midsize-medium',
    'body-midsize-bold',
    'body-large-regular',
    'body-large-medium',
    'body-large-bold',
    'body-small-regular-underline',
    'body-small-medium-underline',
    'body-midsize-regular-underline',
    'body-midsize-medium-underline',
    'body-large-regular-underline',
    'body-large-medium-underline',
    'heading-small-regular',
    'heading-small-medium',
    'heading-small-bold',
    'heading-midsize-regular',
    'heading-midsize-medium',
    'heading-midsize-bold',
    'heading-large-regular',
    'heading-large-medium',
    'heading-large-bold',
    'heading-xlarge-regular',
    'heading-xlarge-medium',
    'heading-xlarge-bold',
    'headline-small-light',
    'headline-small-regular',
  ],
  TAGNAME: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'small',
    'span',
    'div',
  ],
};

const DEFAULTS = {
  TYPE: 'body-midsize-regular' as FontType,
  TEXT_ELEMENT_TAGNAME: 'p' as ValidTextTags,
  CSS_PART_TEXT: 'text',
};

export { TAG_NAME, DEFAULTS, VALUES };
