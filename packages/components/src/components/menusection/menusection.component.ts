import { CSSResult, PropertyValues, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import { ROLE } from '../../utils/roles';
import type { IconNames } from '../icon/icon.types';
import SideNavigation from '../sidenavigation/sidenavigation.component';

import styles from './menusection.styles';
import { DEFAULTS } from './menusection.constants';

/**
 * `mdc-menusection` is a container element used to group a set of menu items.
 *
 * This component supports a mix of `menuitem`, `menuitemcheckbox`, and `menuitemradio` components.
 *
 * - If multiple `menuitemradio` components are slotted into the section, the group enforces a single-selection rule:
 *   only one radio item can be selected at a time.
 * - If `menuitemcheckbox` components are included, their checked state can be toggled independently.
 *
 * **Note**: Nested `mdc-menusection` components are not well supported and should be avoided.
 *
 * @tagname mdc-menusection
 *
 * @slot - Default slot for inserting `menuitem`, `menuitemcheckbox`, or `menuitemradio`
 *
 * @event change - (React: onChange) This event is dispatched when a `menuitemcheckbox`, or `menuitemradio` changes.
 * @event action - (React: onAction) This event is dispatched when a `menuitem` selected.
 *
 * @csspart header - The header of the menusection.
 * @csspart align-header - The header of the menusection when it is aligned to the start.
 * @csspart container - The container of the menusection.
 * @csspart divider - The divider of the menusection.
 */
class MenuSection extends Component {
  /**
   * The aria-label for the section.
   * This is used for accessibility purposes to describe the section.
   * If not provided, it defaults to the `headerText`.
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' }) override ariaLabel: string | null = null;

  /**
   * The primary headerText of the list item.
   * This appears on the leading side of the list item.
   */
  @property({ type: String, reflect: true, attribute: 'header-text' }) headerText: string | null = null;

  /**
   * Name of the icon rendered before the text
   *
   * If not provided, no icon will be rendered and text will be aligned to the start.
   */
  @property({ type: String, attribute: 'prefix-icon' }) prefixIcon?: IconNames;

  /**
   * Whether to show a divider below the section header.
   * This is useful for visually separating sections in the menu.
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-divider' })
  showDivider = false;

  /**
   * The variant of the divider.
   * Can be set to 'solid' or 'gradient'.
   *
   * Keep 'solid' if used in MenuPopovers, as it is the default style.
   *
   * @default 'solid'
   */
  @property({ type: String, reflect: true, attribute: 'divider-variant' })
  dividerVariant = DEFAULTS.DIVIDER_VARIANT;

  /**
   * Shows or hides the section headers based on the expanded state of the side navigation.
   *
   * @internal
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-header-text' })
  hideHeaderText = false;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this, context: SideNavigation.Context });

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', ROLE.GROUP);
  }

  override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (
      (changedProperties.has('ariaLabel') || changedProperties.has('headerText')) &&
      (!this.ariaLabel || this.ariaLabel === changedProperties.get('headerText'))
    ) {
      // Because IDREF attribute reflection does not work across light and shadow DOM, we either set the
      // `aria-label` directly or use the `ariaLabelledByElements`.
      // Since the later one just released in the major browsers, we do the first one for now.
      // more details: https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/
      this.ariaLabel = this.headerText || '';
    }

    const context = this.sideNavigationContext?.value;
    if (!context) return;

    const { expanded } = context;
    this.hideHeaderText = !expanded;
  }

  private renderHeader() {
    if (this.headerText) {
      return html` <mdc-listheader
        part="header ${this.sideNavigationContext?.value?.expanded ? 'align-header' : ''}"
        header-text="${this.headerText}"
        prefix-icon="${ifDefined(this.prefixIcon)}"
      >
      </mdc-listheader>`;
    }
    return null;
  }

  public override render() {
    return html`
      ${!this.hideHeaderText ? this.renderHeader() : null}
      <slot part="container"></slot>
      ${this.showDivider ? html`<mdc-divider variant="${this.dividerVariant}" part="divider"></mdc-divider>` : null}
    `;
  }

  public static override styles: CSSResult[] = [...Component.styles, ...styles];
}

export default MenuSection;
