import NavItem from './navitem.component';
import { TAG_NAME } from './navitem.constants';
import '../text';
import '../badge';
import '../icon';
import '../tooltip';

NavItem.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-navitem']: NavItem
    }
}

export default NavItem;
