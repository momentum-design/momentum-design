import { CSSResult, PropertyValues, html } from 'lit';
import { property } from 'lit/decorators.js';

import providerUtils from '../../utils/provider';
import { Component } from '../../models';
import { ROLE } from '../../utils/roles';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import SideNavigation from '../sidenavigation/sidenavigation.component';

import styles from './menusection.styles';

/**
 * `mdc-menusection` is a container element used to group a set of menu items.
 *
 * This component supports a mix of `menuitem`, `menuitemcheckbox`, and `menuitemradio` components.
 *
 * - If multiple `menuitemradio` components are slotted into the section, the group enforces a single-selection rule:
 *   only one radio item can be selected at a time.
 * - If `menuitemcheckbox` components are included, their checked state can be toggled independently.
 *
 * @tagname mdc-menusection
 *
 * @slot - Default slot for inserting `menuitem`, `menuitemcheckbox`, or `menuitemradio`
 *
 * @event change - (React: onChange) This event is dispatched when a `menuitemcheckbox`, or `menuitemradio` changes.
 */
class MenuSection extends Component {
  /**
   * The primary headerText of the list item.
   * This appears on the leading side of the list item.
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' }) override ariaLabel: string | null = null;

  /**
   * The primary headerText of the list item.
   * This appears on the leading side of the list item.
   */
  @property({ type: String, reflect: true, attribute: 'header-text' }) headerText: string | null = null;

  /**
   * Whether to show a divider below the section header.
   * This is useful for visually separating sections in the menu.
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-divider' })
  showDivider = false;

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
  }

  /**
   * Renders the header text of the menu section.
   * If the menu section header text is placed inside the side navigation,
   * then the header text is aligned to the left of 1.75rem.
   *
   * @returns header text
   */
  private renderLabel() {
    if (this.headerText) {
      return html`<mdc-text
        part="${this.sideNavigationContext?.value?.expanded ? 'align-left' : ''}"
        type=${TYPE.BODY_MIDSIZE_BOLD}
        tagname=${VALID_TEXT_TAGS.DIV}
      >
        ${this.headerText}
      </mdc-text> `;
    }
    return null;
  }

  /**
   * Shows or hides the section headers based on the expanded state of the side navigation.
   *
   * @internal
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-header-text' })
  hideHeaderText?: boolean;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this, context: SideNavigation.Context });

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    const context = this.sideNavigationContext?.value;
    if (!context) return;

    const { expanded } = context;
    this.hideHeaderText = !expanded;
  }

  public override render() {
    return html`
      ${!this.hideHeaderText ? this.renderLabel() : null}
      <slot></slot>
      ${this.showDivider ? html`<mdc-divider variant="gradient" part="divider"></mdc-divider>` : null}
    `;
  }

  public static override styles: CSSResult[] = [...Component.styles, ...styles];
}

export default MenuSection;
