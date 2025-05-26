import { CSSResult, PropertyValues } from 'lit';
import { MenuMixin } from '../../utils/mixins/MenuMixin';
import { ROLE } from '../../utils/roles';
import { ORIENTATION } from '../menubar/menubar.constants';
import Popover from '../popover/popover.component';
import { POPOVER_PLACEMENT, TRIGGER } from '../popover/popover.constants';
import { TAG_NAME as MENU_POPOVER } from './menupopover.constants';
import styles from './menupopover.styles';

/**
 * A popover menu component that displays a list of menu items in a floating container.
 * It's designed to work in conjunction with `mdc-menubar` and `mdc-menuitem` to create
 * accessible, nested menu structures with the following features:
 * - Appears adjacent to the triggering menu item
 * - Supports keyboard navigation (arrow keys, Home, End)
 * - Manages focus trapping when open
 * - Closes on Escape key or outside click
 * - Supports both mouse and keyboard interactions
 * - Automatically handles ARIA attributes for accessibility
 *
 * The component extends `mdc-popover` and adds menu-specific behaviors and styling.
 * When nested within another `mdc-menupopover`, it automatically adjusts its behavior
 * to work as a submenu (right-aligned, shows on hover).
 *
 * The orientation of the menu popover is always set to `vertical`.
 *
 * @tagname mdc-menupopover
 * @slot default - Contains the menu items to be displayed in the popover
 */
class MenuPopover extends MenuMixin(Popover) {
  constructor() {
    super();

    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleMouseClick);
  }

  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENU;

    this.focusTrap = true;
    this.hideOnEscape = true;
    this.hideOnOutsideClick = true;
    this.placement = POPOVER_PLACEMENT.BOTTOM_START;
    this.showArrow = false;
    this.interactive = true;
    this.ariaOrientation = ORIENTATION.VERTICAL;
  }

  override async firstUpdated(changedProperties: PropertyValues) {
    await super.firstUpdated(changedProperties);

    this.triggerElement?.setAttribute('aria-haspopup', ROLE.MENU);
    if (this.parentElement?.tagName?.toLowerCase() === MENU_POPOVER) {
      this.interactive = true;
      this.placement = POPOVER_PLACEMENT.RIGHT_START;
      this.trigger = TRIGGER.MOUSEENTER;
    }
  }

  public static override styles: Array<CSSResult> = [...Popover.styles, ...styles];
}

export default MenuPopover;
