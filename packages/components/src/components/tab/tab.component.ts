import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './tab.styles';
import { IconNames } from '../icon/icon.types';
import { DEFAULTS } from './tab.constants';
import { Variant } from './tab.types';
import { getIconNameWithoutStyle } from '../button/button.utils';
import Buttonsimple from '../buttonsimple/buttonsimple.component';
import { ButtonSize, ButtonType } from '../buttonsimple/buttonsimple.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

/**
 * `mdc-tab` is Tab component to be used within the Tabgroup.
 *
 * The `children` of the link component is expected to be text.
 *
 * The `slot="badge"` can be used to add a badge to the tab.
 *
 * For `icon`, the `mdc-icon` component is used to render the icon.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-tab
 *
 * @cssproperty --mdc-tab-content-gap - Gap between the badge(if provided), icon and text.
 * @cssproperty --mdc-tab-height - Height of the tab.
 * @cssproperty --mdc-tab-line-active-background-color-active - Background color for active line tab in pressed state.
 * @cssproperty --mdc-tab-line-active-background-color-disabled - Background color for active line tab
 *  in disabled state.
 * @cssproperty --mdc-tab-line-active-background-color-focus - Background color for active line tab in focus state.
 * @cssproperty --mdc-tab-line-active-background-color-hover - Background color for active line tab in hover state.
 * @cssproperty --mdc-tab-line-active-background-color-normal - Background color for active line tab in rest state.
 * @cssproperty --mdc-tab-line-active-bottom-border-color - Bottom border color for active line tab.
 * @cssproperty --mdc-tab-line-active-bottom-border-color-disabled - Bottom border color for active line tab
 *  in disabled state.
 * @cssproperty --mdc-tab-line-active-color - Text and icon color for active line tab.
 * @cssproperty --mdc-tab-line-active-color-disabled - Text and icon color for active line tab in disabled state.
 * @cssproperty --mdc-tab-line-border-bottom-left-radius - Bottom left border radius for line tab.
 * @cssproperty --mdc-tab-line-border-bottom-right-radius - Bottom right border radius for line tab.
 * @cssproperty --mdc-tab-line-border-top-left-radius - Top left border radius for line tab.
 * @cssproperty --mdc-tab-line-border-top-right-radius - Top right border radius for line tab.
 * @cssproperty --mdc-tab-line-inactive-background-color-active - Background color for inactive line tab
 *  in pressed state.
 * @cssproperty --mdc-tab-line-inactive-background-color-disabled - Background color for inactive line tab
 *  in disabled state
 * @cssproperty --mdc-tab-line-inactive-background-color-focus - Background color for inactive line tab in focus state.
 * @cssproperty --mdc-tab-line-inactive-background-color-hover - Background color for inactive line tab in hover state.
 * @cssproperty --mdc-tab-line-inactive-background-color-normal - Background color for inactive line tab
 *  in rest state.
 * @cssproperty --mdc-tab-line-inactive-color - Text and icon color for inactive line tab.
 * @cssproperty --mdc-tab-line-inactive-color-disabled - Text and icon color for inactive line tab in disabled state.
 * @cssproperty --mdc-tab-padding-left - Padding left for the tab.
 * @cssproperty --mdc-tab-padding-right - Padding right for the tab.
 * @cssproperty --mdc-tab-pill-active-background-color-active - Background color for active pill tab in pressed state.
 * @cssproperty --mdc-tab-pill-active-background-color-disabled - Background color for active pill tab
 *  in disabled state.
 * @cssproperty --mdc-tab-pill-active-background-color-focus - Background color for active pill tab in focus state.
 * @cssproperty --mdc-tab-pill-active-background-color-hover - Background color for active pill tab in hover state.
 * @cssproperty --mdc-tab-pill-active-background-color-normal - Background color for active pill tab in rest state.
 * @cssproperty --mdc-tab-pill-active-color - Text and icon color for active pill tab.
 * @cssproperty --mdc-tab-pill-active-color-disabled - Text and icon color for active pill tab in disabled state.
 * @cssproperty --mdc-tab-pill-border-radius - Border radius for pill tab.
 * @cssproperty --mdc-tab-pill-inactive-background-color-active - Background color for inactive pill tab
 *  in pressed state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-disabled - Background color for inactive pill tab
 *  in disabled state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-focus - Background color for inactive pill tab in focus state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-hover - Background color for inactive pill tab in hover state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-normal - Background color for inactive pill tab in rest state.
 * @cssproperty --mdc-tab-pill-inactive-color - Text and icon color for inactive pill tab.
 * @cssproperty --mdc-tab-pill-inactive-color-disabled - Text and icon color for inactive pill tab in disabled state.
 *
 */
class Tab extends Buttonsimple {
  /**
   * Name of the icon (= filename) to be used as icon for the tab.
   *
   * If no `icon` is provided, no icon will be rendered.
   */
  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  /**
   * Tab can have two variants:
   * - `pill`
   * - `line`
   * It defines the background and foreground color of the tab.
   * @default pill
   */
  @property({ type: String, reflect: true })
  variant: Variant = DEFAULTS.TAB_VARIANT;

  /**
   * @internal
   */
  private prevIconName?: string;

  constructor() {
    super();
    this.role = 'tab';
    this.softDisabled = undefined as unknown as boolean;
    this.size = undefined as unknown as ButtonSize;
    this.type = undefined as unknown as ButtonType;
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
        this.iconName = `${getIconNameWithoutStyle(this.iconName)}-filled`;
      } else if (this.prevIconName) {
        this.iconName = this.prevIconName;
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
  }

  public override render() {
    return html`
      <slot name="badge"></slot>
      ${this.iconName ? html`<mdc-icon name="${this.iconName as IconNames}" size="1" length-unit="rem">
        </mdc-icon>` : nothing}
        <mdc-text
          type=${this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}
          tagname=${VALID_TEXT_TAGS.SPAN}>
          <slot></slot>
        </mdc-text>
      `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Tab;
