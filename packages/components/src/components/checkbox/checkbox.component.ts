import { CSSResult, html } from 'lit';
import styles from './checkbox.styles';
import Helperlabel from '../helperlabel';

/**
 * checkbox component, which ...
 *
 * @tagname mdc-checkbox
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Checkbox extends Helperlabel {
  public override render() {
    return html`<p>This is a dummy component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Helperlabel.styles, ...styles];
}

export default Checkbox;
