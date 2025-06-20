import AlertChip from './alertchip.component';
import { TAG_NAME } from './alertchip.constants';
import '../text';
import '../icon';

AlertChip.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-alertchip']: AlertChip;
  }
}

export default AlertChip;
