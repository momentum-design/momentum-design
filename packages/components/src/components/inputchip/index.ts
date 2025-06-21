import InputChip from './inputchip.component';
import { TAG_NAME } from './inputchip.constants';
import '../text';
import '../icon';
import '../button';

InputChip.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-inputchip']: InputChip;
  }
}

export default InputChip;
