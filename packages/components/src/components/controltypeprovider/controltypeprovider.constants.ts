import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('controltypeprovider');

const DEFAULTS = {
  CONTROL_TYPE: 'uncontrolled',
} as const;

const VALID_VALUES = ['controlled', 'uncontrolled'] as const;

export { TAG_NAME, DEFAULTS, VALID_VALUES };
