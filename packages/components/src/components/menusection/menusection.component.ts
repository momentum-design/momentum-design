import { CSSResult, html } from 'lit';
import { Component } from '../../models';
import { ROLE } from '../../utils/roles';

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
 */
class MenuSection extends Component {
  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', ROLE.GROUP);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: CSSResult[] = [...Component.styles];
}

export default MenuSection;
