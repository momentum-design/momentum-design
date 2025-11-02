import Navbutton from './navbutton.component';
import { TAG_NAME } from './navbutton.constants';
import '../text';
import '../badge';
import '../icon';
import '../tooltip';

Navbutton.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-navbutton']: Navbutton;
  }
}

export default Navbutton;
