import MenuBar from './menubar.component';
import { TAG_NAME } from './menubar.constants';

MenuBar.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-menubar']: MenuBar
    }
}

export default MenuBar;
