import '../button';
import '../text';
import Calendar from './calendar.component';
import { TAG_NAME } from './calendar.constants';

Calendar.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-calendar']: Calendar;
  }
}

export default Calendar;
