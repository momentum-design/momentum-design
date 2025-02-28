import RadioGroup from './radiogroup.component';
import { TAG_NAME } from './radiogroup.constants';

RadioGroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-radio-group']: RadioGroup
    }
}

export default RadioGroup;
