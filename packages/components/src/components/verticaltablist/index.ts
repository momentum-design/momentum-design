import Verticaltablist from './verticaltablist.component';
import { TAG_NAME } from './verticaltablist.constants';

Verticaltablist.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-verticaltablist']: Verticaltablist;
  }
}

export default Verticaltablist;
