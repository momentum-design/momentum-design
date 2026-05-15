import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('sidenavigation');

const VARIANTS = {
  FIXED_EXPANDED: 'fixed-expanded',
  FIXED_COLLAPSED: 'fixed-collapsed',
  FLEXIBLE: 'flexible',
  FLEXIBLE_ON_HOVER: 'flexible-on-hover',
  HIDDEN: 'hidden',
};

const SUBMENU_TYPES = {
  FLYOUT: 'flyout',
  DROPDOWN: 'dropdown',
};

const DEFAULTS = {
  VARIANT: VARIANTS.FLEXIBLE,
  SUBMENU_TYPE: SUBMENU_TYPES.FLYOUT,
} as const;

export { DEFAULTS, VARIANTS, SUBMENU_TYPES, TAG_NAME };
