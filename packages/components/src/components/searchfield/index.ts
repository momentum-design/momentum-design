import Searchfield from './searchfield.component';
import { TAG_NAME } from './searchfield.constants';
import '../button';
import '../icon';
import '../text';

Searchfield.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-searchfield']: Searchfield;
  }
}

export default Searchfield;
