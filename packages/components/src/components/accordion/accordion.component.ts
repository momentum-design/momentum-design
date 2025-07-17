import { CSSResult, html } from 'lit';

import { Component } from '../../models';

import styles from './accordion.styles';

/**
 * accordion component, which ...
 *
 * @tagname mdc-accordion
 *
 * @slot default - This is a default/unnamed slot
 *
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Accordion extends Component {
  public override render() {
    return html`<p>This is a dummy accordion component!</p>
      <slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Accordion;
