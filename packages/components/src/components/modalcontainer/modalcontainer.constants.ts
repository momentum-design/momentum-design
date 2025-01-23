import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('modalcontainer');

const COLOR = {
  TONAL: 'tonal',
  CONTRAST: 'contrast',
} as const;

const ELEVATION = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
} as const;

const ROLE = {
  DIALOG: 'dialog',
  ALERT_DIALOG: 'alertdialog',
} as const;

const DEFAULTS = {
  COLOR: COLOR.TONAL,
  ELEVATION: ELEVATION[0],
  ROLE: ROLE.DIALOG,
  CHILDREN: 'Lorem ipsum dolor sit amet',
} as const;

export { TAG_NAME, COLOR, DEFAULTS, ELEVATION, ROLE };
