import CardRadio from './cardradio.component';
import { TAG_NAME } from './cardradio.constants';
import '../icon';
import '../text';
import '../staticradio';

CardRadio.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-cardradio']: CardRadio;
  }
}

export default CardRadio;
