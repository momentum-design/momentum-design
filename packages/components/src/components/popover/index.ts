import Popover from './popover.component';
import { PopoverPortal, TAG_NAME as POPOVER_PORTAL_TAG_NAME } from './popover.portal.component';
import { TAG_NAME } from './popover.constants';
import '../button';

Popover.register(TAG_NAME);
PopoverPortal.register(POPOVER_PORTAL_TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-popover']: Popover;
  }
}

export default Popover;
