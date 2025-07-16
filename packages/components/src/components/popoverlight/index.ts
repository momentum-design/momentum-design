import Popoverlight from './popoverlight.component';
import { TAG_NAME } from './popoverlight.constants';
import '../button';

Popoverlight.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-popoverlight']: Popoverlight;
  }
}

export default Popoverlight;
