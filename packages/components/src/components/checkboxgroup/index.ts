import Checkboxgroup from './checkboxgroup.component';
import { TAG_NAME } from './checkboxgroup.constants';
import '../text';
import '../checkbox';

Checkboxgroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-checkboxgroup']: Checkboxgroup
    }
}

export default Checkboxgroup;
