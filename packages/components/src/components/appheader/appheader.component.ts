import { CSSResult, html } from 'lit';

import { Component } from '../../models';

import styles from './appheader.styles';

/**
 * The `mdc-appheader` component provides a structured and accessible app header layout with three sections: leading, center, and trailing.
 *
 * **Layout sections:**
 * - **Leading** - Typically holds brand logo, brand name, or menu icon
 * - **Center** - Can contain search bar, icons, navigation links, or action controls
 * - **Trailing** - Generally includes profile avatar, icons, settings, or additional action controls
 *
 * Each section automatically handles flex alignment: leading aligns left, center aligns center, trailing aligns right.
 *
 * @tagname mdc-appheader
 *
 * @slot leading - Content for the leading section (left-aligned).
 * @slot center - Content for the center section (center-aligned).
 * @slot trailing - Content for the trailing section (right-aligned).
 *
 * @cssproperty --mdc-appheader-height - Height of the app header. Default is 4rem (64px).
 *
 * @csspart container - The main header container.
 * @csspart leading-section - The leading section wrapper (left side).
 * @csspart center-section - The center section wrapper (middle).
 * @csspart trailing-section - The trailing section wrapper (right side).
 */
class Appheader extends Component {
  /**
   * Renders the structured layout of the app header.
   * Uses `slots` for flexibility, allowing consumers to insert custom content.
   */
  public override render() {
    return html`
      <header part="container">
        <div part="leading-section">
          <slot name="leading"></slot>
        </div>
        <div part="center-section"><slot name="center"></slot></div>
        <div part="trailing-section">
          <slot name="trailing"></slot>
        </div>
      </header>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Appheader;
