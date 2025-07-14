import Tooltip from './tooltip.component';
import { TAG_NAME } from './tooltip.constants';

Tooltip.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-tooltip']: Tooltip;
  }
}

export default Tooltip;
