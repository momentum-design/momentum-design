import { CSSResult, html } from 'lit';
import styles from './brandvisual.styles';
import { Component } from '../../models';

/**
 * brandvisual component, which ...
 *
 * @tagname mdc-brandvisual
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Brandvisual extends Component {
  public override render() {
    return html`<p>This is a dummy brandvisual component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Brandvisual;
