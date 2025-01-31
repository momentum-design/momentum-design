import Tab from './tab.component';
import { TAG_NAME } from './tab.constants';
import '../icon';

Tab.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-tab']: Tab
    }
}

export default Tab;
