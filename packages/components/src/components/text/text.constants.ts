import utils from '../../utils/tag-name';
import type { FontType } from './text.types';

const TAG_NAME = utils.constructTagName('text');

const DEFAULTS = {
  TYPE: 'body-large-regular' as const,
  TAG_NAME: 'p' as const,
};

const VALUES: {TYPE: Array<FontType>} = {
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
};

export { TAG_NAME, DEFAULTS, VALUES };
