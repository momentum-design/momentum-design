import { CSSResult, html, nothing, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './tab.styles';
import { IconNames } from '../icon/icon.types';
import { DEFAULTS } from './tab.constants';
import { Variant } from './tab.types';
import { getIconNameWithoutStyle } from '../button/button.utils';
import Buttonsimple from '../buttonsimple/buttonsimple.component';
import { ButtonSize, ButtonType } from '../buttonsimple/buttonsimple.types';

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
   *
   * @param element - The Tab element.
   * @param active - The active state.
   */

  private setAriaSelected(element: HTMLElement, active: boolean) {
    element.setAttribute('aria-selected', active ? 'true' : 'false');
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('active')) {
      this.modifyIconName(this.active);
      this.setAriaSelected(this, this.active);
    }
  }

  protected override executeAction() {
    // Toggle the active state of the Tab.
    this.active = !this.active;
  }

  public override render() {
    return html`
      <slot name="badge"></slot>
      ${this.iconName ? html`<mdc-icon name="${this.iconName as IconNames}" size="1" length-unit="rem">
        </mdc-icon>` : nothing}
        <mdc-text type=${this.active ? 'body-midsize-bold' : 'body-midsize-medium'} tagname="span">
          <slot></slot>
        </mdc-text>
      `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Tab;
