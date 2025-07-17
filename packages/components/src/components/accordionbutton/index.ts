import Accordionbutton from './accordionbutton.component';
import { TAG_NAME } from './accordionbutton.constants';

Accordionbutton.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-accordionbutton']: Accordionbutton;
  }
}

export default Accordionbutton;
