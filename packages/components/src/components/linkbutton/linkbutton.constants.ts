import { ROLE } from '../../utils/roles';
import utils from '../../utils/tag-name';
import { DEFAULTS as BUTTON_DEFAULTS } from '../button/button.constants';
import { DEFAULTS as LINKSIMPLE_DEFAULTS } from '../linksimple/linksimple.constants';

const TAG_NAME = utils.constructTagName('linkbutton');

const LINKBUTTON_SIZES = {
  12: 12,
  14: 14,
  16: 16,
} as const;

const DEFAULTS = {
  SIZE: LINKBUTTON_SIZES[16],
  TYPE: BUTTON_DEFAULTS.TYPE,
  ROLE: ROLE.BUTTON,
  INLINE: LINKSIMPLE_DEFAULTS.INLINE,
  INVERTED: LINKSIMPLE_DEFAULTS.INVERTED,
};

export { TAG_NAME, LINKBUTTON_SIZES, DEFAULTS };
