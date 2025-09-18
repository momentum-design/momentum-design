import '../icon';
import '../text';
import Banner from './banner.component';
import { TAG_NAME } from './banner.constants';

Banner.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-banner']: Banner;
  }
}

export default Banner;
