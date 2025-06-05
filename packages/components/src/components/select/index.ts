import '../button';
import '../icon';
import '../popover';
import '../text';
import '../toggletip';
import Select from './select.component';
import { TAG_NAME } from './select.constants';

Select.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-select']: Select
    }
}

export default Select;
