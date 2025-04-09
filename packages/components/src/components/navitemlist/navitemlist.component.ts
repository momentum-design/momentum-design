import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './navitemlist.styles';
import { Component } from '../../models';
import { DEFAULTS } from './navitemlist.constants';

/**
 * A navigation list container component used to group multiple nav items.
 *
 * Typically used in side navigation or vertical menu structures.
 *
 * @tagname mdc-navitemlist
 *
 * @slot default - Slot for projecting one or more navigation items.
 *
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
