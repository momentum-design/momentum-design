import '../icon';
import '../input';
import '../popover';
import Combobox from './combobox.component';
import { TAG_NAME } from './combobox.constants';

Combobox.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-combobox']: Combobox;
  }
}

export default Combobox;
