import '../button';
import '../text';
import Dialog from './dialog.component';
import { TAG_NAME } from './dialog.constants';

Dialog.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-dialog']: Dialog;
  }
}

export default Dialog;
