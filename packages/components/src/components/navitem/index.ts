// eslint-disable-next-line import/no-cycle
import NavItem from './navitem.component';
import { TAG_NAME } from './navitem.constants';
import '../marker';
import '../text';
import '../badge';
import '../button';

NavItem.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-navitem']: NavItem
    }
}

export default NavItem;
