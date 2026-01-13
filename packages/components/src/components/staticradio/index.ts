import StaticRadio from './staticradio.component';
import { TAG_NAME } from './staticradio.constants';

StaticRadio.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-decorative-radio']: StaticRadio;
  }
}

export default StaticRadio;
