import Radio from './radio.component';
import { TAG_NAME } from './radio.constants';
import '../staticradio';
import '../tooltip';
import '../text';
import '../icon';

Radio.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-radio']: Radio;
  }
}

export default Radio;
