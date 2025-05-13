import SideNavigation from './sidenavigation.component';
import { TAG_NAME } from './sidenavigation.constants';
import '../text';
import '../button';

SideNavigation.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-sidenavigation']: SideNavigation
    }
}

export default SideNavigation;
