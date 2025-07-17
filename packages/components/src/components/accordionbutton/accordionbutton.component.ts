import { CSSResult, html } from 'lit';

import { Component } from '../../models';

import styles from './accordionbutton.styles';

/**
 * accordionbutton component, which ...
 *
 * @tagname mdc-accordionbutton
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Accordionbutton extends Component {
  public override render() {
    return html`<p>This is a dummy accordionbutton component!</p>
      <slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Accordionbutton;
