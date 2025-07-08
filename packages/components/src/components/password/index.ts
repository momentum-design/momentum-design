import '../button';
import '../icon';
import '../text';
import '../toggletip';

import Password from './password.component';
import { TAG_NAME } from './password.constants';

Password.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-password']: Password;
  }
}

export default Password;
