import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('screenreaderannouncer');

const ARIA_LIVE_VALUES = {
  ASSERTIVE: 'assertive',
  POLITE: 'polite',
  OFF: 'off',
} as const;

const DEFAULTS = {
  ARIA_LIVE: ARIA_LIVE_VALUES.POLITE,
  DELAY: 150,
  IDENTITY: 'mdc-screenreaderannouncer-identity',
  TIMEOUT: 20_000,
  DEBOUNCE: 500,
} as const;

export { ARIA_LIVE_VALUES, DEFAULTS, TAG_NAME };
