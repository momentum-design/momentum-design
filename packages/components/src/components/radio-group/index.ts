import RadioGroup from './radio-group.component';
import { TAG_NAME } from './radio-group.constants';
import '../text';

RadioGroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-radio-group']: RadioGroup
    }
}

export default RadioGroup;
