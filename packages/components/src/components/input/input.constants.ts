import utils from '../../utils/tag-name';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { TYPE } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('input');

const AUTO_CAPITALIZE = {
  OFF: 'off',
  NONE: 'none',
  ON: 'on',
  SENTENCES: 'sentences',
  WORDS: 'words',
  CHARACTERS: 'characters',
} as const;

const PREFIX_TEXT_OPTIONS = {
  MAX_LENGTH: 10,
  HELPERTEXT: 'Prefix text should not exceed 10 characters',
  VALIDATION: VALIDATION.ERROR,
};

const DEFAULTS = {
  VALIDATION: VALIDATION.DEFAULT,
  ICON_SIZE_VALUE: 1,
  ICON_SIZE_UNIT: 'rem',
  CLEAR_BUTTON_ICON: 'cancel-bold',
  CLEAR_BUTTON_VARIANT: BUTTON_VARIANTS.TERTIARY,
  CLEAR_BUTTON_SIZE: ICON_BUTTON_SIZES[20],
  PREFIX_TEXT_TYPE: TYPE.BODY_MIDSIZE_REGULAR,
};

export { TAG_NAME, PREFIX_TEXT_OPTIONS, AUTO_CAPITALIZE, DEFAULTS };
