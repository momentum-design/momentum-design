import utils from '../../utils/tag-name';
import type { FontType } from './text.types';

const TAG_NAME = utils.constructTagName('text');

const DEFAULTS = {
  TYPE: 'body-regular' as const,
};

const VALUES: {TYPE: Array<FontType>} = {
  TYPE: [
    'heading-1',
    'heading-2',
    'heading-3',
    'heading-4',
    'heading-5',
    'heading-6',
    'heading-7',
    'body-large',
    'body-regular',
    'body-small',
    'image-title',
    'label',
  ],
};

export { TAG_NAME, DEFAULTS, VALUES };
