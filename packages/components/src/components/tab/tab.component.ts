import { CSSResult, html, nothing, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './tab.styles';
import { IconNames } from '../icon/icon.types';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { DEFAULTS } from './tab.constants';
import { TabVariant } from './tab.types';
import { getIconNameWithoutStyle } from '../button/button.utils';
import { Component } from '../../models';

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
class Tab extends DisabledMixin(Component) {
  /**
   * The tab's active state indicates whether it is currently toggled on (active) or off (inactive).
   * When the active state is true, the tab is considered to be in an active state.
   * Conversely, when the active state is false, the tab is in an inactive state and tabIndex will be -1.
   * @default false
   */
  @property({ type: Boolean }) active = false;

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
  @property({ type: String, attribute: 'tab-variant', reflect: true })
  tabVariant: TabVariant = DEFAULTS.TAB_VARIANT;

  /**
   * @internal
   */
  private prevIconName?: string;

  /**
   * @internal
   */
  private prevTabindex : number | null = null;

  constructor() {
    super();
    this.role = 'button';
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
   * Sets the disabled aria attribute for the Tab.
   *
   * @param element - The Tab element.
   * @param disabled - The disabled state.
   */

  private setDisabled(element: HTMLElement, disabled: boolean) {
    if (disabled) {
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.removeAttribute('aria-disabled');
    }
    this.updateTabIndex(disabled);
  }

  /**
   * Sets the aria-selected attribute based on the active state of the Tab.
   *
   * @param element - The Tab element.
   * @param active - The active state.
   */

  private setAriaSelected(element: HTMLElement, active: boolean) {
    if (this.role === 'tab') {
      element.setAttribute('aria-selected', active ? 'true' : 'false');
    }
  }

  /**
   * Updates the tabindex based on the disabled state of the Tab.
   * @param isDisabled - is Tab disabled
   */
  private updateTabIndex(isDisabled: boolean): void {
    if (isDisabled) {
      this.prevTabindex = this.tabIndex;
      this.tabIndex = -1;
    } else if (this.prevTabindex) {
      this.tabIndex = this.prevTabindex;
    } else {
      this.tabIndex = 0;
    }
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.has('active')) {
      this.modifyIconName(this.active);
      this.setAriaSelected(this, this.active);
    }
    if (changedProperties.has('disabled')) {
      this.setDisabled(this, this.disabled);
    }
  }

  public override render() {
    return html`
      <slot name="badge"></slot>
      ${this.iconName ? html`<mdc-icon name="${this.iconName as IconNames}" size="1" length-unit="rem">
        </mdc-icon>` : nothing}
      <slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Tab;
