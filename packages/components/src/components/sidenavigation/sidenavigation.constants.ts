import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('sidenavigation');

const VARIANTS = {
  FIXED_EXPANDED: 'fixed-expanded',
  FIXED_COLLAPSED: 'fixed-collapsed',
  FLEXIBLE: 'flexible',
  HIDDEN: 'hidden',
};

const DEFAULTS = {
  VARIANT: VARIANTS.FIXED_EXPANDED,
  ROLE: 'navigation',
} as const;

export { DEFAULTS, VARIANTS, TAG_NAME };
