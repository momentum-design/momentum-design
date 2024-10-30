import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './text.styles';
import { Component } from '../../models';
import { DEFAULTS, VALID_TEXT_TAGS } from './text.constants';

/**
 * Text component for creating styled text elements.
 * It has to be mounted within the ThemeProvider to access color and font tokens.
 *
 * The `type` attribute allows changing the text style.
 * The `tagname` attribute allows changing the tag name of the text element.
 * The default tag name is `p`.
 *
 * The `tagname` attribute should be a valid HTML tag name.
 * If the `tagname` attribute is not a valid HTML tag name, the default tag name will be used.
 *
 * The styling is applied based on the `type` attribute.
 *
 * @tagname mdc-text
 * @slot - Default slot for text content
 *
 * @csspart text - The text element
 */
class Text extends Component {
  // Description for this property is moved to `./text.stories.ts` file
  @property({ attribute: 'type', reflect: true, type: String })
  public type = DEFAULTS.TYPE;

  // Description for this property is moved to `./text.stories.ts` file
  @property({ attribute: 'tagname', reflect: true, type: String })
  public tagname? = DEFAULTS.TEXT_ELEMENT_TAGNAME;

  public override render() {
    // Lit does not support dynamically changing values for the tag name of a custom element.
    // Read more: https://lit.dev/docs/templates/expressions/#invalid-locations
    switch (this.tagname) {
      case VALID_TEXT_TAGS.H1: return html`<h1 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h1>`;
      case VALID_TEXT_TAGS.H2: return html`<h2 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h2>`;
      case VALID_TEXT_TAGS.H3: return html`<h3 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h3>`;
      case VALID_TEXT_TAGS.H4: return html`<h4 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h4>`;
      case VALID_TEXT_TAGS.H5: return html`<h5 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h5>`;
      case VALID_TEXT_TAGS.H6: return html`<h6 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h6>`;
      case VALID_TEXT_TAGS.DIV: return html`<div part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></div>`;
      case VALID_TEXT_TAGS.SPAN: return html`<span part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></span>`;
      case VALID_TEXT_TAGS.SMALL: return html`<small part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></small>`;
      case VALID_TEXT_TAGS.P:
      default: return html`<p part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></p>`;
    }
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Text;
