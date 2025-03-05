import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './chip.styles';
import { Component } from '../../models';

/**
 * chip component, which ...
 *
 * @tagname mdc-chip
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Chip extends Component {
  @property({ type: String }) color = 'primary';

  public override render() {
    return html`<p>This is a dummy chip component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Chip;
