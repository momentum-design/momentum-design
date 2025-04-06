import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './navitemlist.styles';
import { Component } from '../../models';
import { DEFAULTS } from './navitemlist.constants';

/**
 * NavItemList component, which ...
 *
 * @tagname mdc-navitemlist
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
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
