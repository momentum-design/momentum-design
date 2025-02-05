import utils from '../../utils/tag-name';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

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
};

export { TAG_NAME, PREFIX_TEXT_OPTIONS, AUTO_CAPITALIZE, DEFAULTS };
