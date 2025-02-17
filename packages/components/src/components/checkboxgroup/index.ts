import CheckboxGroup from './checkboxgroup.component';
import { TAG_NAME } from './checkboxgroup.constants';

CheckboxGroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-checkboxgroup']: CheckboxGroup
    }
}

export default CheckboxGroup;
