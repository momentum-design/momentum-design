import AnchorPopover from './anchorpopover.component';
import { TAG_NAME } from './anchorpopover.constants';
import '../button';

AnchorPopover.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-anchorpopover']: AnchorPopover;
  }
}

export default AnchorPopover;
