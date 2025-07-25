import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('accordiongroup');

const SIZE = {
  SMALL: 'small',
  LARGE: 'large',
} as const;

const VARIANT = {
  BORDERLESS: 'borderless',
  CONTAINED: 'contained',
  STACKED: 'stacked',
} as const;

const DEFAULTS = {
  SIZE: SIZE.SMALL,
  VARIANT: VARIANT.STACKED,
} as const;

export { DEFAULTS, SIZE, VARIANT, TAG_NAME };
