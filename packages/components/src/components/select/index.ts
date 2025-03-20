import Select from './select.component';
import { TAG_NAME } from './select.constants';
import '../popover';
import '../text';
import '../icon';

Select.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-select']: Select
    }
}

export default Select;
