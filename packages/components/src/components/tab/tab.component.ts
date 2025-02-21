import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './tab.styles';
import type { IconNames } from '../icon/icon.types';
import { DEFAULTS, TAB_VARIANTS } from './tab.constants';
import type { Variant } from './tab.types';
import { getIconNameWithoutStyle } from '../button/button.utils';
import Buttonsimple from '../buttonsimple/buttonsimple.component';
import { ButtonSize, ButtonType } from '../buttonsimple/buttonsimple.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';

/**
 * `mdc-tab` is Tab component to be used within the Tabgroup.
 *
 * Passing in the attribute `text` to the tab component is changing the text displayed in the tab.
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
 * @tagname mdc-tab
 *
 * @cssproperty --mdc-tab-content-gap - Gap between the badge(if provided), icon and text.
 * @cssproperty --mdc-tab-height - Height of the tab.
 * @cssproperty --mdc-tab-glass-active-background-color-disabled - Background color for active glass tab
 *  in disabled state.
 * @cssproperty --mdc-tab-glass-active-background-color-hover - Background color for active glass tab in hover state.
 * @cssproperty --mdc-tab-glass-active-background-color-normal - Background color for active glass tab in rest state.
 * @cssproperty --mdc-tab-glass-active-background-color-pressed - Background color for active glass tab
 *  in pressed state.
 * @cssproperty --mdc-tab-glass-active-color - Text and icon color for active glass tab.
 * @cssproperty --mdc-tab-glass-active-color-disabled - Text and icon color for active glass tab in disabled state.
 * @cssproperty --mdc-tab-glass-border-radius - Border radius for glass tab.
 * @cssproperty --mdc-tab-glass-inactive-background-color-disabled - Background color for inactive glass tab
 *  in disabled state.
 * @cssproperty --mdc-tab-glass-inactive-background-color-hover - Background color for inactive glass tab
 *  in hover state.
 * @cssproperty --mdc-tab-glass-inactive-background-color-normal - Background color for inactive glass tab
 *  in rest state.
 * @cssproperty --mdc-tab-glass-inactive-background-color-pressed - Background color for inactive glass tab
 *  in pressed state.
 * @cssproperty --mdc-tab-glass-inactive-color - Text and icon color for inactive glass tab.
 * @cssproperty --mdc-tab-glass-inactive-color-disabled - Text and icon color for inactive glass tab in disabled state.
 * @cssproperty --mdc-tab-line-active-background-color-pressed - Background color for active line tab in pressed state.
 * @cssproperty --mdc-tab-line-active-background-color-disabled - Background color for active line tab
 *  in disabled state.
 * @cssproperty --mdc-tab-line-active-background-color-hover - Background color for active line tab in hover state.
 * @cssproperty --mdc-tab-line-active-background-color-normal - Background color for active line tab in rest state.
 * @cssproperty --mdc-tab-line-active-color - Text and icon color for active line tab.
 * @cssproperty --mdc-tab-line-active-color-disabled - Text and icon color for active line tab in disabled state.
 * @cssproperty --mdc-tab-line-active-indicator-color - color for indicator in active line tab.
 * @cssproperty --mdc-tab-line-active-indicator-color-disabled - Color for indicator in active line tab
 *  in disabled state.
 * @cssproperty --mdc-tab-line-active-indicator-height - Height for indicator in active line tab.
 * @cssproperty --mdc-tab-line-active-indicator-width - Width for indicator in active line tab.
 * @cssproperty --mdc-tab-line-border-bottom-left-radius - Bottom left border radius for line tab.
 * @cssproperty --mdc-tab-line-border-bottom-right-radius - Bottom right border radius for line tab.
 * @cssproperty --mdc-tab-line-border-top-left-radius - Top left border radius for line tab.
 * @cssproperty --mdc-tab-line-border-top-right-radius - Top right border radius for line tab.
 * @cssproperty --mdc-tab-line-inactive-background-color-pressed - Background color for inactive line tab
 *  in pressed state.
 * @cssproperty --mdc-tab-line-inactive-background-color-disabled - Background color for inactive line tab
 *  in disabled state
 * @cssproperty --mdc-tab-line-inactive-background-color-hover - Background color for inactive line tab in hover state.
 * @cssproperty --mdc-tab-line-inactive-background-color-normal - Background color for inactive line tab
 *  in rest state.
 * @cssproperty --mdc-tab-line-inactive-color - Text and icon color for inactive line tab.
 * @cssproperty --mdc-tab-line-inactive-color-disabled - Text and icon color for inactive line tab in disabled state.
 * @cssproperty --mdc-tab-padding-left - Padding left for the tab.
 * @cssproperty --mdc-tab-padding-right - Padding right for the tab.
 * @cssproperty --mdc-tab-pill-active-background-color-pressed - Background color for active pill tab in pressed state.
 * @cssproperty --mdc-tab-pill-active-background-color-disabled - Background color for active pill tab
 *  in disabled state.
 * @cssproperty --mdc-tab-pill-active-background-color-hover - Background color for active pill tab in hover state.
 * @cssproperty --mdc-tab-pill-active-background-color-normal - Background color for active pill tab in rest state.
 * @cssproperty --mdc-tab-pill-active-color - Text and icon color for active pill tab.
 * @cssproperty --mdc-tab-pill-active-color-disabled - Text and icon color for active pill tab in disabled state.
 * @cssproperty --mdc-tab-pill-border-radius - Border radius for pill tab.
 * @cssproperty --mdc-tab-pill-inactive-background-color-pressed - Background color for inactive pill tab
 *  in pressed state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-disabled - Background color for inactive pill tab
 *  in disabled state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-hover - Background color for inactive pill tab in hover state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-normal - Background color for inactive pill tab in rest state.
 * @cssproperty --mdc-tab-pill-inactive-color - Text and icon color for inactive pill tab.
 * @cssproperty --mdc-tab-pill-inactive-color-disabled - Text and icon color for inactive pill tab in disabled state.
 */
class Tab extends IconNameMixin(Buttonsimple) {
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

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
    }
  }

  public override render() {
    return html`
      <div part="container">
        ${this.iconName
    ? html` <mdc-icon name="${this.iconName as IconNames}" size="1" length-unit="rem" part="icon"></mdc-icon>`
    : nothing}
        ${this.text
    ? html` <mdc-text
              type=${this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}
              tagname=${VALID_TEXT_TAGS.SPAN}
              data-text=${this.text}
              part="text"
              >${this.text}</mdc-text
            >`
    : nothing}
        <slot name="chip" part="chip"></slot>
        <slot name="badge" part="badge"></slot>
      </div>
      <div part="indicator"></div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Tab;
