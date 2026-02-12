import '../button';
import '../icon';
import '../popover';
import '../text';
import '../toggletip';
import TimePicker from './timepicker.component';
import { TAG_NAME } from './timepicker.constants';

TimePicker.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-timepicker']: TimePicker;
  }
}

export default TimePicker;
