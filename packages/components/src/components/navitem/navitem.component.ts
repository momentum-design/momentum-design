import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './navitem.styles';
import { DEFAULTS, ALLOWED_BADGE_TYPES } from './navitem.constants';
import providerUtils from '../../utils/provider';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import MenuItem from '../menuitem/menuitem.component';
import { getIconNameWithoutStyle } from '../button/button.utils';
import SideNavigation from '../sidenavigation/sidenavigation.component';
import type { BadgeType } from './navitem.types';
import type { ListItemVariants } from '../listitem/listitem.types';
import { KEYS } from '../../utils/keys';

/**
 * `mdc-navitem` is a menuitem styled to work as a navigation tab.
 * It supports a leading icon, optional badge and dynamic text rendering.
 *
 * Note: `mdc-navitem` is intended to be used inside `mdc-navitemlist` as part of the sideNavigation
 * component. Its structure, spacing, and interactions are designed to align with
 * the visual and functional requirements of side navigation layouts.
 *
 * @tagname mdc-navitem
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-badge
 *
 * @event click - (React: onClick) This event is dispatched when the navitem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the navitem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the navitem.
 * @event focus - (React: onFocus) This event is dispatched when the navitem receives focus.
 * @event activechange - (React: onActiveChange) Dispatched when the active state of the navitem changes.
 *
 * @cssproperty --mdc-navitem-color - Text color of the navitem in its normal state.
 * @cssproperty --mdc-navitem-border-color - Border color of the navitem in its normal state.
 * @cssproperty --mdc-navitem-disabled-color - Text color of the navitem when disabled.
 * @cssproperty --mdc-navitem-expanded-width - Width of the navItem when expanded.
 * @cssproperty --mdc-navitem-hover-background-color - Background color of the navitem when hovered.
 * @cssproperty --mdc-navitem-hover-active-background-color - Background color of the active navitem when hovered.
 * @cssproperty --mdc-navitem-pressed-background-color - Background color of the navitem when pressed.
 * @cssproperty --mdc-navitem-pressed-active-background-color - Background color of the active navitem when pressed.
 * @cssproperty --mdc-navitem-disabled-background-color - Background color of the navitem when disabled.
 * @cssproperty --mdc-navitem-disabled-active-background-color - Background color of the active navitem when disabled.
 * @cssproperty --mdc-navitem-rest-active-background-color - Background color of the active nav item in its rest state.
 */
class NavItem extends IconNameMixin(MenuItem) {
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

  /**
   * Determines whether the navItem is expanded or not.
   *
   * @internal
   */
  @property({ type: Boolean, reflect: true })
  isExpanded?: boolean;

  /**
   * @internal
   */
  private prevIconName?: string;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this, context: SideNavigation.Context });

  override connectedCallback(): void {
    super.connectedCallback();
    this.variant = undefined as unknown as ListItemVariants;
    this.addEventListener('click', this.handleClickEvent);
    this.addEventListener('keydown', this.handleKeyDownEvent);

    if (!this.navId && this.onerror) {
      this.onerror('[mdc-navitem] navId is required and was not provided.');
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClickEvent);
    this.removeEventListener('keydown', this.handleKeyDownEvent);
  }

  protected override updated(): void {
    const context = this.sideNavigationContext?.value;
    if (!context) return;

    // Determine expansion state
    this.isExpanded = this.isNested() ? true : context.isExpanded;

    // Manage aria-label for accessibility
    if (this.isExpanded) {
      this.removeAttribute('aria-label');
    } else {
      const label = this.label ?? '';
      this.ariaLabel = label;
      this.setAttribute('aria-label', label);
    }
  }

  /**
   * Check whether the navitem is inside a nested nav structure.
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
   * If the navItem is active, the icon name is suffixed with '-filled'.
   * If the navItem is inactive, the icon name is restored to its original value.
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
  private setActive(active: boolean | undefined) {
    if (active) {
      this.setAttribute('aria-current', 'page');
    } else {
      this.removeAttribute('aria-current');
    }
    this.modifyIconName(active);
  }

  private handleClickEvent(): void {
    if (this.disabled) return;
    this.emitNavItemActiveChange(this.active as boolean);
  }

  private handleKeyDownEvent(e: KeyboardEvent): void {
    if (this.disabled) return;

    const isActionKey = e.key === KEYS.ENTER || e.key === KEYS.SPACE;
    if (isActionKey) {
      e.preventDefault(); // prevent scrolling on space, or double activation
      this.emitNavItemActiveChange(this.active as boolean);
    }
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('active')) {
      this.setActive(this.active);
    }
  }

  private renderTextLabel(label: string | undefined) {
    return html`
      <mdc-text
        type=${this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}
        tagname=${VALID_TEXT_TAGS.SPAN}
        part="text-container">
        ${label}
      </mdc-text>
    `;
  }

  private hasArrowButton() {
    const id = this.getAttribute('id');
    if (!id) return false;
    const siblings = Array.from(this.parentElement?.children || []);
    return siblings.some((sibling) =>
      sibling !== this
      && sibling.tagName.toLowerCase() === MENUPOPOVER_TAGNAME
      && sibling.getAttribute('triggerid') === id);
  }

  private renderArrowIcon(isExpanded: boolean | undefined) {
    const arrowClass = isExpanded ? '' : 'arrow';

    return html`
      <mdc-icon 
        name='arrow-right-bold' 
        length-unit="rem" 
        part="trailing-arrow" 
        class="${arrowClass}">
      </mdc-icon>
    `;
  }

  private renderBadge(isExpanded: boolean | undefined) {
    const badgeClass = isExpanded ? '' : 'badge';
    const isValidBadgeType = Object.values(ALLOWED_BADGE_TYPES).includes(this.badgeType as BadgeType);
    if (!isValidBadgeType) {
      return nothing;
    }

    return html`
      <mdc-badge 
        class="${badgeClass}"
        type="${this.badgeType}" 
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
        ${!this.isExpanded ? this.renderBadge(this.isExpanded) : nothing}
      </div>
      ${this.isExpanded ? html`${this.renderTextLabel(this.label)}${this.renderBadge(this.isExpanded)}` : nothing}
      ${this.hasArrowButton() ? this.renderArrowIcon(this.isExpanded) : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default NavItem;
