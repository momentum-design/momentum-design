import NavMenuItem from './navmenuitem.component';
import { TAG_NAME } from './navmenuitem.constants';
import '../text';
import '../badge';
import '../icon';
import '../tooltip';

NavMenuItem.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-navmenuitem']: NavMenuItem;
  }
}

export default NavMenuItem;
