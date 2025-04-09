import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './navitem.styles';
import { DEFAULTS } from './navitem.constants';
import providerUtils from '../../utils/provider';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import Buttonsimple from '../buttonsimple';
import { ButtonSize, ButtonType } from '../buttonsimple/buttonsimple.types';
import { getIconNameWithoutStyle } from '../button/button.utils';
// eslint-disable-next-line import/no-cycle
import SideNavigation from '../sidenavigation/sidenavigation.component';

/**
 * `mdc-navitem` is a button element styled to work as a navigation tab.
 * It supports a leading icon, optional badge and dynamic text rendering.
 *
 * @tagname mdc-navitem
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot default - Slot for the navItem text.
 *
 * @event click - (React: onClick) This event is dispatched when the navItem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the navItem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the navItem.
 * @event focus - (React: onFocus) This event is dispatched when the navItem receives focus.
 * @event activechange - (React: onActiveChange)Dispatched when the active state of the navItem changes.
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class NavItem extends IconNameMixin(Buttonsimple) {
  /**
   * Type of the badge
   * Can be `dot` (notification) or `counter`.
   */
  @property({ type: String, reflect: true, attribute: 'badge-type' }) badgeType?: 'dot' | 'counter';

  /**
   * Counter is the number which can be provided in the badge.
   */
  @property({ type: Number, reflect: true }) counter?: number;

  /**
   * The maximum number can be set up to 999, anything above that will be rendered as _999+_.
   * The max counter can be `9`, `99` or `999`.
   * @default 99
   */
  @property({ type: Number, attribute: 'max-counter', reflect: true })
  maxCounter: number = DEFAULTS.MAX_COUNTER;

  /**
  * Determines whether the navItem is disabled or not.
  * @default false
  */
  @property({ type: Boolean, reflect: true }) override disabled = false;

  /**
   * Id of the navItem (used as a identificator when used in the navItemList)
   * Note: It has to be unique.
   *
   * @default undefined
   */
  @property({ type: String, reflect: true, attribute: 'nav-id' }) navId?: string;

  /**
   * Aria-label attribute to be set for accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * @internal
   */
  private prevIconName?: string;

  // get data from context
  private readonly sideNavigationContext = providerUtils.consume({ host: this,
    context: SideNavigation.Context });

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'tab';
    this.softDisabled = undefined as unknown as boolean;
    this.size = undefined as unknown as ButtonSize;
    this.type = undefined as unknown as ButtonType;

    if (!this.navId && this.onerror) {
      this.onerror('nav id is required');
    }
  }

  /**
   * Modifies the icon name based on the active state.
   * If the navItem is active, the icon name is suffixed with '-filled'.
   * If the navItem is inactive, the icon name is restored to its original value.
   * If '-filled' icon is not available, the icon name remains unchanged.
   *
   * @param active - The active state.
   */

  private modifyIconName(active: boolean): void {
    if (this.iconName) {
      if (active) {
        this.prevIconName = this.iconName;
        this.iconName = `${getIconNameWithoutStyle(this.iconName)}-filled` as IconNames;
      } else if (this.prevIconName) {
        this.iconName = this.prevIconName as IconNames;
      }
    }
  }

  /**
   * Dispatch the activechange event.
   *
   * @param active - The active state of the navItem.
   */
  private handleNavItemActiveChange = (active: boolean): void => {
    const event = new CustomEvent('activechange', {
      detail: { navId: this.navId, active },
      bubbles: true,
    });
    this.dispatchEvent(event);
  };

  /**
   * Sets the aria-selected attribute based on the active state of the navItem.
   * If the navItem is active, the filled version of the icon is displayed,
   * else the icon is restored to its original value.
   *
   * @param element - The navItem element.
   * @param active - The active state of the navItem.
   */
  protected override setActive(element: HTMLElement, active: boolean) {
    element.setAttribute('aria-selected', active ? 'true' : 'false');
    this.modifyIconName(active);
  }

  protected override executeAction() {
    // Toggle the active state of the tab.
    this.handleNavItemActiveChange(this.active);
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

  renderBadge() {
    const { expanded } = this.sideNavigationContext.value ?? {};
    return html`
      <mdc-badge 
        class="${!expanded ? 'badge' : ''}"
        type="${ifDefined(this.badgeType)}" 
        counter="${ifDefined(this.counter)}" 
        max-counter="${this.maxCounter}">
      </mdc-badge>
    `;
  }

  public override render() {
    const { expanded } = this.sideNavigationContext.value ?? {};

    return html`
      <div part="icon-container">
        <mdc-icon
          name="${this.iconName}"
          size="1.5"
          length-unit="rem"
          part="icon"
        ></mdc-icon>
        ${!expanded ? this.renderBadge() : nothing}
      </div>
      ${expanded ? this.renderTextLabel() : nothing}
      ${expanded ? this.renderBadge() : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default NavItem;
