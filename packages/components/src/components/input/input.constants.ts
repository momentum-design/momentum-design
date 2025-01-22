import utils from '../../utils/tag-name';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

const TAG_NAME = utils.constructTagName('input');

const PREFIX_TEXT_OPTIONS = {
  MAX_LENGTH: 10,
  HELPERTEXT: 'Prefix text should not exceed 10 characters',
  VALIDATION: VALIDATION.ERROR,
};

export { TAG_NAME, PREFIX_TEXT_OPTIONS };
