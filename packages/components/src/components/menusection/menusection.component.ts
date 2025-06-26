import { CSSResult, PropertyValues, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { ROLE } from '../../utils/roles';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

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
   * The primary label of the list item.
   * This appears on the leading side of the list item.
   */
  @property({ type: String, reflect: true }) label: string | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', ROLE.GROUP);
  }

  override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('label')) {
      // Because IDREF attribute reflection does not work across light and shadow DOM, we either set the
      // `aria-label` directly or use the `ariaLabelledByElements`.
      // Since the later one just released in the major browsers, we do the first one for now.
      // more details: https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/
      this.ariaLabel = this.label;
    }
  }

  private renderLabel() {
    if (this.label) {
      return html`<mdc-text
        class="mdc-menusection__label"
        role="presentation"
        type=${TYPE.BODY_MIDSIZE_BOLD}
        tagname=${VALID_TEXT_TAGS.DIV}
      >
        ${this.label}
      </mdc-text> `;
    }
    return null;
  }

  public override render() {
    return html`${this.renderLabel()}<slot></slot>`;
  }

  public static override styles: CSSResult[] = [...Component.styles, ...styles];
}

export default MenuSection;
