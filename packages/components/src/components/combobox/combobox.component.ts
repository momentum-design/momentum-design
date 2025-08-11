import { CSSResult, html } from 'lit';

import { Component } from '../../models';

import styles from './combobox.styles';

/**
 * combobox component, which ...
 *
 * @tagname mdc-combobox
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Combobox extends Component {
  public override render() {
    return html`<p>This is a dummy combobox component!</p>
      <slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Combobox;
