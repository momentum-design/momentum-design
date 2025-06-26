import '../icon';
import '../staticcheckbox';
import '../statictoggle';
import '../text';
import '../tooltip';
import MenuItemCheckbox from './menuitemcheckbox.component';
import { TAG_NAME } from './menuitemcheckbox.constants';

MenuItemCheckbox.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-menuitemcheckbox']: MenuItemCheckbox;
  }
}

export default MenuItemCheckbox;
