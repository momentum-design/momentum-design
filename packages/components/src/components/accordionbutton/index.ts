import '../button';
import '../icon';
import '../text';
import AccordionButton from './accordionbutton.component';
import { TAG_NAME } from './accordionbutton.constants';

AccordionButton.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-accordionbutton']: AccordionButton;
  }
}

export default AccordionButton;
