import { CSSResult, html } from 'lit';
import styles from './statictoggle.styles';
import { Component } from '../../models';

/**
 * statictoggle component, which ...
 *
 * @tagname mdc-statictoggle
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Statictoggle extends Component {
  public override render() {
    return html`<p>This is a dummy statictoggle component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Statictoggle;
