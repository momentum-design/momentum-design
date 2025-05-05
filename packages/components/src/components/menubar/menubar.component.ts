import { CSSResult, html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import { ROLE } from '../../utils/roles';
import styles from './menubar.styles';
import { ORIENTATION } from './menubar.constants';
import type { Orientation } from './menubar.types';
import { TAG_NAME as MENUITEM_TAGNAME } from '../menuitem/menuitem.constants';

/**
 * menubar component, which ...
 *
 * @tagname mdc-menubar
 *
 * @slot default - This is a default/unnamed slot
 */
class MenuBar extends Component {
  @queryAssignedElements({ selector: MENUITEM_TAGNAME })
  menuItems!: Array<HTMLElement>;

  /**
   * Aria Orientation
   * @default 'horizontal'
   */
  @property({ type: String, reflect: true, attribute: 'aria-orientation' })
  override ariaOrientation: Orientation = ORIENTATION.HORIZONTAL;

  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENUBAR;
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
