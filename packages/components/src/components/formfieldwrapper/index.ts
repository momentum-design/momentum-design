import '../button';
import '../icon';
import '../text';
import '../toggletip';
import FormfieldWrapper from './formfieldwrapper.component';
import { TAG_NAME } from './formfieldwrapper.constants';

FormfieldWrapper.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-formfieldwrapper']: FormfieldWrapper;
  }
}

export default FormfieldWrapper;
