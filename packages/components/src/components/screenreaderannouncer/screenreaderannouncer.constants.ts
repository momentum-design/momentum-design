import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('screenreaderannouncer');

const ARIA_LIVE_VALUES = {
  ASSERTIVE: 'assertive',
  POLITE: 'polite',
  OFF: 'off',
} as const;

const DEFAULTS = {
  DELAY: 150,
  TIMEOUT: 20_000,
} as const;

export { ARIA_LIVE_VALUES, DEFAULTS, TAG_NAME };
