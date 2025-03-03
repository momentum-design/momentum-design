import Popover from './popover.component';
import { TAG_NAME } from './popover.constants';
import '../button';
import '../modalcontainer';

Popover.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-popover']: Popover
    }
}

export default Popover;
