import type { ValueOf } from '../../utils/types';
import {
  BUTTON_TYPE,
  BUTTON_SIZES,
} from './buttonsimple.constants';

type ButtonSize = ValueOf<typeof BUTTON_SIZES>
type ButtonType = ValueOf<typeof BUTTON_TYPE>

export {
  ButtonSize,
  ButtonType,
};
