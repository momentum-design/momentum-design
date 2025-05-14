import MenuPopover from './menupopover.component';
import { TAG_NAME } from './menupopover.constants';

MenuPopover.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-menupopover']: MenuPopover
    }
}

export default MenuPopover;
