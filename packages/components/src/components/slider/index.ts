import Slider from './slider.component';
import { TAG_NAME } from './slider.constants';

Slider.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-slider']: Slider;
  }
}

export default Slider;
