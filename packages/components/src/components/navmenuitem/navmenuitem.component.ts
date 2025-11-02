import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';

import { TYPE } from '../text/text.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import MenuItem from '../menuitem/menuitem.component';
import type { ListItemVariants } from '../listitem/listitem.types';
import { NavComponentMixin } from '../../utils/mixins/NavComponentMixin';
import providerUtils from '../../utils/provider';
import SideNavigation from '../sidenavigation/sidenavigation.component';

import { ICON_NAME } from './navmenuitem.constants';
import styles from './navmenuitem.styles';

/**
 * `mdc-navmenuitem` is a menuitem styled to work as a navigation tab.
 * It supports a leading icon, optional badge and dynamic text rendering.
 *
 * Note: `mdc-navmenuitem` is intended to be used inside `mdc-menubar` as part of the sideNavigation
 * component. Its structure, spacing, and interactions are designed to align with
 * the visual and functional requirements of side navigation layouts.
 *
 * By providing the tooltip-text attribute, a tooltip will be displayed on hover of the navmenuitem. This tooltip is useful when an active navmenuitem is present within a submenu of the sidenavigation component.
 *
 * @tagname mdc-navmenuitem
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-badge
 * @dependency mdc-tooltip
 *
 * @event click - (React: onClick) This event is dispatched when the navmenuitem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the navmenuitem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the navmenuitem.
 * @event focus - (React: onFocus) This event is dispatched when the navmenuitem receives focus.
 * @event activechange - (React: onActiveChange) Dispatched when the active state of the navmenuitem changes.
 *
 * @cssproperty --mdc-navmenuitem-color - Text color of the navmenuitem in its normal state.
 * @cssproperty --mdc-navmenuitem-disabled-color - Text color of the navmenuitem when disabled.
 * @cssproperty --mdc-navmenuitem-expanded-width - Width of the navmenuitem when expanded.
 * @cssproperty --mdc-navmenuitem-hover-background-color - Background color of the navmenuitem when hovered.
 * @cssproperty --mdc-navmenuitem-hover-active-background-color - Background color of the active navmenuitem when hovered.
 * @cssproperty --mdc-navmenuitem-pressed-background-color - Background color of the navmenuitem when pressed.
 * @cssproperty --mdc-navmenuitem-pressed-active-background-color - Background color of the active navmenuitem when pressed.
 * @cssproperty --mdc-navmenuitem-disabled-background-color - Background color of the navmenuitem when disabled.
 * @cssproperty --mdc-navmenuitem-disabled-active-background-color - Background color of the active navmenuitem when disabled.
 * @cssproperty --mdc-navmenuitem-rest-active-background-color - Background color of the active nav item in its rest state.
 *
 * @csspart arrow - The arrow of the navmenuitem.
 * @csspart badge - The badge of the navmenuitem.
 * @csspart icon-container - The container of the icon.
 * @csspart text-container - The container of the text.
 * @csspart trailing-arrow - The trailing arrow of the navmenuitem.
 */
class NavMenuItem extends IconNameMixin(NavComponentMixin(MenuItem)) {
  /**
   * The navmenuitem's active state indicates whether it is currently toggled on (active) or off (inactive).
   * When the active state is true, the navmenuitem is considered to be in an active state, meaning it is toggled on.
   * Conversely, when the active state is false, the navmenuitem is in an inactive state, indicating it is toggled off.
   * @default undefined
   */
  @property({ type: Boolean, reflect: true })
  override active?: boolean;

  /**
   * Id of the navMenuItem (used as a identificator when used in the menubar)
   * Note: It has to be unique.
   *
   * @default undefined
   */
  @property({ type: String, reflect: true, attribute: 'nav-id' })
  navId?: string;

  /**
   * When set to true, prevents the automatic setting of the `aria-current` attribute on the navmenuitem
   * when it becomes active. This is useful for cases where you want to maintain the visual active styling
   * but need to handle aria-current attribute differently or not at all.
   * The active button styling will still be applied regardless of this setting.
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-aria-current' })
  disableAriaCurrent?: boolean;

  /**
   * Tooltip text shown when this parent NavItem has a active child navitem.
   * This is useful for nested navmenuitems within a sidenavigation.
   *
   * Make sure to include what was normally used as the `tooltip-text` in this property.
   * i.e. `Messaging, contains active navmenuitem`
   */
  @property({ type: String, reflect: true, attribute: 'is-active-parent-tooltip-text' })
  isActiveParentTooltipText?: string;

  /**
   * Indicates whether this navmenuitem has an active child navmenuitem.
   * This is used to manage tooltip display for parent navmenuitems in nested navigation structures.
   * @internal
   */
  @state()
  public hasActiveChild: boolean = false;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this, context: SideNavigation.Context });

  constructor() {
    super();
    this.addEventListener('click', this.handleClickEvent.bind(this));
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.variant = undefined as unknown as ListItemVariants;

    if (!this.navId && this.onerror) {
      this.onerror('[mdc-navmenuitem] navId is required and was not provided.');
    }

    // Set in-menupopover attribute if nested
    this.toggleAttribute('in-menupopover', this.isNested());
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeTooltip();
  }

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (
      changedProperties.has('tooltipText') ||
      changedProperties.has('showLabel') ||
      changedProperties.has('hasActiveChild')
    ) {
      this.renderDynamicTooltip();
    }

    const context = this.sideNavigationContext?.value;
    if (!context) return;

    // Determine expansion state
    this.showLabel = this.isNested() ? true : context.expanded;
  }

  protected renderDynamicTooltip(): void {
    if (!this.isActiveParentTooltipText && this.hasActiveChild) {
      this.removeTooltip();
      return;
    }
    if (!this.hasActiveChild && (!this.tooltipText || this.showLabel)) {
      this.removeTooltip();
      return;
    }
    this.addTooltip('navmenuitem', this.hasActiveChild ? this.isActiveParentTooltipText! : this.tooltipText!);
  }

  /**
   * Check whether the navmenuitem is inside a nested nav structure.
   * Returns `true` if there is a parent `mdc-menupopover`
   * This method assumes nesting implies deeper levels of nav hierarchy.
   */
  private isNested(): boolean {
    let parent = this.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === MENUPOPOVER_TAGNAME) {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  }

  /**
   * Dispatch the activechange event.
   * @internal
   * @param active - The active state of the navMenuItem.
   */
  private emitNavMenuItemActiveChange = (active: boolean): void => {
    const event = new CustomEvent('activechange', {
      detail: { navId: this.navId, active },
      bubbles: true,
    });
    this.dispatchEvent(event);
  };

  private handleClickEvent(): void {
    if (this.disabled) return;
    this.emitNavMenuItemActiveChange(this.active as boolean);
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('active')) {
      this.modifyIconName(this.active);
    }
  }

  private renderArrowIcon(showLabel: boolean | undefined) {
    return html`
      <mdc-icon
        name=${ICON_NAME.RIGHT_ARROW}
        length-unit="rem"
        part="trailing-arrow ${showLabel ? '' : 'arrow'}"
      ></mdc-icon>
    `;
  }

  public override render() {
    const context = this.sideNavigationContext?.value;
    return html`
      <div part="icon-container">
        <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="icon"></mdc-icon>
        ${!this.showLabel ? this.renderBadge(this.showLabel) : nothing}
      </div>
      ${this.showLabel
        ? html`${this.renderTextLabel(
            this.label,
            this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM,
          )}${this.renderBadge(this.showLabel)}`
        : nothing}
      ${context?.hasSiblingWithTriggerId(this) ? this.renderArrowIcon(this.showLabel) : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default NavMenuItem;
