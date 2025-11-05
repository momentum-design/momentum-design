import type { CSSResult, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { v4 } from 'uuid';

import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import MenuItem from '../menuitem/menuitem.component';
import type { ListItemVariants } from '../listitem/listitem.types';
import providerUtils from '../../utils/provider';
import SideNavigation from '../sidenavigation/sidenavigation.component';
import { TAG_NAME as TOOLTIP_TAG_NAME } from '../tooltip/tooltip.constants';
import type { IconNames } from '../icon/icon.types';
import type { PopoverPlacement } from '../popover/popover.types';
import { getIconNameWithoutStyle } from '../button/button.utils';

import type { BadgeType } from './navmenuitem.types';
import { ALLOWED_BADGE_TYPES, DEFAULTS, ICON_NAME } from './navmenuitem.constants';
import styles from './navmenuitem.styles';

/**
 * `mdc-navmenuitem` is a menuitem styled to work as a navigation tab.
 * It supports a leading icon, optional badge and dynamic text rendering.
 *
 * The navmenuitem can be in an active or inactive state, indicating whether it is currently selected.
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
 * @cssproperty --mdc-navmenuitem-in-sidenav-expanded-width - Width of the navmenuitem when expanded.
 * @cssproperty --mdc-navmenuitem-in-sidenav-expanded-margin-left - Left margin of the navmenuitem, when expanded.
 * @cssproperty --mdc-navmenuitem-in-sidenav-expanded-margin-right - Right margin of the navmenuitem, when expanded.
 * @cssproperty --mdc-navmenuitem-in-sidenav-collapsed-width - Width of the navmenuitem when collapsed.
 * @cssproperty --mdc-navmenuitem-in-sidenav-collapsed-margin-left - Left margin of the navmenuitem, when collapsed.
 * @cssproperty --mdc-navmenuitem-in-sidenav-collapsed-margin-right - Right margin of the navmenuitem, when collapsed.
 * @cssproperty --mdc-navmenuitem-color - Text color of the navmenuitem in its normal state.
 * @cssproperty --mdc-navmenuitem-disabled-color - Text color of the navmenuitem when disabled.
 * @cssproperty --mdc-navmenuitem-rest-active-background-color - Background color of the active nav item in its rest state.
 * @cssproperty --mdc-navmenuitem-hover-background-color - Background color of the navmenuitem when hovered.
 * @cssproperty --mdc-navmenuitem-hover-active-background-color - Background color of the active navmenuitem when hovered.
 * @cssproperty --mdc-navmenuitem-pressed-background-color - Background color of the navmenuitem when pressed.
 * @cssproperty --mdc-navmenuitem-pressed-active-background-color - Background color of the active navmenuitem when pressed.
 * @cssproperty --mdc-navmenuitem-disabled-background-color - Background color of the navmenuitem when disabled.
 * @cssproperty --mdc-navmenuitem-disabled-active-background-color - Background color of the active navmenuitem when disabled.
 *
 * @csspart arrow - The arrow of the navmenuitem.
 * @csspart badge - The badge of the navmenuitem.
 * @csspart icon-container - The container of the icon.
 * @csspart text-container - The container of the text.
 * @csspart trailing-arrow - The trailing arrow of the navmenuitem.
 */
class NavMenuItem extends MenuItem {
  /**
   * The navmenuitem's active state indicates whether it is currently toggled on (active) or off (inactive).
   * If cannotActivate is set to true, the surrounding SideNavigation will
   * not set this property when the navmenuitem is clicked.
   *
   * @default undefined
   */
  @property({ type: Boolean, reflect: true })
  override active?: boolean;

  /**
   * When set to true, prevents the navmenuitem from being activated.
   * This is useful for cases where the navmenuitem is used as a button
   * or link, where not the content on the current page is changing.
   * By default this is set to false, making the navmenuitem activatable (= aria-current gets set when active).
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'cannot-activate' })
  cannotActivate?: boolean = DEFAULTS.CANNOT_ACTIVATE;

  /**
   * Name of the leading icon (= filename).
   *
   * If no `icon-name` is provided, no icon will be rendered.
   */
  @property({ type: String, attribute: 'icon-name', reflect: true })
  iconName?: IconNames;

  /**
   * Type of the badge
   * Can be `dot` (notification) or `counter`.
   */
  @property({ type: String, reflect: true, attribute: 'badge-type' })
  badgeType?: BadgeType;

  /**
   * Counter is the number which can be provided in the badge.
   */
  @property({ type: Number, reflect: true })
  counter?: number;

  /**
   * The maximum number can be set up to 999, anything above that will be rendered as _999+_.
   * The max counter can be `9`, `99` or `999`.
   * @default 99
   */
  @property({ type: Number, attribute: 'max-counter', reflect: true })
  maxCounter: number = DEFAULTS.MAX_COUNTER;

  /**
   * Id of the navMenuItem (used as a identificator when used in the menubar)
   * Note: It has to be unique.
   *
   * @default undefined
   */
  @property({ type: String, reflect: true, attribute: 'nav-id' })
  navId?: string;

  /**
   * Determines whether the nav item is expanded or not.
   *
   * If used in SideNavigation, this property is automatically managed by the SideNavigation component.
   * @default undefined
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-label' })
  showLabel?: boolean;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * When set to true, prevents the automatic setting of the `aria-current` attribute on the navmenuitem
   * when it becomes active. This is useful for cases where you want to maintain the visual active styling
   * but need to handle aria-current attribute differently or not at all.
   * The active button styling will still be applied regardless of this setting.
   *
   * If you also want to prevent activation, use the `cannot-activate` property instead.
   *
   * @default undefined
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-aria-current' })
  disableAriaCurrent?: boolean;

  /**
   * The tooltip text is displayed on hover of the nav item.
   * Will only be shown when the `show-label` property is false
   * (i.e., when the nav item is collapsed).
   */
  @property({ type: String, reflect: true, attribute: 'tooltip-text' })
  tooltipText?: string;

  /**
   * The placement of the tooltip relative to the nav item.
   * @default 'right'
   */
  @property({ type: String, reflect: true, attribute: 'tooltip-placement' })
  tooltipPlacement: PopoverPlacement = 'right';

  /**
   * The appearance behavior of the tooltip.
   * Options are 'when-collapsed' (default) or 'always'.
   *
   * @default 'when-collapsed'
   */
  @property({ type: String, reflect: true, attribute: 'tooltip-appearance' })
  tooltipAppearance: 'when-collapsed' | 'always' = 'when-collapsed';

  /**
   * The boundary padding for the tooltip.
   * This defines the minimum distance in pixels between the tooltip and the edges of the viewport.
   * @default 0
   */
  @property({ type: Number, reflect: true, attribute: 'tooltip-boundary-padding' })
  tooltipBoundaryPadding?: number;

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

    if (changedProperties.has('showLabel')) {
      // If collapsed and aria-label is not set, use visible label
      if (!this.showLabel && !this.getAttribute('aria-label') && this.label) {
        this.setAttribute('aria-label', this.label);
      }
    }

    const context = this.sideNavigationContext?.value;
    if (!context) return;

    // Determine expansion state
    this.showLabel = this.isNested() ? true : context.expanded;
  }

  private renderDynamicTooltip(): void {
    this.removeTooltip();

    if (this.hasActiveChild && !this.isActiveParentTooltipText) {
      return;
    }
    if (
      !this.hasActiveChild &&
      (!this.tooltipText || (this.tooltipAppearance === 'when-collapsed' && this.showLabel))
    ) {
      return;
    }

    if (!this.id) {
      this.id = `mdc-navmenuitem-${v4()}`;
    }

    const tooltip = document.createElement(TOOLTIP_TAG_NAME);
    tooltip.id = `mdc-navmenuitem-tooltip-${v4()}`;
    tooltip.textContent = this.hasActiveChild ? this.isActiveParentTooltipText! : this.tooltipText!;
    tooltip.setAttribute('triggerid', this.id);
    tooltip.setAttribute('show-arrow', '');
    tooltip.setAttribute('placement', this.tooltipPlacement);
    tooltip.setAttribute('boundary-padding', this.tooltipBoundaryPadding?.toString() || '0');

    // Set the slot attribute if the parent element has a slot.
    if (this.hasAttribute('slot')) {
      tooltip.setAttribute('slot', this.getAttribute('slot') || '');
    }

    // Attach the tooltip programmatically after the nearest parent element.
    this.after(tooltip);
  }

  private removeTooltip() {
    // Remove any existing tooltip.
    const existingTooltip = document.querySelector(`${TOOLTIP_TAG_NAME}[triggerid="${this.id}"]`);
    if (existingTooltip) {
      existingTooltip.remove();
    }
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
    if (this.disabled || this.cannotActivate) return;
    this.emitNavMenuItemActiveChange(this.active as boolean);
  }

  private getFilledIconName(): IconNames | undefined {
    if (!this.iconName) {
      return undefined;
    }

    const isFilled = this.iconName.endsWith('-filled');
    if (isFilled) {
      return undefined;
    }

    const baseIcon = getIconNameWithoutStyle(this.iconName);
    return `${baseIcon}-filled` as IconNames;
  }

  private renderBadge(showLabel: boolean | undefined): TemplateResult | typeof nothing {
    const isValidBadgeType = Object.values(ALLOWED_BADGE_TYPES).includes(this.badgeType as BadgeType);
    if (!isValidBadgeType) {
      return nothing;
    }

    return html`
      <mdc-badge
        part="${showLabel ? '' : 'badge'}"
        type="${ifDefined(this.badgeType)}"
        counter="${ifDefined(this.counter)}"
        max-counter="${this.maxCounter}"
        aria-hidden="true"
      >
      </mdc-badge>
    `;
  }

  public override render() {
    const context = this.sideNavigationContext?.value;
    return html`
      <div part="icon-container">
        <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="regular-icon"></mdc-icon>
        ${!this.cannotActivate
          ? html`<mdc-icon
              name="${this.getFilledIconName()}"
              size="1.5"
              length-unit="rem"
              part="filled-icon"
            ></mdc-icon>`
          : nothing}
        ${!this.showLabel ? this.renderBadge(this.showLabel) : nothing}
      </div>
      ${this.showLabel
        ? html`
            <mdc-text
              type=${this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}
              tagname=${VALID_TEXT_TAGS.SPAN}
              part="text-container"
            >
              ${this.label}
            </mdc-text>
            ${this.renderBadge(this.showLabel)}
          `
        : nothing}
      ${context?.hasSiblingWithTriggerId(this)
        ? html` <mdc-icon name=${ICON_NAME.RIGHT_ARROW} length-unit="rem" part="trailing-arrow"> </mdc-icon>`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default NavMenuItem;
