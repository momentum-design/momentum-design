import '../button';
import '../icon';
import '../text';
import Accordion from './accordion.component';
import { TAG_NAME } from './accordion.constants';

Accordion.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-accordion']: Accordion;
  }
}

export default Accordion;
