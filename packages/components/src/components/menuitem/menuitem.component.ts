import { CSSResult, html } from 'lit';
import styles from './menuitem.styles';
import { Component } from '../../models';

/**
 * menuitem component, which ...
 *
 * @tagname mdc-menuitem
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class MenuItem extends Component {
  public override render() {
    return html`<p>This is a dummy menuitem component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuItem;
