import Typewriter from './typewriter.component';
import { TAG_NAME } from './typewriter.constants';

Typewriter.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-typewriter']: Typewriter;
  }
}

export default Typewriter;
