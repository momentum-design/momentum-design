import utils from '../../utils/tag-name';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

const TAG_NAME = utils.constructTagName('progressbar');

const VARIANT = {
  DEFAULT: 'default',
  INLINE: 'inline',
} as const;

const DEFAULTS = {
  VARIANT: VARIANT.DEFAULT,
  VALIDATION: VALIDATION.DEFAULT,
} as const;

export { TAG_NAME, VARIANT, VALIDATION, DEFAULTS };
