import utils from '../../utils/tag-name';
import { ORIENTATION } from '../stepperconnector/stepperconnector.constants';
import { VARIANT } from '../stepperitem/stepperitem.constants';

const TAG_NAME = utils.constructTagName('stepper');

const DEFAULTS = {
  ORIENTATION: ORIENTATION.HORIZONTAL,
  VARIANT: VARIANT.INLINE,
};

export { TAG_NAME, DEFAULTS };
