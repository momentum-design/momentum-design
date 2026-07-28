import FocusTrap from './focustrap.component';
import { TAG_NAME } from './focustrap.constants';

FocusTrap.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-focustrap']: FocusTrap;
  }
}

export default FocusTrap;
