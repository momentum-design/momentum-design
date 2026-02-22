import '../button';
import '../calendar';
import '../icon';
import '../popover';
import '../text';
import '../toggletip';
import DatePicker from './datepicker.component';
import { TAG_NAME } from './datepicker.constants';

DatePicker.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-datepicker']: DatePicker;
  }
}

export default DatePicker;
