import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('animation');

const DEFAULTS = {
  NAME: undefined,
  AUTO_PLAY: true,
  LOOP: 'true',
} as const;

export { TAG_NAME, DEFAULTS };
