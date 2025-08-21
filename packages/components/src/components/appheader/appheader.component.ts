import { CSSResult, html, nothing } from 'lit';

import { Component } from '../../models';

import styles from './appheader.styles';

/**
 * The `mdc-appheader` component provides a structured and accessible app header layout.
 * It consists of three primary sections: leading, center, and trailing.
 *
 * - The **leading section** typically holds a **brand logo**, **brand name** or **menu icon**.
 * - The **center section** can contain a **search bar**, **icons** or action controls.
 * - The **trailing section** generally includes a **profile avatar**, **additional icons** or **action controls**.
 *
 * @tagname mdc-appheader
 *
 * @slot leading - Slot for the leading section (e.g., brand logo, brand name).
 * @slot center - Slot for the center section (e.g., search bar, icons).
 * @slot trailing - Slot for the trailing section (e.g., profile avatar, icons).
 *
 * @csspart container - The main container for styling the header.
 * @csspart leading-section - The leading section of the header.
 * @csspart center-section - The center section of the header.
 * @csspart trailing-section - The trailing section of the header.
 */
class Appheader extends Component {
  /**
   * Renders the structured layout of the app header.
   * Uses `slots` for flexibility, allowing consumers to insert custom content.
   */
  public override render() {
    const hasCenter = !!this.querySelector('[slot="center"]');

    return html`
      <header part="container">
        <div part="leading-section">
          <slot name="leading"></slot>
        </div>
        ${hasCenter
          ? html`<div part="center-section"><slot name="center"></slot></div>`
          : nothing}
        <div part="trailing-section">
          <slot name="trailing"></slot>
        </div>
      </header>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Appheader;
