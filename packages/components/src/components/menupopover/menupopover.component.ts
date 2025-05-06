import type { CSSResult } from 'lit';
import { ROLE } from '../../utils/roles';
import Popover from '../popover/popover.component';

/**
 * menupopover component, which ...
 *
 * @tagname mdc-menupopover
 *
 * @slot default - This is a default/unnamed slot
 */
class MenuPopover extends Popover {
  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENU;
    this.trigger = 'click';
    this.placement = 'bottom-start';
    this.hideOnOutsideClick = true;
    this.hideOnBlur = true;
    this.hideOnEscape = true;
    this.showArrow = false;
    this.interactive = false;
  }

  public static override styles: Array<CSSResult> = [...Popover.styles];
}

export default MenuPopover;
