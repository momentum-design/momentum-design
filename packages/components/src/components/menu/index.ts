import Menu from './menu.component';
import { TAG_NAME } from './menu.constants';
import '../divider';
import '../listitem';

Menu.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-menu']: Menu
    }
}

export default Menu;
