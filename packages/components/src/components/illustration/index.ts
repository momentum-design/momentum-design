import Illustration from './illustration.component';
import { TAG_NAME } from './illustration.constants';

Illustration.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-illustration']: Illustration;
  }
}

export default Illustration;
