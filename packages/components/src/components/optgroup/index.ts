import Optgroup from './optgroup.component';
import { TAG_NAME } from './optgroup.constants';
import '../text';

Optgroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-optgroup']: Optgroup
    }
}

export default Optgroup;
