import MenuSection from './menusection.component';
import { TAG_NAME } from './menusection.constants';

MenuSection.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-menusection']: MenuSection
    }
}

export default MenuSection;
