import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import providerUtils from '../../utils/provider';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import MenuItem from '../menuitem/menuitem.component';
import { getIconNameWithoutStyle } from '../button/button.utils';
import SideNavigation from '../sidenavigation/sidenavigation.component';
import type { ListItemVariants } from '../listitem/listitem.types';
import { TAG_NAME as TOOLTIP_TAG_NAME } from '../tooltip/tooltip.constants';

import type { BadgeType } from './navmenuitem.types';
import { DEFAULTS, ALLOWED_BADGE_TYPES, ICON_NAME } from './navmenuitem.constants';
import styles from './navmenuitem.styles';
import { generateNaviMenuItemId, generateNaviMenuItemTooltipId } from './navmenuitem.utils';

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
 * @cssproperty --mdc-navmenuitem-border-color - Border color of the navmenuitem in its normal state.
 * @cssproperty --mdc-navmenuitem-disabled-color - Text color of the navmenuitem when disabled.
 * @cssproperty --mdc-navmenuitem-expanded-width - Width of the navmenuitem when expanded.
 * @cssproperty --mdc-navmenuitem-hover-background-color - Background color of the navmenuitem when hovered.
 * @cssproperty --mdc-navmenuitem-hover-active-background-color - Background color of the active navmenuitem when hovered.
 * @cssproperty --mdc-navmenuitem-pressed-background-color - Background color of the navmenuitem when pressed.
 * @cssproperty --mdc-navmenuitem-pressed-active-background-color - Background color of the active navmenuitem when pressed.
 * @cssproperty --mdc-navmenuitem-disabled-background-color - Background color of the navmenuitem when disabled.
 * @cssproperty --mdc-navmenuitem-disabled-active-background-color - Background color of the active navmenuitem when disabled.
 * @cssproperty --mdc-navmenuitem-rest-active-background-color - Background color of the active nav item in its rest state.
 */
class NavMenuItem extends IconNameMixin(MenuItem) {
  /**
   * The navmenuitem's active state indicates whether it is currently toggled on (active) or off (inactive).
   * When the active state is true, the navmenuitem is considered to be in an active state, meaning it is toggled on.
   * Conversely, when the active state is false, the navmenuitem is in an inactive state, indicating it is toggled off.
   * @default undefined
   */
  @property({ type: Boolean, reflect: true })
  active?: boolean;

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
   * Determines whether the navMenuItem is expanded or not.
   *
   * @internal
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
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-aria-current' })
  disableAriaCurrent?: boolean;

  /**
   * The tooltip text is displayed on hover of the list item.
   */
  @property({ type: String, reflect: true, attribute: 'tooltip-text' })
  tooltipText?: string;

  /**
   * @internal
   */
  private prevIconName?: string;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this, context: SideNavigation.Context });

  constructor() {
    super();
    this.addEventListener('click', this.handleClickEvent.bind(this));
    this.addEventListener('focusin', this.displayTooltipForLongText.bind(this));
    this.addEventListener('mouseenter', this.displayTooltipForLongText.bind(this));
    this.addEventListener('focusout', this.removeTooltip.bind(this));
    this.addEventListener('mouseout', this.removeTooltip.bind(this));
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

  protected override updated(): void {
    const context = this.sideNavigationContext?.value;
    if (!context) return;

    // Determine expansion state
    this.showLabel = this.isNested() ? true : context.expanded;

    // Manage aria-label for accessibility
    if (this.showLabel) {
      this.removeAttribute('aria-label');
    } else {
      const label = this.label ?? '';
      this.ariaLabel = this.ariaLabel || label;
      this.setAttribute('aria-label', label);
    }
  }

  private removeTooltip() {
    // Remove any existing tooltip.
    const existingTooltip = document.querySelector(`${TOOLTIP_TAG_NAME}[triggerid="${this.id}"]`);
    if (existingTooltip) {
      existingTooltip.remove();
    }
  }

  private displayTooltipForLongText(): void {
    if (!this.tooltipText) {
      return;
    }
    if (!this.id) {
      this.id = generateNaviMenuItemId();
    }

    this.removeTooltip();

    // Create tooltip for the listitem element.
    const tooltip = document.createElement(TOOLTIP_TAG_NAME);
    tooltip.id = generateNaviMenuItemTooltipId();
    tooltip.textContent = this.tooltipText;
    tooltip.setAttribute('triggerid', this.id);
    tooltip.setAttribute('visible', '');
    tooltip.setAttribute('show-arrow', '');

    // Set the slot attribute if the parent element has a slot.
    if (this.hasAttribute('slot')) {
      tooltip.setAttribute('slot', this.getAttribute('slot') || '');
    }

    // Attach the tooltip programmatically after the nearest parent element.
    this.after(tooltip);
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
   * Modifies the icon name based on the active state.
   * If the navMenuItem is active, the icon name is suffixed with '-filled'.
   * If the navMenuItem is inactive, the icon name is restored to its original value.
   * If '-filled' icon is not available, the icon name remains unchanged.
   * @internal
   * @param active - The active state.
   */

  private modifyIconName(active: boolean | undefined): void {
    if (!this.iconName) return;

    const isFilled = this.iconName.endsWith('-filled');
    const baseIcon = getIconNameWithoutStyle(this.iconName);

    if (active) {
      if (!isFilled) {
        this.prevIconName = this.iconName;
        this.iconName = `${baseIcon}-filled` as IconNames;
      }
    } else if (this.prevIconName) {
      this.iconName = this.prevIconName as IconNames;
    }
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

  private renderTextLabel(label: string | undefined) {
    return html`
      <mdc-text
        type=${this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}
        tagname=${VALID_TEXT_TAGS.SPAN}
        part="text-container"
      >
        ${label}
      </mdc-text>
    `;
  }

  private renderArrowIcon(showLabel: boolean | undefined) {
    const arrowClass = showLabel ? '' : 'arrow';

    return html`
      <mdc-icon name=${ICON_NAME.RIGHT_ARROW} length-unit="rem" part="trailing-arrow" class="${arrowClass}"> </mdc-icon>
    `;
  }

  private renderBadge(showLabel: boolean | undefined) {
    const badgeClass = showLabel ? '' : 'badge';
    const isValidBadgeType = Object.values(ALLOWED_BADGE_TYPES).includes(this.badgeType as BadgeType);
    if (!isValidBadgeType) {
      return nothing;
    }

    return html`
      <mdc-badge
        class="${badgeClass}"
        type="${ifDefined(this.badgeType)}"
        counter="${ifDefined(this.counter)}"
        max-counter="${this.maxCounter}"
      >
      </mdc-badge>
    `;
  }

  public override render() {
    const context = this.sideNavigationContext?.value;
    return html`
      <div part="icon-container">
        <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="icon"></mdc-icon>
        ${!this.showLabel ? this.renderBadge(this.showLabel) : nothing}
      </div>
      ${this.showLabel ? html`${this.renderTextLabel(this.label)}${this.renderBadge(this.showLabel)}` : nothing}
      ${context?.hasSiblingWithTriggerId(this) ? this.renderArrowIcon(this.showLabel) : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default NavMenuItem;
