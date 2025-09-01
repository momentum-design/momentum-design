import '../icon';
import '../text';
import Option from './option.component';
import { TAG_NAME } from './option.constants';

Option.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-option']: Option;
  }
}

export default Option;
