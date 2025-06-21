import '../button';
import '../icon';
import '../text';
import '../toggletip';
import FormfieldGroup from './formfieldgroup.component';
import { TAG_NAME } from './formfieldgroup.constants';

FormfieldGroup.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-formfieldgroup']: FormfieldGroup;
  }
}

export default FormfieldGroup;
