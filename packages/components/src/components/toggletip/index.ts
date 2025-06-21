import ToggleTip from './toggletip.component';
import { TAG_NAME } from './toggletip.constants';
import '../button';
import '../screenreaderannouncer';

ToggleTip.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-toggletip']: ToggleTip;
  }
}

export default ToggleTip;
