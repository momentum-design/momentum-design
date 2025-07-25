import Selectlistbox from './selectlistbox.component';
import { TAG_NAME } from './selectlistbox.constants';

Selectlistbox.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-selectlistbox']: Selectlistbox;
  }
}

export default Selectlistbox;
