import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './text.styles';
import { Component } from '../../models';
import type { FontType, ValidTextTags } from './text.types';
import { DEFAULTS } from './text.constants';

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
  /**
   * Specifies the text style to be applied.
   *
   * Acceptable values include:
   *
   * - 'body-small-regular'
   * - 'body-small-medium'
   * - 'body-small-bold'
   * - 'body-midsize-regular'
   * - 'body-midsize-medium'
   * - 'body-midsize-bold'
   * - 'body-large-regular'
   * - 'body-large-medium'
   * - 'body-large-bold'
   * - 'body-small-regular-underline'
   * - 'body-small-medium-underline'
   * - 'body-midsize-regular-underline'
   * - 'body-midsize-medium-underline'
   * - 'body-large-regular-underline'
   * - 'body-large-medium-underline'
   * - 'heading-small-regular'
   * - 'heading-small-medium'
   * - 'heading-small-bold'
   * - 'heading-midsize-regular'
   * - 'heading-midsize-medium'
   * - 'heading-midsize-bold'
   * - 'heading-large-regular'
   * - 'heading-large-medium'
   * - 'heading-large-bold'
   * - 'heading-xlarge-regular'
   * - 'heading-xlarge-medium'
   * - 'heading-xlarge-bold'
   * - 'headline-small-light'
   * - 'headline-small-regular'
   */
  @property({ attribute: 'type', reflect: true, type: String })
  public type: FontType = DEFAULTS.TYPE;

  /**
   * Specifies the HTML tag name for the text element. The default tag name is `p`.
   * This attribute is optional. When set, it changes the tag name of the text element.
   *
   * Acceptable values include:
   *
   * - 'h1'
   * - 'h2'
   * - 'h3'
   * - 'h4'
   * - 'h5'
   * - 'h6'
   * - 'p'
   * - 'small'
   * - 'span'
   * - 'div'
   *
   * For instance, setting this attribute to `h2` will render the text element as an `h2` element.
   * Note that the styling is determined by the `type` attribute.
   */
  @property({ attribute: 'tagname', reflect: true, type: String })
  public tagname?: ValidTextTags = DEFAULTS.TEXT_ELEMENT_TAGNAME;

  public override render() {
    // Lit does not support dynamically changing values for the tag name of a custom element.
    // Read more: https://lit.dev/docs/templates/expressions/#invalid-locations
    switch (this.tagname) {
      case 'h1': return html`<h1 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h1>`;
      case 'h2': return html`<h2 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h2>`;
      case 'h3': return html`<h3 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h3>`;
      case 'h4': return html`<h4 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h4>`;
      case 'h5': return html`<h5 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h5>`;
      case 'h6': return html`<h6 part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></h6>`;
      case 'div': return html`<div part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></div>`;
      case 'span': return html`<span part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></span>`;
      case 'small': return html`<small part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></small>`;
      case 'p':
      default: return html`<p part=${DEFAULTS.CSS_PART_TEXT}><slot></slot></p>`;
    }
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Text;
