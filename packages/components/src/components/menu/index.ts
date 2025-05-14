import '../text';
import Menu from './menu.component';
import { TAG_NAME } from './menu.constants';

Menu.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-menu']: Menu
    }
}

export default Menu;
