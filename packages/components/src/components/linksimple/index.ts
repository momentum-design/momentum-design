import Linksimple from './linksimple.component';
import { TAG_NAME } from './linksimple.constants';

Linksimple.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-linksimple']: Linksimple;
  }
}

export default Linksimple;
