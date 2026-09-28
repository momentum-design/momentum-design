import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('aiassistantprompt');

const DEFAULTS = {
  ROWS: 1,
} as const;

export { TAG_NAME, DEFAULTS };
