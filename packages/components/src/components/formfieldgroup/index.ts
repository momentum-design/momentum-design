import FormfieldGroup from './formfieldgroup.component';
import { TAG_NAME } from './formfieldgroup.constants';
import '../text';

FormfieldGroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-formfieldgroup']: FormfieldGroup
    }
}

export default FormfieldGroup;
