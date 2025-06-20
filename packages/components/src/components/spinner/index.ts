import Spinner from './spinner.component';
import { TAG_NAME } from './spinner.constants';

Spinner.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-spinner']: Spinner;
  }
}

export default Spinner;
