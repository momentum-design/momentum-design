import { CSSResult, html } from 'lit';
import styles from './option.styles';
import { Component } from '../../models';

/**
 * option component, which ...
 *
 * @tagname mdc-option
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Option extends Component {
  public override render() {
    return html`<p>This is a dummy option component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Option;
