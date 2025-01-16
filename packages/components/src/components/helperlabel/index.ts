import Helperlabel from './helperlabel.component';
import { TAG_NAME } from './helperlabel.constants';
import '../icon';
import '../text';

Helperlabel.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-helperlabel']: Helperlabel;
  }
}

export default Helperlabel;
