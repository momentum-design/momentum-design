import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import styles from './navitem.styles';
import { DEFAULTS, ALLOWED_BADGE_TYPES } from './navitem.constants';
import providerUtils from '../../utils/provider';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import ListItem from '../listitem/listitem.component';
import { getIconNameWithoutStyle } from '../button/button.utils';
import SideNavigation from '../sidenavigation/sidenavigation.component';
import type { BadgeType } from './navitem.types';
import type { ListItemVariants } from '../listitem/listitem.types';

/**
 * `mdc-navitem` is a button element styled to work as a navigation tab.
 * It supports a leading icon, optional badge and dynamic text rendering.
 *
 * Note: mdc-navitem is intended to be used as a part of the sidenavigation component.
 * Its structure, spacing, and interactions are designed to align with
 * the visual and functional requirements of side navigation layouts.
 *
 * @tagname mdc-navitem
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-badge
 *
 * @slot default - Slot for the navItem text.
 *
 * @event click - (React: onClick) This event is dispatched when the navItem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the navItem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the navItem.
 * @event focus - (React: onFocus) This event is dispatched when the navItem receives focus.
 * @event activechange - (React: onActiveChange) Dispatched when the active state of the navItem changes.
 *
 * @cssproperty --mdc-navitem-color - Text color of the navigation item in its normal state.
 * @cssproperty --mdc-navitem-border-color - Border color of the navigation item in its normal state.
 * @cssproperty --mdc-navitem-hover-background-color - Background color of the navigation item when hovered.
 * @cssproperty --mdc-navitem-pressed-background-color - Background color of the navigation item when pressed.
 * @cssproperty --mdc-navitem-disabled-background-color - Background color of the navigation item when disabled.
 * @cssproperty --mdc-navitem-disabled-color - Text color of the navigation item when disabled.
 * @cssproperty --mdc-navitem-active-background-color - Background color of the navigation item when active.
 */
class NavItem extends IconNameMixin(ListItem) {
  /**
   * The navitem's active state indicates whether it is currently toggled on (active) or off (inactive).
   * When the active state is true, the navitem is considered to be in an active state, meaning it is toggled on.
   * Conversely, when the active state is false, the navitem is in an inactive state, indicating it is toggled off.
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
   * Id of the navItem (used as a identificator when used in the navItemList)
   * Note: It has to be unique.
   *
   * @default undefined
   */
  @property({ type: String, reflect: true, attribute: 'nav-id' })
  navId?: string;

  @property({ type: Boolean, reflect: true })
  isExpanded?: boolean;

  /**
   * @internal
   */
  private prevIconName?: string;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this,
    context: SideNavigation.Context });

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = DEFAULTS.ROLE;
    this.variant = undefined as unknown as ListItemVariants;
    this.addEventListener('click', this.executeAction);
    this.addEventListener('keydown', this.executeAction);

    if (!this.navId && this.onerror) {
      this.onerror('[mdc-navitem] navId is required and was not provided.');
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.executeAction);
    this.removeEventListener('keydown', this.executeAction);
  }

  protected override updated(): void {
    const context = this.sideNavigationContext?.value;
    if (!context) return;
    const { isExpanded } = context;
    if (this.isExpanded !== isExpanded) {
      this.isExpanded = isExpanded;
    }
  }

  /**
   * Modifies the icon name based on the active state.
   * If the navItem is active, the icon name is suffixed with '-filled'.
   * If the navItem is inactive, the icon name is restored to its original value.
   * If '-filled' icon is not available, the icon name remains unchanged.
   * @internal
   * @param active - The active state.
   */

  private modifyIconName(active: boolean): void {
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
   * @param active - The active state of the navItem.
   */
  private emitNavItemActiveChange = (active: boolean): void => {
    const event = new CustomEvent('activechange', {
      detail: { navId: this.navId, active },
      bubbles: true,
    });
    this.dispatchEvent(event);
  };

  /**
   * Sets the aria-current attribute based on the active state of the navItem.
   * If the navItem is active, the filled version of the icon is displayed,
   * else the icon is restored to its original value.
   *
   * @param active - The active state of the navItem.
   */
  protected setActive(active: boolean) {
    if (active) {
      this.setAttribute('aria-current', 'page');
    } else {
      this.removeAttribute('aria-current');
    }
    this.modifyIconName(active);
  }

  protected executeAction(e: MouseEvent | KeyboardEvent):void {
    if (e.type === 'click' || (e instanceof KeyboardEvent && (e.key === 'Enter' || e.key === ' '))) {
      if (this.disabled) return;

      this.emitNavItemActiveChange(this.active as boolean);
    }
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('active')) {
      this.setActive(this.active ?? false);
    }
  }

  renderTextLabel() {
    return html`
      <mdc-text
        type=${this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}
        tagname=${VALID_TEXT_TAGS.SPAN}
        part="text-container">
        <slot></slot>
      </mdc-text>
    `;
  }

  renderBadge(isExpanded: boolean) {
    const badgeClass = isExpanded ? '' : 'badge';
    const isValidBadgeType = Object.values(ALLOWED_BADGE_TYPES).includes(this.badgeType as BadgeType);
    if (!isValidBadgeType) {
      return nothing;
    }

    return html`
      <mdc-badge 
        class="${badgeClass}"
        type="${ifDefined(this.badgeType)}" 
        counter="${ifDefined(this.counter)}" 
        max-counter="${this.maxCounter}">
      </mdc-badge>
    `;
  }

  public override render() {
    return html`
      <div part="icon-container">
        <mdc-icon
          name="${this.iconName}"
          size="1.5"
          length-unit="rem"
          part="icon"
        ></mdc-icon>
        ${!this.isExpanded ? this.renderBadge(this.isExpanded as boolean) : nothing}
      </div>
      ${this.isExpanded ? html`${this.renderTextLabel()}${this.renderBadge(this.isExpanded as boolean)}` : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default NavItem;
