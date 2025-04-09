import NavItemList from './navitemlist.component';
import { TAG_NAME } from './navitemlist.constants';
import '../navitem';

NavItemList.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-navitemlist']: NavItemList
    }
}

export default NavItemList;
