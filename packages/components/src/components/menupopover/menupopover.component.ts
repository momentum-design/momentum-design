import { CSSResult, PropertyValues } from 'lit';
import { MenuMixin } from '../../utils/mixins/MenuMixin';
import { ROLE } from '../../utils/roles';
import Popover from '../popover/popover.component';
import { POPOVER_PLACEMENT, TRIGGER } from '../popover/popover.constants';
import { TAG_NAME as MENU_POPOVER } from './menupopover.constants';

/**
 * menupopover component, which ...
 *
 * @tagname mdc-menupopover
 *
 * @slot default - This is a default/unnamed slot
 */
class MenuPopover extends MenuMixin(Popover) {
  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENU;

    this.focusTrap = true;
    this.hideOnEscape = true;
    this.hideOnOutsideClick = true;
    this.placement = POPOVER_PLACEMENT.BOTTOM_START;
    this.showArrow = false;
  }

  override async firstUpdated(changedProperties: PropertyValues) {
    await super.firstUpdated(changedProperties);

    if (this.parentElement?.tagName?.toLowerCase() === MENU_POPOVER) {
      this.interactive = true;
      this.placement = POPOVER_PLACEMENT.RIGHT_START;
      this.trigger = TRIGGER.MOUSEENTER;
    }
  }

  public static override styles: Array<CSSResult> = [...Popover.styles];
}

export default MenuPopover;
