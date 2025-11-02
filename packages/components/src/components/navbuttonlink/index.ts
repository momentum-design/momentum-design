import Navbuttonlink from './navbuttonlink.component';
import { TAG_NAME } from './navbuttonlink.constants';
import '../text';
import '../badge';
import '../icon';
import '../tooltip';

Navbuttonlink.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-navbuttonlink']: Navbuttonlink;
  }
}

export default Navbuttonlink;
