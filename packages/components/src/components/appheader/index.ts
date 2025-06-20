import Appheader from './appheader.component';
import { TAG_NAME } from './appheader.constants';

Appheader.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-appheader']: Appheader;
  }
}

export default Appheader;
