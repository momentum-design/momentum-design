import { CSSResult, html } from 'lit';
import styles from './inputchip.styles';
import { Component } from '../../models';

/**
 * inputchip component, which ...
 *
 * @tagname mdc-inputchip
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Inputchip extends Component {
  public override render() {
    return html`<p>This is a dummy inputchip component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Inputchip;
