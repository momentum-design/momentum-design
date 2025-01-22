import FormfieldWrapper from './formfieldwrapper.component';
import { TAG_NAME } from './formfieldwrapper.constants';
import '../icon';
import '../text';

FormfieldWrapper.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-formfieldwrapper']: FormfieldWrapper;
  }
}

export default FormfieldWrapper;
