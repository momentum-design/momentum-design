import '../staticradio';
import '../text';
import '../tooltip';
import MenuItemRadio from './menuitemradio.component';
import { TAG_NAME } from './menuitemradio.constants';

MenuItemRadio.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-menuitemradio']: MenuItemRadio
    }
}

export default MenuItemRadio;
