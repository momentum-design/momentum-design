import DecorativeRadio from './staticradio.component';
import { TAG_NAME } from './staticradio.constants';

DecorativeRadio.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-decorative-radio']: DecorativeRadio;
  }
}

export default DecorativeRadio;
