import Progressbar from './progressbar.component';
import { TAG_NAME } from './progressbar.constants';
import '../icon';
import '../text';

Progressbar.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-progressbar']: Progressbar;
  }
}

export default Progressbar;
