import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './navitem.styles';
import { DEFAULTS } from './navitem.constants';
import providerUtils from '../../utils/provider';
import { VARIANTS } from '../sidenavigation/sidenavigation.constants';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import Buttonsimple from '../buttonsimple';
import { ButtonSize, ButtonType } from '../buttonsimple/buttonsimple.types';
import { getIconNameWithoutStyle } from '../button/button.utils';
// eslint-disable-next-line import/no-cycle
import SideNavigationProvider from '../sidenavigation';

/**
 * nav-item component, which ...
 *
 * @tagname mdc-navitem
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class NavItem extends IconNameMixin(Buttonsimple) {
  @property({ type: String, reflect: true, attribute: 'badge-type' }) badgeType?: 'dot' | 'counter';

  @property({ type: Number, reflect: true }) counter?: number;

  @property({ type: Number, attribute: 'max-counter', reflect: true })
  maxCounter: number = DEFAULTS.MAX_COUNTER;

  @property({ type: Boolean, reflect: true }) override disabled = false;

  @property({ type: String, reflect: true, attribute: 'nav-id' }) navId = '';

  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * @internal
   */
  private prevIconName?: string;

  // get data from context
  private readonly sideNavigationProviderContext = providerUtils.consume({ host: this,
    context: SideNavigationProvider.Context });

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'tab';
    this.softDisabled = undefined as unknown as boolean;
    this.size = undefined as unknown as ButtonSize;
    this.type = undefined as unknown as ButtonType;
  }

  /**
   * Dispatch the activechange event.
   *
   * @param active - The active state of the tab.
   */
  private handleTabActiveChange = (active: boolean): void => {
    const event = new CustomEvent('activechange', {
      detail: { navId: this.navId, active },
      bubbles: true,
    });
    this.dispatchEvent(event);
  };

  /**
   * Modifies the icon name based on the active state.
   * If the tab is active, the icon name is suffixed with '-filled'.
   * If the tab is inactive, the icon name is restored to its original value.
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
   * Sets the aria-selected attribute based on the active state of the Tab.
   * If the tab is active, the filled version of the icon is displayed,
   * else the icon is restored to its original value.
   *
   * @param element - The tab element.
   * @param active - The active state of the tab.
   */
  protected override setActive(element: HTMLElement, active: boolean) {
    element.setAttribute('aria-selected', active ? 'true' : 'false');
    this.modifyIconName(active);
  }

  protected override executeAction() {
    // Toggle the active state of the tab.
    this.active = !this.active;
    this.handleTabActiveChange(this.active);
  }

  renderTextLabel() {
    if (this.sideNavigationProviderContext.value?.variant === VARIANTS.FIXED_COLLAPSED
      || (this.sideNavigationProviderContext.value?.variant === VARIANTS.FLEXIBLE
        && !this.sideNavigationProviderContext.value?.expanded)
    ) {
      return nothing;
    }
    return html`
       <mdc-text
          type=${this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}
          tagname=${VALID_TEXT_TAGS.SPAN}
          part="text-container">
          <slot></slot>
        </mdc-text>
    `;
  }

  public override render() {
    return html`
        <div part="marker-container">
          <mdc-marker 
            variant="solid" 
            part="marker" 
            style=${this.active ? '' : 'visibility: hidden'}>
          </mdc-marker>
        </div>
        <div part="nav-item-tab">
          ${this.iconName
    ? html` <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="icon"></mdc-icon>` : nothing}
          ${this.renderTextLabel()}
          ${this.badgeType
    ? html`<mdc-badge type="${this.badgeType}" counter="${ifDefined(this.counter)}" 
    max-counter="${this.maxCounter}"></mdc-badge>` : nothing}
        </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default NavItem;
