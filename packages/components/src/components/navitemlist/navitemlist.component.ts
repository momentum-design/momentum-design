import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './navitemlist.styles';
import { Component } from '../../models';
import { DEFAULTS } from './navitemlist.constants';

/**
 * `mdc-navitemlist` is a container component used to group multiple mdc-navitem elements into a navigation list.
 * It provides the structural foundation for organizing vertical nav items and
 * ensures consistent behavior and layout within side navigation patterns.
 *
 * Note: mdc-navitemlist is typically used within the sidenavigation component.
 * @tagname mdc-navitemlist
 *
 * @slot default - Slot for projecting one or more navigation items.
 */
class NavItemList extends Component {
  override connectedCallback(): void {
    super.connectedCallback();
    this.role = DEFAULTS.ROLE;
    this.ariaOrientation = 'vertical';
  }

  /**
   * Aria-label attribute to be set for accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default NavItemList;
