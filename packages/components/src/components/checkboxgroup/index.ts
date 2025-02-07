import CheckboxGroup from './checkboxgroup.component';
import { TAG_NAME } from './checkboxgroup.constants';
import '../checkbox';
import '../text';

CheckboxGroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-checkboxgroup']: CheckboxGroup
    }
}

export default CheckboxGroup;
