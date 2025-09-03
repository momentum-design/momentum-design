import StaticChip from './staticchip.component';
import { TAG_NAME } from './staticchip.constants';
import '../text';
import '../icon';

StaticChip.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-staticchip']: StaticChip;
  }
}

export default StaticChip;
