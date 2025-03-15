import Tooltip from './tooltip.component';
import { TAG_NAME } from './tooltip.constants';
import '../popover';

Tooltip.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-tooltip']: Tooltip
    }
}

export default Tooltip;
