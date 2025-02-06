import Checkbox from './checkbox.component';
import { TAG_NAME } from './checkbox.constants';

Checkbox.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-checkbox']: Checkbox
    }
}

export default Checkbox;
