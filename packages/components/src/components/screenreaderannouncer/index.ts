import ScreenreaderAnnouncer from './screenreaderannouncer.component';
import { TAG_NAME } from './screenreaderannouncer.constants';

ScreenreaderAnnouncer.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-screenreaderannouncer']: ScreenreaderAnnouncer;
  }
}

export default ScreenreaderAnnouncer;
