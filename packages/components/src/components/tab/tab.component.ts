import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import type { IconNames } from '../icon/icon.types';
import { getIconNameWithoutStyle } from '../button/button.utils';
import Buttonsimple from '../buttonsimple/buttonsimple.component';
import { ButtonSize, ButtonType } from '../buttonsimple/buttonsimple.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import { ROLE } from '../../utils/roles';

import type { Variant } from './tab.types';
import { DEFAULTS, TAB_VARIANTS } from './tab.constants';
import styles from './tab.styles';

/**
 * `mdc-tab` is Tab component to be used within the Tabgroup.
 *
 * Passing in the attribute `text` to the tab component is changing the text displayed in the tab.
 *
 * Pass attribute `tabid` when using inside of `tablist` component.
 *
 * The `slot="badge"` can be used to add a badge to the tab.
 *
 * The `slot="chip"` can be used to add a chip to the tab.
 *
 * For `icon`, the `mdc-icon` component is used to render the icon.
 *
 * Note: Icons can be used in conjunction with badges or chips.
 * Badges and chips should not be used at the same time.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @event click - (React: onClick) This event is dispatched when the tab is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the tab.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the tab.
 * @event focus - (React: onFocus) This event is dispatched when the tab receives focus.
 * @event activechange - (React: onActiveChange) This event is dispatched when the active state of the tab changes
 * <br />
 * Event Data: `detail: { tabId: this.tabId, active }`
 * <br />
 * Note: the activechange event is used by the tab list component to react to the change in state of the tab,
 * so this event won't be needed if the tab list is used.
 *
 * @tagname mdc-tab
 *
 * @cssproperty --mdc-tab-height - The height of the tab.
 * @cssproperty --mdc-tab-padding-left - The left padding of the tab.
 * @cssproperty --mdc-tab-padding-right - The right padding of the tab.
 * @cssproperty --mdc-tab-content-gap - The gap between the icon and text in the tab.
 * @cssproperty --mdc-tab-background-color - The background color of the tab.
 * @cssproperty --mdc-tab-color - The text color of the tab.
 * @cssproperty --mdc-tab-border-radius - The border radius of the tab.
 *
 * @cssproperty --mdc-tab-line-active-indicator-height - The height of the active indicator line.
 * @cssproperty --mdc-tab-line-active-indicator-width - The width of the active indicator line.
 *
 * @cssproperty --mdc-tab-line-border-bottom-left-radius - The border bottom left radius of the active indicator line.
 * @cssproperty --mdc-tab-line-border-bottom-right-radius - The border bottom right radius of the active indicator line.
 * @cssproperty --mdc-tab-line-border-top-left-radius - The border top left radius of the active indicator line.
 * @cssproperty --mdc-tab-line-border-top-right-radius - The border top right radius of the active indicator line.
 *
 *
 *
 * @csspart container - The container of the tab.
 * @csspart icon - The icon of the tab.
 * @csspart indicator - The indicator of the tab.
 * @csspart text - The text of the tab.
 */
class Tab extends IconNameMixin(Buttonsimple) {
  /**
   * The tab's active state indicates whether it is currently toggled on (active) or off (inactive).
   * When the active state is true, the tab is considered to be in an active state, meaning it is toggled on.
   * Conversely, when the active state is false, the tab is in an inactive state, indicating it is toggled off.
   *
   * This attribute also controls the "aria-selected" attribute of the tab.
   * When the tab is active, "aria-selected" is set to true, indicating that the tab is selected.
   * When the tab is inactive, "aria-selected" is set to false, indicating that the tab is not selected.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  override active?: boolean = DEFAULTS.ACTIVE;

  /**
   * Text to be displayed in the tab.
   * If no `text` is provided, no text will be rendered,
   * `aria-label` should be set on the tab.
   */
  @property({ type: String, reflect: true })
  text?: string;

  /**
   * Tab can have three variants:
   * - `glass`
   * - `line`
   * - `pill`
   *
   * It defines the background and foreground color of the tab.
   * @default pill
   */
  @property({ type: String, reflect: true })
  variant: Variant = DEFAULTS.VARIANT;

  /**
   * Id of the tab (used as a identificator when used in the tablist)
   * Note: has to be unique!
   *
   * @default undefined
   */
  @property({ type: String, reflect: true, attribute: 'tab-id' })
  tabId?: string;

  /**
   * @internal
   */
  private prevIconName?: string;

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.TAB;
    this.size = undefined as unknown as ButtonSize;
    this.type = undefined as unknown as ButtonType;

    this.ariaStateKey = 'aria-selected';

    if (!this.tabId && this.onerror) {
      this.onerror('tab id is required');
    }
  }

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
   * Sets the variant attribute for the tab component.
   * If the provided variant is not included in the TAB_VARIANTS,
   * it defaults to the value specified in DEFAULTS.VARIANT.
   *
   * @param variant - The variant to set.
   */
  private setVariant(variant: Variant): void {
    this.setAttribute('variant', Object.values(TAB_VARIANTS).includes(variant) ? variant : DEFAULTS.VARIANT);
  }

  /**
   * Dispatch the activechange event.
   *
   * @param active - The active state of the tab.
   */
  private handleTabActiveChange = (active?: boolean): void => {
    const event = new CustomEvent('activechange', {
      detail: { tabId: this.tabId, active },
      bubbles: true,
    });
    this.dispatchEvent(event);
  };

  /**
   * Sets the aria-selected attribute based on the active state of the Tab.
   * If the tab is active, the filled version of the icon is displayed,
   * else the icon is restored to its original value.
   *
   * @param element - The tab element.
   * @param active - The active state of the tab.
   */
  protected override setActive(element: HTMLElement, active: boolean) {
    super.setActive(element, active);
    this.modifyIconName(active);
  }

  protected override executeAction() {
    // Toggle the active state of the tab.
    this.handleTabActiveChange(this.active);
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
    }
  }

  public override render() {
    return html`
      <div part="container">
        <slot name="prefix">
          ${this.iconName
            ? html` <mdc-icon name="${this.iconName as IconNames}" size="1" length-unit="rem" part="icon"></mdc-icon>`
            : nothing}
        </slot>
        ${this.text
          ? html` <mdc-text
              type=${this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}
              tagname=${VALID_TEXT_TAGS.SPAN}
              data-text=${this.text}
              part="text"
              >${this.text}</mdc-text
            >`
          : nothing}
        <slot name="badge"></slot>
        <slot name="chip"></slot>
      </div>
      <div part="indicator"></div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Tab;
