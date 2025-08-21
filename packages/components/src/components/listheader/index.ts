import Listheader from './listheader.component';
import { TAG_NAME } from './listheader.constants';
import '../icon';
import '../text';

Listheader.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-listheader']: Listheader;
  }
}

export default Listheader;
