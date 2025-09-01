import '../icon';
import '../text';
import MenuItem from './menuitem.component';
import { TAG_NAME } from './menuitem.constants';

MenuItem.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-menuitem']: MenuItem;
  }
}

export default MenuItem;
